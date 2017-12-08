import ApiService from 'services/ApiService';

const HACKER_NEWS = 'https://hacker-news.firebaseio.com/v0';
const TOP_STORIES = 'topstories.json';
const ITEM = 'item';
const QUERY = 'print=pretty';

const api = new ApiService({ baseURL: HACKER_NEWS });

export const fetchTopStoryIds = () => api.get(`/${TOP_STORIES}?${QUERY}`);

export const fetchItem = id => {
  const item = `${id}.json`;
  return api.get(`/${ITEM}/${item}?${QUERY}`);
};

export const fetchStories = storyIds => {
  const storyPromises = storyIds.map(id => fetchItem(id));
  return Promise.all(storyPromises);
};
