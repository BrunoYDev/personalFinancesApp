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
            name="SignUp"
            component={SignUp}
            options={{
                animation: "slide_from_bottom",
                headerStyle:{
                    backgroundColor: '#3b3bdf',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#fff',
                headerTitle: 'Back',
                headerBackTitleVisible: false,
            }}
            />
        </AuthStack.Navigator>
    )
};

export default AuthRoutes;