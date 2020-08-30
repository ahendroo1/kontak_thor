import React,{ useEffect } from 'react';
import {
  StyleSheet, Text, View, StatusBar
} from 'react-native';
import { ILSVG } from '../../assets';
import { NavigationContainer } from '@react-navigation/native';
import { Fire } from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {

    const unsubscribe =  Fire.auth().onAuthStateChanged((user) => {
        setTimeout(() => {
          if(user){
            // console.log(user)
            navigation.replace('MainApp')
          } else {
            // console.log(user)
            navigation.replace('GetStarted')
          }
        }, 3000)
      })
      return () => unsubscribe()
  }, [navigation]);
  return(
    <View style={style.pages}>
      
      <StatusBar backgroundColor="#00b7c2" barStyle="light-content" />
      <ILSVG  />

      {/* <Text style={style.textLogo}>
        Siteplan
      </Text> */}
      
    </View>
  );
}

export default Splash;

const style = StyleSheet.create({
    pages:{
        flex:1, 
        alignItems:'center', 
        flexDirection:'column', 
        justifyContent:'center'
    }, 
});