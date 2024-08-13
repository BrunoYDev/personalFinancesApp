import React, {useContext, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {
  AreaInput,
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
} from '../signIn/styles';
import {AuthContext} from '../../contexts/auth';

const SignUp = () => {
  const {signUp, loadingAuth} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if(email === '' || password === '', name === '') return;
    signUp(email, password, name);
  };

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input
            placeholder="Your Name"
            value={name}
            onChangeText={text => setName(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Your Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Your Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <SubmitText>Sign Up</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignUp;
