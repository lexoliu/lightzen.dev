import React from 'react';
import Background from './RainbowBackground';
import Terminal from './Terminal';
import Menu from './Menu';

const App: React.FC = () => {
  return (
    <>
      <Background />
      <Menu />
      <div className="absolute inset-0 flex items-center justify-center min-h-screen bg-black/30">
        <Terminal />
      </div>
    </>
  );
};

export default App;
