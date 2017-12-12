import React from 'react';
import { render } from 'react-dom';
import store from 'store/configureStore';
import Root from 'views/Root';
import registerServiceWorker from './registerServiceWorker';

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
