import React from 'react';
import {Text, View} from 'react-native';
import {AreaInput, Background, Container, Input, SubmitButton, SubmitText} from '../signIn/styles';

const SignUp = () => {
  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input placeholder="Your Name" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Your Email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Your Password" />
        </AreaInput>

        <SubmitButton>
            <SubmitText>Sign Up</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignUp;
