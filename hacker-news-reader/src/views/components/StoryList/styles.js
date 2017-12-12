import styled from 'styled-components';
import { colors } from 'styles/palette';
import { height } from 'styles/measurements';

export const List = styled.div`
  background-color: ${colors.lightBrown};
  min-height: calc(100vh - ${height.nav});
`;
