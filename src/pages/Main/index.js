import React from 'react';

import Menu from '~/components/Menu'
import Header from '~/components/Header'
import { Container } from './styles'

export default function Main(){
  return(
    <Container>
      <Header />
      <Menu />
    </Container>
  );
}