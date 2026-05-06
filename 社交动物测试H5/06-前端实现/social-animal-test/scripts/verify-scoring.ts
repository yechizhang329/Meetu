import { questions } from '../src/data/questions';
import { allAnimalIds, results } from '../src/data/results';
import { calculateResult } from '../src/data/scoring';
import type { AnimalType, OptionId, UserAnswer } from '../src/data/types';

// Sanity checks for question/result wiring.
// Run with:  npx tsx scripts/verify-scoring.ts

const errors: string[] = [];

// 1. Every option scores to known animal IDs only.
for (const q of questions) {
  if (q.options.length !== 4) errors.push(`[${q.id}] expected 4 options, got ${q.options.length}`);
  for (const opt of q.options) {
    for (const animal of Object.keys(opt.scores)) {
      if (!allAnimalIds.includes(animal as AnimalType)) {
        errors.push(`[${q.id}.${opt.id}] scores unknown animal ${animal}`);
      }
    }
  }
}

// 2. Every animal in results[] has required fields + roast + self-recognition.
const requiredFields: (keyof (typeof results)['power_cat'])[] = [
  'id',
  'name',
  'oneLiner',
  'mode',
  'friendView',
  'friendRoast',
  'selfRecognition',
  'vibe',
  'tips',
  'keywords',
  'shareText',
  'themeColor',
];
for (const id of allAnimalIds) {
  const r = results[id];
  if (!r) {
    errors.push(`result missing: ${id}`);
    continue;
  }
  for (const f of requiredFields) {
    if (r[f] == null || r[f] === '' || (Array.isArray(r[f]) && (r[f] as unknown[]).length === 0)) {
      errors.push(`result ${id} missing field: ${f}`);
    }
  }
}

// 3. Random sampling: generate 20,000 random answer sets; report winner distribution.
const rng = () => Math.floor(Math.random() * 4);
const dist: Record<AnimalType, number> = allAnimalIds.reduce((a, x) => {
  a[x] = 0;
  return a;
}, {} as Record<AnimalType, number>);

const N = 20000;
for (let i = 0; i < N; i++) {
  const answers: UserAnswer[] = questions.map((q) => ({
    questionId: q.id,
    optionId: q.options[rng()].id as OptionId,
  }));
  const winner = calculateResult(answers);
  dist[winner]++;
}

console.log(`\nWinner distribution across ${N} random answer sets:`);
const rows = allAnimalIds
  .map((id) => ({ id, name: results[id].name, count: dist[id], pct: (dist[id] / N) * 100 }))
  .sort((a, b) => b.count - a.count);
for (const row of rows) {
  const bar = '█'.repeat(Math.round(row.pct / 2));
  console.log(
    `${row.name.padEnd(6, '　')} ${row.id.padEnd(22)} ${String(row.count).padStart(6)}  ${row.pct.toFixed(1)}%  ${bar}`,
  );
}

const unreachable = rows.filter((r) => r.count === 0);
if (unreachable.length > 0) {
  errors.push(`Unreachable animals: ${unreachable.map((r) => r.id).join(', ')}`);
}

// 4. Deterministic tie-break sanity.
const allA: UserAnswer[] = questions.map((q) => ({ questionId: q.id, optionId: 'A' as OptionId }));
console.log(`\nAll-A pick → ${results[calculateResult(allA)].name}`);
const allB: UserAnswer[] = questions.map((q) => ({ questionId: q.id, optionId: 'B' as OptionId }));
console.log(`All-B pick → ${results[calculateResult(allB)].name}`);
const allC: UserAnswer[] = questions.map((q) => ({ questionId: q.id, optionId: 'C' as OptionId }));
console.log(`All-C pick → ${results[calculateResult(allC)].name}`);
const allD: UserAnswer[] = questions.map((q) => ({ questionId: q.id, optionId: 'D' as OptionId }));
console.log(`All-D pick → ${results[calculateResult(allD)].name}`);

if (errors.length > 0) {
  console.error('\n❌ VERIFICATION FAILED:');
  errors.forEach((e) => console.error('  ' + e));
  process.exit(1);
}

console.log('\n✅ All checks passed.');
