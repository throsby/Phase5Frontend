import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'f807a523-2e45-4915-a6ef-34c01eeffa77',
    clientToken: 'pubd4662f51764a06767ee845d902e3d985',
    site: 'us5.datadoghq.com',
    service: 'rubyproject',
    env: process.env.NODE_ENV,
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
