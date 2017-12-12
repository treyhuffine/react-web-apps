import styled from 'styled-components';
import { colors } from 'styles/palette';
import { spacing } from 'styles/measurements';

export const Item = styled.div`
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  padding-top: ${spacing.base};
  padding-bottom: ${spacing.base};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 0.96em;
  font-weight: 500;
`;

export const Count = styled.div`
  color: ${colors.gray};
  margin-right: 0.6em;
`;

export const Content = styled.div``;
