// vNext root App.

import { useEffect, useState } from 'react';
import { parseHash, writeHash, type Route } from './lib/hash-router';
import { IntroPage } from './pages/IntroPage';
import { SceneSelectPage } from './pages/SceneSelectPage';
import { ResultPage } from './pages/ResultPage';

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseHash());

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const go = (r: Route) => {
    writeHash(r);
    setRoute(r);
  };

  return (
    <div
      className="vnext-shell"
      data-route={route.name}
      style={{ minHeight: '100vh', background: '#F4F1E8', color: '#222', fontFamily: 'system-ui, -apple-system, "PingFang SC", sans-serif' }}
    >
      {route.name === 'intro' ? (
        <IntroPage onStart={() => go({ name: 'scenes' })} />
      ) : route.name === 'scenes' ? (
        <SceneSelectPage onPick={(scene) => go({ name: 'result', scene })} onBack={() => go({ name: 'intro' })} />
      ) : (
        <ResultPage scene={route.scene} onBackToSelect={() => go({ name: 'scenes' })} />
      )}
    </div>
  );
}
