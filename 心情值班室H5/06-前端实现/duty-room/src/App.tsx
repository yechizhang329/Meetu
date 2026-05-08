import { useCallback, useEffect, useState } from 'react';
import './styles/app.css';
import { IntroPage } from './components/IntroPage';
import { SceneSelectPage } from './components/SceneSelectPage';
import { ToneSelectPage } from './components/ToneSelectPage';
import { LoadingPage } from './components/LoadingPage';
import { DutyResultPage } from './components/DutyResultPage';
import type { CandidateCard, Scene, Tone } from './data/types';
import { buildCandidateCards } from './data/sampling';
import { readSource } from './utils/source';

type Stage = 'intro' | 'scene' | 'tone' | 'loading' | 'result';

const STORAGE_KEY = 'duty-room@v1';

interface PersistedState {
  stage: Stage;
  scene: Scene | null;
  tone: Tone | null;
  cards: CandidateCard[];
}

function blank(): PersistedState {
  return { stage: 'intro', scene: null, tone: null, cards: [] };
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

function computeInitialState(): PersistedState {
  const restored = loadState();
  if (restored.stage === 'result' && restored.cards.length > 0) return restored;
  return blank();
}

export default function App() {
  const initial = useState(() => computeInitialState())[0];
  const [stage, setStage] = useState<Stage>(initial.stage);
  const [scene, setScene] = useState<Scene | null>(initial.scene);
  const [tone, setTone] = useState<Tone | null>(initial.tone);
  const [cards, setCards] = useState<CandidateCard[]>(initial.cards);

  const source = useState(() => readSource())[0];

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ stage, scene, tone, cards }),
      );
    } catch {
      // ignore quota
    }
  }, [stage, scene, tone, cards]);

  const handleStart = useCallback(() => {
    setScene(null);
    setTone(null);
    setCards([]);
    setStage('scene');
  }, []);

  const handleScene = useCallback((s: Scene) => {
    setScene(s);
    setStage('tone');
  }, []);

  const handleTone = useCallback((t: Tone) => {
    setTone(t);
    setStage('loading');
  }, []);

  const handleLoadingDone = useCallback(() => {
    if (!scene || !tone) {
      setStage('intro');
      return;
    }
    setCards(buildCandidateCards(scene, tone));
    setStage('result');
  }, [scene, tone]);

  const handleRetake = useCallback(() => {
    setScene(null);
    setTone(null);
    setCards([]);
    setStage('intro');
    try {
      window.history.replaceState({}, '', window.location.pathname);
    } catch {
      /* ignore */
    }
  }, []);

  const goBackToScene = useCallback(() => setStage('scene'), []);
  const goBackToIntro = useCallback(() => setStage('intro'), []);

  if (stage === 'intro') return <IntroPage onStart={handleStart} source={source} />;
  if (stage === 'scene')
    return <SceneSelectPage onPick={handleScene} onBack={goBackToIntro} />;
  if (stage === 'tone')
    return <ToneSelectPage onPick={handleTone} onBack={goBackToScene} />;
  if (stage === 'loading') return <LoadingPage onDone={handleLoadingDone} />;
  if (stage === 'result' && scene && tone && cards.length > 0)
    return <DutyResultPage scene={scene} tone={tone} initialCards={cards} onRetake={handleRetake} />;

  return <IntroPage onStart={handleStart} source={source} />;
}
