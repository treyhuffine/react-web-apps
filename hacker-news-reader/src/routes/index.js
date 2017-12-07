import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Sample from 'pages/Sample';
import NoMatch from 'pages/NoMatch';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Sample} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Routes;
