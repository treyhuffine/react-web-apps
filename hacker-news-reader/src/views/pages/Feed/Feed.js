import React, { Component } from 'react';
import Page from 'pages/Page';
import StoryList from 'containers/StoryList';

import { Container } from './styles';

const PAGE_NAME = 'feed';

class Feed extends Component {
  componentDidMount() {
    this.props.fetchTopStories();
  }

  render() {
    return (
      <Page pageName={PAGE_NAME}>
        <Container>
          <StoryList />
        </Container>
      </Page>
    );
  }
}

export default Feed;
