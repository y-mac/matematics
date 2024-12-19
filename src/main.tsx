import { StrictMode } from 'react';
import { MathProvider } from './contexts/mathContext.tsx';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MathProvider>
      <App />
    </MathProvider>
  </StrictMode>,
)
