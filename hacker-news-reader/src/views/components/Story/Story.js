import React from 'react';
import StoryMeta from 'components/StoryMeta';

import { Item, Title, Count, Content } from './styles';

const Story = ({ story, index }) => (
  <Item>
    <Count>{index}.</Count>
    <Content>
      <a href={story.url} rel="noreferrer noopener" target="_blank">
        <Title>{story.title}</Title>
      </a>
      <StoryMeta story={story} />
    </Content>
  </Item>
);

export default Story;
