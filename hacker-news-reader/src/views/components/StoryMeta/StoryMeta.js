import React from 'react';
import moment from 'moment';

import { Meta, MetaLink } from './styles';

const HACKER_NEWS_TOOT = 'https://news.ycombinator.com';
const USER = 'user';
const ITEM = 'item';
const ID = 'id';
const MILLISECONDS = 1000;

const StoryMeta = ({ story }) => (
  <Meta>
    {story.score} points{' '}
    <MetaLink href={`${HACKER_NEWS_TOOT}/${USER}?${ID}=${story.by}`}>
      by {story.by}
    </MetaLink>{' '}
    {moment(story.time * MILLISECONDS).fromNow()}
    {' | '}
    <MetaLink href={`${HACKER_NEWS_TOOT}/${ITEM}?${ID}=${story.id}`}>
      {/* "Discuss" vs # comments */}
      {story.descendants} comments
    </MetaLink>
  </Meta>
);

export default StoryMeta;
