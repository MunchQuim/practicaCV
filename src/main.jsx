import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
/* import CVForm from './components/CVForm.jsx'
import CVPreview from './components/CVPreview.jsx'
import StatsChart from './components/StatsChart.jsx' */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
