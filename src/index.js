import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from './context/theme_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
);

reportWebVitals();
