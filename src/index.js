import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './pages/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
