import React, { Component } from 'react';

class Feed extends Component {
  componentDidMount() {
    this.props.fetchStoryList();
  }

  render() {
    console.log('PROP', this.props);
    return (
      <div>
        <div>HI</div>
        <div>
          {
            this.props.storyList.map((id) => (
              <div>
                {id}
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Feed;
