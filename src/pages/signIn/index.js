import React from 'react';
import {Platform} from 'react-native';
import {AreaInput, Background, Container, Input, Link, LinkText, Logo, SubmitButton, SubmitText} from './styles';

import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

  return (
    <Background>

      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >

        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input placeholder="Your Email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Your Password" secureTextEntry={true} />
        </AreaInput>

        <SubmitButton activeOpacity={0.6}>
            <SubmitText>Sign In</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Create An Account</LinkText>
        </Link>

      </Container>

    </Background>
  );
};

export default SignIn;
