import React, { useContext } from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Text, View} from 'react-native';
import { AuthContext } from '../../contexts/auth';

const CustomDrawer = props => {
    const {user, signOut} = useContext(AuthContext);

  return (
    <DrawerContentScrollView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../assets/Logo.png')}
          style={{width: 90, height: 90}}
          resizeMode="contain"
        />

        <Text style={{fontSize: 18, marginTop: 14}}>Welcome</Text>
        <Text
          style={{
            fontSize: 17,
            marginBottom: 14,
            fontWeight: 'bold',
            paddingHorizontal: 20,
          }}
          numberOfLines={1}>
          {user && user.name}
        </Text>
      </View>

      <DrawerItemList {...props} />
      
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
