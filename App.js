import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import Routes from "./src/routes";
import { StatusBar } from "react-native";

const App = () => {


  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content"/>
      <Routes/>
    </NavigationContainer>
  )
};

export default App;