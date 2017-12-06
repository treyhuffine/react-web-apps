import React from 'react';
import { render } from 'react-dom';
import store from 'client/store/configure-store';
import Root from 'container/Root';
import 'styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
