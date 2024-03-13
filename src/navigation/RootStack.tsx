import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitViewScreen from '../screens/InitView';
import LoginScreen from '../screens/Login';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import RegisterScreen from '../screens/Register';
import TabStack from './TabStack.tsx';
import MapScreen from '../screens/Map';
import MoreInfoScreen from '../screens/MoreInfo';

export const RootStack = ({}) => {
  const Stack = createNativeStackNavigator();
  const navigationRef = React.createRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'InitView'}>
        <Stack.Screen
          name="InitView"
          component={InitViewScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Login'}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'ForgotPassword'}
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Register'}
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Home'}
          component={TabStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Map'}
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'MoreInfo'}
          component={MoreInfoScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
