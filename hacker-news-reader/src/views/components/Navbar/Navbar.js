import React from 'react';
import { Link } from 'react-router-dom';

import { Bar, HeightControl, Container, Logo } from './styles';

const Navbar = () => (
  <HeightControl>
    <Bar>
      <Container>
        <Link to="/">
          <Logo>HN Reader</Logo>
        </Link>
      </Container>
    </Bar>
  </HeightControl>
);

export default Navbar;
