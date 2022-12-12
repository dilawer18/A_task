//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import Home from './src/Screens/Home/Home';



const App = () => {
  // const[count,setCount]=useState(0)
  
  // const onPress =(type)=>{
  //   if(type=='add'){
      
  //     setCount(count+1)
  //   }
  //   if (type=='dec') {
  //     setCount(count -1)
  //   }

  // }
  return (
    <Provider store= {store} >
      {/* <Home /> */}
      <Routes/>
      {/* <Button 
      title='add'
      onPress={()=>onPress('add')}/>
      <Text>{count}</Text>
      <Button 
      title='dec'
      onPress={()=>onPress('dec')}/> */}
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
 
  },
});

//make this component available to the app
export default App;
