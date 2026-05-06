import { useCallback, useEffect, useState } from 'react';
import './styles/app.css';
import { IntroPage } from './components/IntroPage';
import { QuizPage } from './components/QuizPage';
import { LoadingPage } from './components/LoadingPage';
import { ResultPage } from './components/ResultPage';
import { calculateResult } from './data/scoring';
import { allAnimalIds } from './data/results';
import type { AnimalType, UserAnswer } from './data/types';

type Stage = 'intro' | 'quiz' | 'loading' | 'result';

const STORAGE_KEY = 'social-animal-test@v1';

interface PersistedState {
  stage: Stage;
  answers: UserAnswer[];
  resultId: AnimalType | null;
}

function loadState(): PersistedState {
  if (typeof window === 'undefined') return blank();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return blank();
    const parsed = JSON.parse(raw) as PersistedState;
    if (!parsed || typeof parsed !== 'object') return blank();
    return parsed;
  } catch {
    return blank();
  }
}

function blank(): PersistedState {
  return { stage: 'intro', answers: [], resultId: null };
}

function readUrlHashOverride(): AnimalType | null {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash.replace('#', '');
  if (!hash) return null;
  const match = hash.match(/result=([a-z_]+)/);
  if (!match) return null;
  const candidate = match[1] as AnimalType;
  return allAnimalIds.includes(candidate) ? candidate : null;
}

function computeInitialState(): { stage: Stage; answers: UserAnswer[]; resultId: AnimalType | null } {
  const override = readUrlHashOverride();
  if (override) return { stage: 'result', answers: [], resultId: override };
  const restored = loadState();
  if (restored.stage === 'result' && restored.resultId) {
    return { stage: 'result', answers: restored.answers, resultId: restored.resultId };
  }
  if (restored.stage === 'quiz' && restored.answers.length > 0) {
    // Keep the answers in state so the user can continue after restart, but land them on intro.
    return { stage: 'intro', answers: restored.answers, resultId: null };
  }
  return { stage: 'intro', answers: [], resultId: null };
}

export default function App() {
  // Lazy initializer runs once at mount; returns a single object so we don't recompute 3 times.
  const initial = useState(() => computeInitialState())[0];
  const [stage, setStage] = useState<Stage>(initial.stage);
  const [answers, setAnswers] = useState<UserAnswer[]>(initial.answers);
  const [resultId, setResultId] = useState<AnimalType | null>(initial.resultId);

  // Keep hash routing reactive (deep-link / QA navigation) without calling setState synchronously
  // at mount — only inside the event handler.
  useEffect(() => {
    const onHashChange = () => {
      const override = readUrlHashOverride();
      if (override) {
        setResultId(override);
        setStage('result');
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Persist on every change (standalone effect = single responsibility, no render cascades).
  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ stage, answers, resultId }),
      );
    } catch {
      // ignore quota errors
    }
  }, [stage, answers, resultId]);

  const handleStart = useCallback(() => {
    setAnswers([]);
    setResultId(null);
    setStage('quiz');
  }, []);

  const handleQuizComplete = useCallback((all: UserAnswer[]) => {
    setAnswers(all);
    setStage('loading');
  }, []);

  const handleLoadingDone = useCallback(() => {
    setResultId((prev) => prev ?? calculateResult(answers));
    setStage('result');
  }, [answers]);

  const handleRetake = useCallback(() => {
    setAnswers([]);
    setResultId(null);
    setStage('intro');
    try {
      window.history.replaceState({}, '', window.location.pathname);
    } catch {
      /* ignore */
    }
  }, []);

  if (stage === 'intro') return <IntroPage onStart={handleStart} />;
  if (stage === 'quiz')
    return <QuizPage onComplete={handleQuizComplete} initialAnswers={answers} />;
  if (stage === 'loading') return <LoadingPage onDone={handleLoadingDone} />;
  if (stage === 'result' && resultId)
    return <ResultPage resultId={resultId} onRetake={handleRetake} />;

  // Safety fallback — should not hit.
  return <IntroPage onStart={handleStart} />;
}
