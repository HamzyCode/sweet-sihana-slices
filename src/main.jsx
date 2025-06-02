
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ensureAdminRole } from './utils/adminSetup.js';

// Run admin setup function
ensureAdminRole().catch(console.error);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
