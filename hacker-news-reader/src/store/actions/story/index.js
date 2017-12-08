import actionCreator from 'actions/actionCreator';
import * as hackerNews from 'services/hackerNews';
import * as actionTypes from './actionTypes';

const fetchStoriesRequest = actionCreator(actionTypes.FETCH_STORIES_REQUEST);
const fetchStoriesSuccess = actionCreator(actionTypes.FETCH_STORIES_SUCCESS);
const fetchStoriesFailure = actionCreator(actionTypes.FETCH_STORIES_FAILURE);

export const fetchStories = ({ storyIds }) => {
  return dispatch => {
    dispatch(fetchStoriesRequest());

    return hackerNews
      .fetchStories(storyIds)
      .then(stories => {
        dispatch(fetchStoriesSuccess({ stories }));
      })
      .catch(err => {
        dispatch(fetchStoriesFailure({ err }));
      });
  };
};

const fetchTopStoryIdsRequest = actionCreator(
  actionTypes.FETCH_TOP_STORIES_REQUEST
);
const fetchTopStoryIdsSuccess = actionCreator(
  actionTypes.FETCH_TOP_STORIES_SUCCESS
);
const fetchTopStoryIdsFailure = actionCreator(
  actionTypes.FETCH_TOP_STORIES_FAILURE
);

export const fetchTopStories = payload => {
  return dispatch => {
    dispatch(fetchTopStoryIdsRequest());

    return hackerNews
      .fetchTopStoryIds()
      .then(storyIds => {
        dispatch(fetchTopStoryIdsSuccess({ storyIds }));
        return storyIds;
      })
      .catch(err => {
        dispatch(fetchTopStoryIdsFailure({ err }));
      })
      .then(storyIds => {
        dispatch(fetchStories({ storyIds }));
      });
  };
};
