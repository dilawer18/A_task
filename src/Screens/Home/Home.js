//import liraries
import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/action';

// create a component
const Home = ({ navigation, props}) => {
    // const number = useSelector((state) => state.num)
    // const dispatch = useDispatch()
    const data ={id:1,Name:'Rahul'}
    // console.log("Store value?>>>>>>>>>>>>>", number);
    // const onInc = () => {
    //     dispatch(increment(number))
    // }
    // const onDec = () => {
    //     dispatch(decrement(number))

    // }

    return (
        <View style={styles.container}>

            <Text>Home</Text>
            <Button
            title='Go to Profile'
            onPress={()=>{navigation.navigate('Profile',data)}}
            />
            {/* <TouchableOpacity
            onPress={onDec}
            >
                <Text>ADD</Text>
            </TouchableOpacity>
            <Text>num:{number}</Text> */}
            {/* <Button
            title='Sub'
            onPress={onDec}
            /> */}
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
export default Home;
