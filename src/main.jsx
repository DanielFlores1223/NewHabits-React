import React from 'react';
import ReactDOM from 'react-dom/client';
import { NewHabitsApp } from './NewHabitsApp';
import './index.css';
import { AppProvider } from './context/AppProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AppProvider>
        <NewHabitsApp />
      </AppProvider>
    </React.StrictMode>,
)
