import { connect } from 'react-redux';
import * as actions from 'actions/story';
import Feed from './Feed';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchTopStories: () => {
    dispatch(actions.fetchTopStories());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
