import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { Container, MenuContainer, MenuItem, MenuText, } from "./styles";

export default function Menu() { 
  let state = false;
   
  function ShowHideTextComponentView () {
   this.state = !this.state;
   forceUpdate();
  }

  return (
    <Container>
        <MenuContainer>
            <MenuItem onPress={() => {}}>
              {
              state == true ? <MenuText>Bancada</MenuText> : null
              }
            </MenuItem >
            <MenuItem onPress={() => {ShowHideTextComponentView}}>
              <MenuText>Gráficos</MenuText>
            </MenuItem>
            <MenuItem onPress={() => {}}>
              <MenuText>Fórmulas</MenuText>
            </MenuItem>
            <MenuItem onPress={() => {}}>
              <MenuText>Configurações</MenuText>
            </MenuItem>
        </MenuContainer>
    </Container>
  );
}
