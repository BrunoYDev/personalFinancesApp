import React, {createContext, useState} from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({});

    const navigation = useNavigation();

    const signUp = async (email,password,name) => {
        try {
            const response = await api.post('users',{
                email: email,
                password: password,
                name: name,
            })
            console.log(response.data);
            navigation.goBack();

        } catch (error) {
            console.log('Error while sign up', error.message)
        }
    }

    return(
        <AuthContext.Provider value={{ user, signUp }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;