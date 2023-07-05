import React from 'react'
import App from './App.jsx'

import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Theme from './Theme.jsx';
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App sx={{ margin:0, padding: 0,}}/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
