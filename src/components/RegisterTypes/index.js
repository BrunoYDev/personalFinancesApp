import React, {useState} from 'react';
import {RegisterContainer, RegisterLabel, RegisterTypeButton} from './styles';
import Feather from 'react-native-vector-icons/Feather';

const RegisterTypes = ({type, sendTypeChanged}) => {
  const [typeChecked, setTypeChecked] = useState(type);

  const changeType = (name) => {
    if(name === 'receita'){
        setTypeChecked('receita');
        sendTypeChanged('receita');
    }else{
        setTypeChecked('despesa');
        sendTypeChanged('despesa');
    }
  };

  return (
    <RegisterContainer>
      <RegisterTypeButton
        checked={typeChecked === 'receita' ? true : false}
        onPress={() => changeType('receita')}>
        <Feather name="arrow-up" size={25} color="#121212" />
        <RegisterLabel>Revenue</RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton
        checked={typeChecked === 'despesa' ? true : false}
        onPress={() => changeType('despesa')}>
        <Feather name="arrow-down" size={25} color="#121212" />
        <RegisterLabel>Expense</RegisterLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  );
};

export default RegisterTypes;
