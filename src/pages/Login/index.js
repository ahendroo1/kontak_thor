import React, {useState} from 'react';
import {
  StyleSheet, Text, View, ImageBackground, StatusBar
} from 'react-native';
import { ILSVG } from '../../assets';
import { Button, Input, Loading } from '../../components';
import { colors, useForm, storeData } from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({navigation}) => {

    const [form, setForm] = useForm({email: '', password: ''});
    const stateGlobal = useSelector(state => state);
    const dispatch = useDispatch()

    const login = () => {
        dispatch({type: 'SET_LOADING', value:true})


        Fire.auth().signInWithEmailAndPassword(
            form.email, form.password
        ).then((res) => {

            Fire.database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then((resDB) => {

                if(resDB.val()){
                    storeData('user', resDB.val())
                    
                    showMessage({
                        message: 'Selamat datang kembali...' ,
                        type:'info'
                    })
                    dispatch({type: 'SET_LOADING', value: false})
                    navigation.replace('MainApp')
                }
            });


        }).catch(err => {
            showMessage({
                message: err.message,
                type:'danger'
            })
            dispatch({type: 'SET_LOADING', value: false})
        })
    }



  return(
    <View style={style.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.titleLogo}>
                
                <ILSVG  />
                <Text style={style.title}>
                    Contact Thor
                </Text>
                <Text style={style.desc}>
                    Login to your account
                </Text>

            </View>
            <View>

                <Input 
                    onChangeText={(val) => setForm('email', val)}
                    value={form.email}
                    label="Email" />
                <Input 
                    label="Password" 
                    value={form.password}
                    onChangeText={(val) => setForm('password', val)}
                    secureTextEntry={true} />

                <Button title="Masuk" onPress={() => login()} />

                <Button type="secondary" title="Daftarn Akun" onPress={() => navigation.navigate('Register')} />
                
            </View>
        </ScrollView>
    </View>
  );
}

export default Login;

const style = StyleSheet.create({
    pages:{
        flex:1,
        padding:20,
        justifyContent:'space-evenly',
        backgroundColor:colors.white,
        paddingTop:30
    }, 
    titleLogo:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:20, 
        paddingTop:20,
        color:colors.text.primary,
        // fontWeight:'bold',
        fontFamily: 'Poppins-Bold'
    },
    desc:{
        fontSize:16, 
        fontFamily: 'Poppins-Regular',
        justifyContent:'center',
        color:colors.text.secondary,
        marginBottom:30
    },
    getStarted:{
        // fontSize:30,
        alignItems:'center',
        justifyContent:'space-between'

    },
    getStartedText:{
        fontSize:16,
        fontFamily: 'Poppins-Regular',
    }
});

