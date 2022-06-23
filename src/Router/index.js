import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Details' >      
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Details" component={Details} />         
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default Router;