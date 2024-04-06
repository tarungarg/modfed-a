import React from 'lib/react';
import { createRoot } from 'lib/react-dom';
import App from './app';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
