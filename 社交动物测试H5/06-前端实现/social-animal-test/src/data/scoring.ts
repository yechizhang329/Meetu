import { questions } from './questions';
import { allAnimalIds } from './results';
import type { AnimalType, UserAnswer } from './types';

// Tie-break default per PRD §9.3 — 稳定水豚 is the safe fallback.
const TIE_BREAK_FALLBACK: AnimalType = 'calm_capybara';

// Late answers weigh slightly more on ties — PRD §9.3.1
// Returns highest scoring animal; deterministic tie-break on equal scores.
export function calculateResult(answers: UserAnswer[]): AnimalType {
  const scores: Record<AnimalType, number> = allAnimalIds.reduce(
    (acc, id) => {
      acc[id] = 0;
      return acc;
    },
    {} as Record<AnimalType, number>,
  );

  answers.forEach((ans, idx) => {
    const q = questions.find((x) => x.id === ans.questionId);
    if (!q) return;
    const opt = q.options.find((x) => x.id === ans.optionId);
    if (!opt) return;

    // Late answers get a tiny tie-break bonus (PRD §9.3.1).
    const recencyBonus = idx >= answers.length - 4 ? 0.1 : 0;

    Object.entries(opt.scores).forEach(([animal, pts]) => {
      if (pts == null) return;
      const key = animal as AnimalType;
      scores[key] += pts + recencyBonus;
    });
  });

  // Find highest with stable ordering.
  let top: AnimalType = TIE_BREAK_FALLBACK;
  let topScore = -Infinity;
  allAnimalIds.forEach((id) => {
    if (scores[id] > topScore) {
      top = id;
      topScore = scores[id];
    }
  });

  return top;
}

export function getScoreSnapshot(answers: UserAnswer[]): Record<AnimalType, number> {
  const scores: Record<AnimalType, number> = allAnimalIds.reduce(
    (acc, id) => {
      acc[id] = 0;
      return acc;
    },
    {} as Record<AnimalType, number>,
  );
  answers.forEach((ans) => {
    const q = questions.find((x) => x.id === ans.questionId);
    const opt = q?.options.find((x) => x.id === ans.optionId);
    if (!opt) return;
    Object.entries(opt.scores).forEach(([animal, pts]) => {
      if (pts == null) return;
      scores[animal as AnimalType] += pts;
    });
  });
  return scores;
}
