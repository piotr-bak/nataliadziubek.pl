import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './app';
import 'the-new-css-reset/css/reset.css';
import './styles/style.css';

const container = document.getElementById('app');

const root = ReactDOMClient.createRoot(container);

root.render(<App />);
