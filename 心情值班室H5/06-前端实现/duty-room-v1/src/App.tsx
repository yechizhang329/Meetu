// 心情值班室 v1.0 — H5 root
// 3-page flow: Intro → SceneSelect → Result
// Routing: hash-based ("#/", "#/scenes", "#/result/<sceneId>") so screenshots
// and deep links are stable, and back/forward don't lose context.

import { useEffect, useState } from 'react';
import { IntroPage } from './pages/IntroPage';
import { SceneSelectPage } from './pages/SceneSelectPage';
import { ResultPage } from './pages/ResultPage';
import { SCENES, SCENE_BY_ID } from './data/scenes';
import type { SceneMeta } from './data/types';

const ART_BASE_URL = `${import.meta.env.BASE_URL}duty-room-v1/`;

type Route =
  | { name: 'intro' }
  | { name: 'scenes' }
  | { name: 'result'; scene: SceneMeta };

function parseHash(): Route {
  const h = window.location.hash || '#/';
  const m = h.match(/^#\/result\/([A-Za-z0-9_-]+)$/);
  if (m) {
    const s = SCENE_BY_ID[m[1]];
    if (s) return { name: 'result', scene: s };
    return { name: 'scenes' };
  }
  if (h === '#/scenes') return { name: 'scenes' };
  return { name: 'intro' };
}

function writeHash(r: Route) {
  switch (r.name) {
    case 'intro':
      window.location.hash = '#/';
      break;
    case 'scenes':
      window.location.hash = '#/scenes';
      break;
    case 'result':
      window.location.hash = `#/result/${r.scene.id}`;
      break;
  }
}

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
    <div className="duty-shell" data-route={route.name}>
      {route.name === 'intro' ? (
        <IntroPage artBaseUrl={ART_BASE_URL} onStart={() => go({ name: 'scenes' })} />
      ) : route.name === 'scenes' ? (
        <SceneSelectPage
          artBaseUrl={ART_BASE_URL}
          onBack={() => go({ name: 'intro' })}
          onPick={(scene) => go({ name: 'result', scene })}
        />
      ) : (
        <ResultPage
          artBaseUrl={ART_BASE_URL}
          scene={route.scene}
          onBackToSelect={() => go({ name: 'scenes' })}
          onBackToHome={() => go({ name: 'intro' })}
        />
      )}
      {import.meta.env.DEV ? <DevFooter /> : null}
    </div>
  );
}

function DevFooter() {
  // Surface scene count for dev sanity; invisible in production build.
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 4,
        right: 8,
        fontSize: 10,
        opacity: 0.35,
        pointerEvents: 'none',
      }}
    >
      dev · {SCENES.length} scenes
    </div>
  );
}
