import ReactDOM from 'react-dom/client';
import App from "./App.js";
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>   
         <App />
    </Router>
);