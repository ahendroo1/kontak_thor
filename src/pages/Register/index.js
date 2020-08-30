import React, {useState} from 'react';
import {
  StyleSheet, Text, View, ImageBackground, StatusBar
} from 'react-native';
import { ILSVG } from '../../assets';
import { Header, Button, Input, Loading} from '../../components';
import { colors, useForm, storeData, getData } from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import { showMessage, hideMessage } from "react-native-flash-message";
import {Fire} from '../../config';


const Register = ({navigation}) => {

    const[form, setForm] = useForm({
        fullname:'',
        profesi:'',
        email:'',
        password:''
    });
    const [loading, setLoading] = useState(false);
    
    const onContinue = () => {

        
        setLoading(true)
        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
            setLoading(false)
            setForm('reset')
            const data = {
                fullname:form.fullname,
                profesi:form.profesi,
                email:form.email,
                uid:success.user.uid
            }
            
            Fire.database()
            .ref('users/' + success.user.uid + '/')
            .set(data);
            
            showMessage({
                message: "Sukses Registrasi",
                type: "success",
            });
            setTimeout(() => {
                
                storeData('user', form)
                navigation.navigate('UploadFotoProfile', data)
            }, 500);

        })
        .catch((error) => {
            setLoading(false);
            const errorCode = error.code;
            const errorMessage = error.message;
            showMessage({
                message: error.message,
                type: "warning",
            });
            // console.log('error reg', errorMessage)
            // ...
        });
    }
  return(
    <>
    
    <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
    <View style={style.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.titleLogo}>
                
                {/* <ILSVG  /> */}
                <Text style={style.title}>
                    Kontak Thor
                </Text>
                <Text style={style.desc}>
                    Buat akun baru 
                </Text>
            </View>
            <View>

                <Input 
                    label="Nama Lengkap" 
                    value={form.fullname} 
                    onChangeText={(value) => setForm('fullname', value)} 
                />
                <Input 
                    label="Profesi" 
                    value={form.profesi} 
                    onChangeText={(value) => setForm('profesi', value)}
                />
                <Input 
                    label="Email" 
                    value={form.email} 
                    onChangeText={(value) => setForm('email', value)} 
                />
                <Input 
                    label="Password"
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)} 
                    secureTextEntry={true}    
                />
                    
                <Button title="Daftar" onPress={() => onContinue()} />

            </View>
        </ScrollView>

    </View>
    
    {loading && <Loading />}
    </>
    
  );
}

export default Register;

const style = StyleSheet.create({
    pages:{
        flex:1,
        padding:20,
        backgroundColor:colors.white
        // justifyContent:'center'
    },
    titleLogo:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:20, 
        paddingTop:10,
        color:colors.text.primary,
        // fontWeight:'bold',
        fontFamily: 'Poppins-Bold'
    },
    desc:{
        marginBottom:30,
        fontSize:14, 
        fontFamily: 'Poppins-Regular',
        justifyContent:'center',
        color:colors.text.secondary,
    },
    getStarted:{
        // fontSize:30,
        alignItems:'center',
        justifyContent:'center'

    },
    getStartedText:{
        fontSize:20,
        fontFamily: 'Poppins-Regular',
    }
});