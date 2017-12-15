import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/index';

import 'styles/globals';

class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Router>
            <Routes />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
