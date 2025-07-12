import React from 'react';
import App from './components/App';
import './output.css';

import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
