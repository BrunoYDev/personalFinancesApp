import React, {useState} from 'react';
import {Background, Input, SubmitButton, SubmitText} from './styles';
import Header from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Alert, Keyboard} from 'react-native';
import RegisterTypes from '../../components/RegisterTypes';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

const New = () => {
  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('receita');
  const navigation = useNavigation();

  const handleSubmit = () => {
    Keyboard.dismiss();
    if(isNaN(parseFloat(valueInput)) || type === null){
        alert('Please, Fill all the inputs!');
        return;
    }

    Alert.alert(
        'Data cofirmation',
        `Type: ${type} - Value: ${parseFloat(valueInput)}`,
        [
            {
                text: 'Cancel',
                style: 'cancel'
            },
            {
                text: 'Confirm',
                onPress: () => handleAdd()
            }
        ]
    )

  }

  const handleAdd = async () => {
    Keyboard.dismiss();
    await api.post('receive', {
        description: labelInput,
        value: Number(valueInput),
        type: type,
        date: format(new Date(), 'dd/MM/yyyy')
    });

    setLabelInput('');
    setValueInput('');
    navigation.navigate('Home');
  }

  return (
    <Background>
      <Header title="New Entry" />

      <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
        <Input
          placeholder="Entry Description"
          value={labelInput}
          onChangeText={text => setLabelInput(text)}
        />
        <Input
          placeholder="Value"
          keyboardType="numeric"
          value={valueInput}
          onChangeText={text => setValueInput(text)}
        />
        <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)}/>

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Record</SubmitText>
        </SubmitButton>
      </SafeAreaView>
    </Background>
  );
};

export default New;
