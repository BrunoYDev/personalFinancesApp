import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";

const AppDrawer = createDrawerNavigator();

const AppRoutes = () => {
    return(
        <AppDrawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle:{
                    backgroundColor: '#fff',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#fff',

                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212'
            }}
         >
            <AppDrawer.Screen 
            name="Home"
            component={Home}
            />
            <AppDrawer.Screen 
            name="New Entry"
            component={New}
            />
            <AppDrawer.Screen 
            name="My Profile"
            component={Profile}
            />
        </AppDrawer.Navigator>
    )
};

export default AppRoutes;