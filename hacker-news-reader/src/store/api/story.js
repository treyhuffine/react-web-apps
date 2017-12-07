import axios from 'axios';

const HACKER_NEWS = 'https://hacker-news.firebaseio.com/v0';
const TOP_STORIES = 'topstories.json';
const ITEM = 'item';
const QUERY = 'print=pretty';

const getStories = () => {
  axios.get(`${HACKER_NEWS}/${TOP_STORIES}?${QUERY}`)
    .then((res) => {
      return res.data
    });
};

const getItem = id => {
  const item = `${id}.json`;
  
  axios.get(`${HACKER_NEWS}/${ITEM}/${item}?${QUERY}`)
    .then((res) => {
      return res.data
    });
};