import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
