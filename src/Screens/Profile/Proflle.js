//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Profile = ({ navigation, route }) => {

    const data = route.params
    console.log(data, "data>>>>>");

    const check = () => {
        return (
            <View >
          <Text>{data.Name}</Text> 
                    <Text>Profile</Text>
            </View>
        )
    }
    const ocheck = () => {
        return (
            <View >
                <Text>{data.Name}</Text> :
                    <Text>Profile</Text>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
           {data.id==1?check():ocheck()}
        </View>
    )

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
export default Profile;
