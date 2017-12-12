import React from 'react';

import { Meta } from './styles';

const StoryMeta = ({ story }) => (
  <Meta>
    {story.score} points by {story.by}
  </Meta>
);

export default StoryMeta;
