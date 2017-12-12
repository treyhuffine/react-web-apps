import React, { Component } from 'react';
import Page from 'pages/Page';
import StoryList from 'containers/StoryList';

const PAGE_NAME = 'feed';

class Feed extends Component {
  componentDidMount() {
    this.props.fetchTopStories();
  }

  render() {
    return (
      <Page pageName={PAGE_NAME}>
        <StoryList />
      </Page>
    );
  }
}

export default Feed;
