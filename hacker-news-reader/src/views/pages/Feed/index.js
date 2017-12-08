import { connect } from 'react-redux';
import * as actions from 'actions/story';
import { storyListSelector } from 'reducers/story/selectors';
import Feed from './Feed';

const mapStateToProps = state => ({
  storyList: storyListSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTopStories: () => {
    dispatch(actions.fetchTopStories());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
