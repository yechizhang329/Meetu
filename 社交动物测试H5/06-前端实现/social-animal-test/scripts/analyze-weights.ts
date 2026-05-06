import { questions } from '../src/data/questions';
import { allAnimalIds, results } from '../src/data/results';
import type { AnimalType } from '../src/data/types';

// Per-animal scoring footprint analysis.
// Run:  npx tsx scripts/analyze-weights.ts

const footprint: Record<AnimalType, { questionsHit: number; maxAchievable: number; sumAcrossOptions: number; perQuestionMax: Record<string, number> }> = {} as never;

for (const id of allAnimalIds) {
  footprint[id] = { questionsHit: 0, maxAchievable: 0, sumAcrossOptions: 0, perQuestionMax: {} };
}

for (const q of questions) {
  const perQHits = new Set<AnimalType>();
  const perQMax = {} as Record<AnimalType, number>;
  for (const opt of q.options) {
    for (const [animal, pts] of Object.entries(opt.scores)) {
      if (pts == null) continue;
      const k = animal as AnimalType;
      perQHits.add(k);
      perQMax[k] = Math.max(perQMax[k] ?? 0, pts);
      footprint[k].sumAcrossOptions += pts;
    }
  }
  for (const id of perQHits) {
    footprint[id].questionsHit++;
    footprint[id].maxAchievable += perQMax[id];
    footprint[id].perQuestionMax[q.id] = perQMax[id];
  }
}

const rows = allAnimalIds
  .map((id) => ({
    id,
    name: results[id].name,
    qHit: footprint[id].questionsHit,
    maxAch: footprint[id].maxAchievable,
    sumAll: footprint[id].sumAcrossOptions,
  }))
  .sort((a, b) => b.maxAch - a.maxAch);

console.log('animal                 qHit  maxAch  sumAll');
for (const r of rows) {
  console.log(
    `${r.name.padEnd(7, '　')} ${r.id.padEnd(20)}  ${String(r.qHit).padStart(2)}    ${String(r.maxAch).padStart(3)}     ${String(r.sumAll).padStart(3)}`,
  );
}

console.log('\nNotes:');
console.log('  qHit   = how many of 12 questions reference this animal');
console.log('  maxAch = max achievable score if user picks the best option for this animal in each question they appear in');
console.log('  sumAll = sum of all scoring contributions across every option');
