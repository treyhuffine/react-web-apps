import styled from 'styled-components';
import { colors } from 'styles/palette';
import { size } from 'styles/font';

export const Meta = styled.div`
  color: ${colors.gray};
  font-size: ${size.small};
  margin-top: 0.4em;
`;

export const MetaLink = styled.a`
  color: ${colors.gray};

  &:visited {
    color: ${colors.gray};
  }

  &:hover {
    text-decoration: underline;
  }
`;
