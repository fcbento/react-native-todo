import styled from 'styled-components/native';

export const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.View`
    width: 400px;
    align-items: center;
    margin-top: 40px;
`;

export const InputContainer = styled.TextInput`
    height: auto;
    border-bottom-width: 1.5px; 
    width: 90%;
    margin: 10px 5px 5px 0; 
    padding: 10px;
    border-color: lightgrey;
    color: white;
    font-size: 17px;
`;

export const Label = styled.Text`
    width: 90%;
    color: white;
    margin-right: 5px;
`;