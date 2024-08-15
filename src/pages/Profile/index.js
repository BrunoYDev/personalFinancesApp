import React, {useContext} from 'react';
import {
  Container,
  LogoutButton,
  LogoutText,
  Message,
  Name,
  Newlink,
  NewText,
} from './styles';
import Header from '../../components/Header';
import {AuthContext} from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const {user, signOut} = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="My Profile" />

      <Message>Hey, Welcome Back!</Message>

      <Name numberOfLines={1}>{user && user.name}</Name>

      <Newlink onPress={() => navigation.navigate('New Entry')}>
        <NewText>New Entry</NewText>
      </Newlink>

      <LogoutButton onPress={() => signOut()}>
        <LogoutText>Logout</LogoutText>
      </LogoutButton>
    </Container>
  );
};

export default Profile;
