import React from 'react';
import {
  StyleSheet, Text, View, ImageBackground
} from 'react-native';
import { ILSVG, ILGetStarted } from '../../assets';
import { Button } from '../../components';
import { colors } from '../../utils';

const GetStarted = ({navigation}) => {
    
  return(
    
    <ImageBackground source={ILGetStarted}  style={style.pages}>
        
        <View>
            <ILSVG  />
            <Text style={style.title}>
                Kontak Thor
            </Text>
            <Text style={style.desc}>
                Mudah bagi Anda untuk komunikasi dengan kontraktor,
                Temukan dan dapatkan kontraktor profesional Anda.
            </Text>
        </View>
        <View>
            <Button title="Mulai Daftar Akun" onPress={() => navigation.navigate('Register')} />
            <Button title="Masuk" type="secondary"  onPress={() => navigation.replace('Login')} />
        </View>
    </ImageBackground>

  );
}

export default GetStarted;

const style = StyleSheet.create({
    pages:{
        flex:1, 
        padding:40,
        justifyContent:'space-between',
    }, 
    title: {
        fontSize:20, 
        paddingTop:20,
        color:colors.white,
        // fontWeight:'bold',
        fontFamily: 'Poppins-Bold'
    },
    desc:{
        fontSize:12, 
        color:colors.white,
        fontFamily: 'Poppins-Regular'
    }
});