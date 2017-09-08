import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import bootstrapcssonly from 'bootstrap-css-only';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './data';

ReactDOM.render(<App dataList = {data}/>, document.getElementById('root'));
registerServiceWorker();
