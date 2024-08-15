import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f0f4ff;
    align-items: center;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 24px;
`;

export const Newlink = styled.TouchableOpacity`
    background-color: #3b3dbf;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
`;


export const NewText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Name = styled.Text`
    font-size: 24px;
    margin-bottom: 24px;
    margin-top: 8px;
    padding: 0 14px;
    color: #121212;
`;

export const LogoutButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    border-width: 1px;
    border-color: #c62c36;
    align-items: center;
    justify-content: center;
`;

export const LogoutText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #c62c36;
`;