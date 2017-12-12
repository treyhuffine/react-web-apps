import styled from 'styled-components';
import { height } from 'styles/measurements';
import { colors } from 'styles/palette';
import { width, spacing } from 'styles/measurements';
import { size } from 'styles/font';

export const Bar = styled.div`
  height: ${height.nav};
  background-color: ${colors.orange};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeightControl = styled.div`
  height: ${height.nav};
  width: 100%;
`;

export const Container = styled.div`
  max-width: ${width.container};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${spacing.base};
  padding-right: ${spacing.base};
`;

export const Logo = styled.div`
  color: ${colors.white};
  font-size: ${size.large};
  line-height: ${height.nav};
`;
