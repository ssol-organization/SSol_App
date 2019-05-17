import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { Container, MenuContainer, MenuItem, MenuText, } from "./styles";

export default function Menu() {
  return (
    <Container>
        <MenuContainer>
            <MenuItem>
              <MenuText>Fórmulas</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuText>Gráficos</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuText>Configurações</MenuText>
            </MenuItem>
        </MenuContainer>
    </Container>
  );
}
