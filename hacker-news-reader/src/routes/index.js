import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Feed from 'pages/Feed';
import NoMatch from 'pages/NoMatch';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default Routes;
