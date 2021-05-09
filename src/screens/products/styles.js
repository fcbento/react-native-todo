import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: false,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      alignItems: 'center',
      paddingLeft: 0,
    },
  }))`
    background: #1e222b;
    height: 130px;
  `;

export const Card = styled.SafeAreaView`
    display: flex;
    background-color: whitesmoke;
    padding: 30px;
    margin: 5px;
    width: 90%;
`;

export const Title = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 20px;
    align-items: center;
    margin-bottom: 15px;
`;

export const Description = styled.Text`
    font-size: 15px;
    color: red;
    margin-bottom: 15px;
`;

export const Price = styled.Text`
    font-size: 25px;
    color: red;
    margin-bottom: 15px;
    font-weight: bold;
`;