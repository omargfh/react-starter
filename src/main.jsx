import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@radix-ui/themes/styles.css';
import './index.scss'
import { Theme } from '@radix-ui/themes';
import ErrorBoundary from './components/Layout/ErrorBoundary.jsx';
import RootLayout from './components/Layout/RootLayout.jsx';
import AppContextProvider from './lib/context/global/AppContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Theme>
        <RootLayout>
          <ErrorBoundary>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </ErrorBoundary>
        </RootLayout>
      </Theme>
    </ErrorBoundary>
  </React.StrictMode>,
)
