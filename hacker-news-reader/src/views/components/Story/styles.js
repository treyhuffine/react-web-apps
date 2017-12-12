import styled from 'styled-components';
import { colors } from 'styles/palette';

export const Item = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${colors.gray};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 0.96em;
  font-weight: 500;
`;

export const ListItem = styled.div``;

export const Count = styled.div`
  display: inline-block;
  margin-right: 0.6em;
  color: ${colors.gray};
`;

export const Content = styled.div`
  display: inline-block;
`;
