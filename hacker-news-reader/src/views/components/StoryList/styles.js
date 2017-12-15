import styled from 'styled-components';
import { height, spacing } from 'styles/measurements';
import { width } from 'styles/measurements';

export const List = styled.div`
  min-height: calc(100vh - ${height.nav});
`;

export const Container = styled.div`
  max-width: ${width.container};
  padding-left: ${spacing.base};
  padding-right: ${spacing.base};
  margin-left: auto;
  margin-right: auto;
`;
