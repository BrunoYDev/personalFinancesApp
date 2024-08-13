import React from "react";
import { Text, View } from "react-native";
import { Background } from "./style";
import Header from "../../components/Header";


const Home = () => {

    return(
        <Background>
            <Header title="My account activity" />
        </Background>
    )
}

export default Home;