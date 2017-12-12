import React from 'react';
import Story from 'components/Story';

import { List, Container } from './styles';

const StoryList = ({ stories }) => (
  <List>
    <Container>
      {stories.map((story, index) => (
        <Story story={story} key={story.id} index={index + 1} />
      ))}
    </Container>
  </List>
);

export default StoryList;
