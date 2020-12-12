import styled from 'styled-components/native';

export const Container = styled.View`
    width: 400px;
    display: flex;
    align-items: center;
`;

export const ButtonWrapper = styled.TouchableOpacity`
    margin-top: 40px;
    background: ${({ btnColor }) => btnColor};
    border: 1.5px solid white;
    padding: 10px;
    width: 50%;
    align-items: center;
    border-radius: 6px;
`;

export const ButtonName = styled.Text`
    color: ${({ fontColor }) => fontColor};
    font-size: 20px;
`;

