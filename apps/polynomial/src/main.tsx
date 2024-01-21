import PresentationsGradient from '@gradient/presentation-gradient';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <PresentationsGradient type="polynomial" />
  </StrictMode>
);
