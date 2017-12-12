import { connect } from 'react-redux';
import StoryList from 'components/StoryList';
import { storyListSelector } from 'reducers/story/selectors';

const mapStateToProps = state => ({
  stories: storyListSelector(state)
});

export default connect(mapStateToProps)(StoryList);
