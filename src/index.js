import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Indexes/appIndex';
import rootStore from './rootStore';
// import serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store = { rootStore }>
        <App />
    </Provider>,
    document.getElementById('root'));

// serviceWorker();