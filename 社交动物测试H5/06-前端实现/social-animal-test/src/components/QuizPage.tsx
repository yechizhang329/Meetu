import { useState } from 'react';
import { questions } from '../data/questions';
import type { OptionId, UserAnswer } from '../data/types';

interface Props {
  onComplete: (answers: UserAnswer[]) => void;
  initialAnswers?: UserAnswer[];
}

export function QuizPage({ onComplete, initialAnswers = [] }: Props) {
  const [index, setIndex] = useState(initialAnswers.length);
  const [answers, setAnswers] = useState<UserAnswer[]>(initialAnswers);
  const safeIndex = Math.min(index, questions.length - 1);
  const current = questions[safeIndex];
  const selectedOption = answers.find((a) => a.questionId === current.id)?.optionId;
  const progress = ((safeIndex + 1) / questions.length) * 100;

  const select = (optionId: OptionId) => {
    const next: UserAnswer[] = [
      ...answers.filter((a) => a.questionId !== current.id),
      { questionId: current.id, optionId },
    ];
    setAnswers(next);
    // Auto-advance with a tiny delay so users see the stamp effect.
    window.setTimeout(() => {
      if (safeIndex + 1 >= questions.length) {
        onComplete(next);
      } else {
        setIndex(safeIndex + 1);
      }
    }, 260);
  };

  const goBack = () => {
    if (safeIndex === 0) return;
    setIndex(safeIndex - 1);
  };

  return (
    <section className="app-shell">
      <div className="quiz-header">
        <button
          type="button"
          className="quiz-back-btn"
          onClick={goBack}
          disabled={safeIndex === 0}
        >
          ‹ 上一题
        </button>
        <div className="quiz-progress-wrap">
          <span>
            {safeIndex + 1} / {questions.length}
          </span>
          <div className="quiz-progress-bar" aria-hidden>
            <div
              className="quiz-progress-fill"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
        </div>
      </div>

      <div className="paper-card quiz-card">
        <span className="quiz-question-index">Q{safeIndex + 1}</span>
        <h2 className="quiz-question-title">{current.title}</h2>

        <ul className="option-list">
          {current.options.map((opt) => {
            const selected = selectedOption === opt.id;
            return (
              <li key={opt.id}>
                <button
                  type="button"
                  className={`option-card ${selected ? 'is-selected' : ''}`}
                  onClick={() => select(opt.id)}
                >
                  <span className="option-dot">{opt.id}</span>
                  <span>{opt.text}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="intro-disclaimer" style={{ marginTop: 24 }}>
        选了就直接进下一题，后悔了可以点"上一题"。
      </p>
    </section>
  );
}
