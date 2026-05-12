// vNext root App. PRD v2.3 §4.1: P0 Welcome → P1 SceneSelect → P2 RoleSelect → P3 Result.

import { useEffect, useState } from 'react';
import { parseHash, writeHash, type Route } from './lib/hash-router';
import { WelcomePage } from './pages/WelcomePage';
import { SceneSelectPage } from './pages/SceneSelectPage';
import { RoleSelectPage } from './pages/RoleSelectPage';
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
      style={{
        minHeight: '100vh',
        background: '#F9F7F3', // PRD §13.6 standard light cream
        color: '#222',
        fontFamily: '"PingFang SC", "Hiragino Sans GB", system-ui, -apple-system, sans-serif',
      }}
    >
      {route.name === 'welcome' ? (
        <WelcomePage onStart={() => go({ name: 'scenes' })} />
      ) : route.name === 'scenes' ? (
        <SceneSelectPage
          onPick={(scene) => go({ name: 'role', scene })}
          onBack={() => go({ name: 'welcome' })}
        />
      ) : route.name === 'role' ? (
        <RoleSelectPage
          scene={route.scene}
          onPick={(roleId) => go({ name: 'result', scene: route.scene, roleId })}
          onBack={() => go({ name: 'scenes' })}
        />
      ) : (
        <ResultPage
          scene={route.scene}
          initialRoleId={route.roleId}
          onBackToSceneSelect={() => go({ name: 'scenes' })}
        />
      )}
    </div>
  );
}
