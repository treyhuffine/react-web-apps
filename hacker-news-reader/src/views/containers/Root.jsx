import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/index';
import AppWrapper from 'containers/app';
// import DevTools from 'containers/dev-tools';

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
            <AppWrapper>
              <Routes />
            </AppWrapper>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
