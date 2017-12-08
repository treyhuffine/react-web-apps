import axios from 'axios';

const HACKER_NEWS = 'https://hacker-news.firebaseio.com/v0';
const TOP_STORIES = 'topstories.json';
const ITEM = 'item';
const QUERY = 'print=pretty';

export const fetchStoryList = () =>
  axios.get(`${HACKER_NEWS}/${TOP_STORIES}?${QUERY}`).then(res => {
    return res.data;
  });

export const fetchItem = id => {
  const item = `${id}.json`;

  return axios.get(`${HACKER_NEWS}/${ITEM}/${item}?${QUERY}`).then(res => {
    return res.data;
  });
};
