import styled from 'styled-components/native';

export const Container = styled.View`
    height: 80px;
    position:absolute;
    bottom: 10;
    left: 2%;
    right: 2%;
`;

export const MenuContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 0, paddingRight: 0, },
    showsHorizontalScrollIndicator: false,
})``;

export const MenuItem = styled.TouchableOpacity`
    width: 128px;
    height: 80px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    margin-left: 2px;
    justify-content: center;
`;

export const MenuText = styled.Text`
    font-size: 15px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    text-align-vertical: center;
`;