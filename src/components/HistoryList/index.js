import React, { useState } from "react";
import { Alert, Text } from "react-native";
import { Container, IconView, TextType, TextValue, Type } from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const HistoryList = ({data, deleteItem}) => {
    

    const handleDeleteItem = () => {
        Alert.alert(
            'Warning!',
            'You\'re sure that you want to delete this?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Continue',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return(
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
        <Container>
            <Type>
                <IconView type={data.type}>
                    <Feather name={data.type === 'receita' ? "arrow-up" : "arrow-down"} size={20} color="#fff"/>
                    <TextType>{data.type === 'receita' ? 'Revenue' : 'Expense'}</TextType>
                </IconView>
            </Type>

            <TextValue>$ {data.value.toFixed(2)}</TextValue>
        </Container>
        </TouchableWithoutFeedback>
    )
};

export default HistoryList;