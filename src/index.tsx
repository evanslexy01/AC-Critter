import 'core-js/stable'; // Add browser polyfills
import 'regenerator-runtime/runtime';

import App from './App';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('ac-root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
