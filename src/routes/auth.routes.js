import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="SigIn"
            component={SignIn}
            options={{
                headerShown: false
            }}
            />
            <AuthStack.Screen
            name="SignIn"
            component={SignIn}
            />
        </AuthStack.Navigator>
    )
};

export default AuthRoutes;