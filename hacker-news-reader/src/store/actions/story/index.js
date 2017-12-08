import actionCreator from 'actions/actionCreator';
import * as actionType from './actionType';
import * as api from 'api/story';

const fetchStoryListRequest = actionCreator(
  actionType.FETCH_STORY_LIST_REQUEST
);
const fetchStoryListSuccess = actionCreator(
  actionType.FETCH_STORY_LIST_SUCCESS
);
const fetchStoryListFailure = actionCreator(
  actionType.FETCH_STORY_LIST_FAILURE
);

export const fetchStoryList = payload => {
  return dispatch => {
    dispatch(fetchStoryListRequest());

    return api
      .fetchStoryList()
      .then(storyList => {
        dispatch(fetchStoryListSuccess({ storyList }));
      })
      .catch(err => {
        dispatch(fetchStoryListFailure({ err }));
      });
  };
};
