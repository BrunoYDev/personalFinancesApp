import React from "react";
import { ButtonMenu, Container, Title } from "./style";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

const Header = ({title}) => {
    const navigation = useNavigation();


    return(
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={35} color="#121212"/>
            </ButtonMenu>
            {title && (
                <Title>
                    {title}
                </Title>
            )}
        </Container>
    )
};

export default Header;