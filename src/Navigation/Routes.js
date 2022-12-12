//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import Home2 from '../Screens/Home/Home2';
import Profile from '../Screens/Profile/Proflle';
// import Profile from ''

// create a component234
const Routes = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Home2" component={Home2} />
          <Stack.Screen name="Profile" component={Profile} />
          
          
        </Stack.Navigator>
      </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Routes;
