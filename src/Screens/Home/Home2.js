//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Button } from 'react-native';
import Profile from '../Profile/Proflle';

// create a component
const Home2 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home2</Text>
            <Button
            title='Go to Profile'
            onPress={()=>{navigation.navigate(Profile)}}
            />
        </View>
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
export default Home2;
