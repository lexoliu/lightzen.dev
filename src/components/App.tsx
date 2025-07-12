import React from 'react';
import Background from './Background';
import Terminal from './Terminal';

const App: React.FC = () => {
  return (
    <>
      <Background />

      <div className="absolute inset-0 flex items-center justify-center min-h-screen">
        <Terminal />
      </div>
    </>
  );
};

export default App;
