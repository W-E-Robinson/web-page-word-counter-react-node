import React from 'react';

import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './modules/Redux/store';
import ErrorBoundary from './modules/ErrorBoundary';

import './index.sass';

const store = configureStore();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,
);

reportWebVitals();
