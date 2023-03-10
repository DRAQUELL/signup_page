import React from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash,Onboarding,Login} from './src/screens'
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const App = ()=>{
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
              
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUpScreen}/>
            </Stack.Navigator>

          </NavigationContainer>
  );
}

export default App
