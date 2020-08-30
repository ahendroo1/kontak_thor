import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {UserNull, IconPlus, IconRemove} from '../../assets';
import { colors, storeData } from '../../utils';
import {Header, Button} from '../../components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
import { Fire } from '../../config';

const UploadFotoProfile = ({navigation, route}) => {

    const routeData = route.params ;

    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(UserNull)
    const [photoForDB, setPhotoForDB] = useState('')

    const getImage = () => {
        ImagePicker.showImagePicker({quality: 0.4, maxWidth:200, maxHeight:200}, (response) => {
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'Oops..., Sepertinya foto tidak dipilih.',
                    type:"warning",
                })
            } else {

                const base64 = `data:${response.type};base64, ${response.data}` ;
                setPhotoForDB(base64)
                
                const source = {uri: response.uri }
                setPhoto(source)
                setHasPhoto(true)

            }

        })
    }

    const uploadForDatabase = ()=> {
        Fire.database()
            .ref('users/' + routeData.uid)
            .update({photo: photoForDB})
        
        const data = route.params;
        data.photo = photoForDB ;
        storeData('user', data);

        showMessage({
            message: 'Selamat datang..., Pendaftaran Success',
            type:"info",
        })

        navigation.replace('MainApp')
    }
    return (
        <>
        <Header title="Upload Photo" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
            <View style={styles.profile}>
                <TouchableOpacity
                    style={styles.avatarWrapper} 
                    onPress={() => getImage() }
                >
                    <Image source={photo} style={styles.avatar}  />
                    {
                        hasPhoto && <IconRemove style={styles.addPhoto} />
                    }
                    {
                        !hasPhoto && <IconPlus style={styles.addPhoto}/>
                    }
                </TouchableOpacity>
                
                <Text style={styles.name}>{routeData.fullname}</Text>
                <Text style={styles.profesi}>{routeData.profesi}</Text>
            </View>
            <View>
                <Button title="Upload dan Lanjutkan" disabled={!hasPhoto} onPress={() => uploadForDatabase()} />
                <TouchableOpacity style={styles.link} onPress={() => navigation.replace('MainApp')} >
                    <Text style={styles.linkText}>Lanjutkan...</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

export default UploadFotoProfile

const styles = StyleSheet.create({
    content:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'space-between'
    },
    profile:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    avatar:{
        width:110,
        height:110,
        borderRadius:110 / 2,

    },
    avatarWrapper:{
        width:110,
        height:110,
        borderWidth:1,
        borderColor:colors.border,
        borderRadius:110 / 2,
        alignItems:'center',
        justifyContent:'center',

    },
    addPhoto:{
        position:'absolute',
        bottom:0,
        right:0
    },
    name:{
        marginTop:10,
        fontSize:16,
        fontFamily:'Poppins-Regular',
        color:colors.text.primary,
        textAlign:'center'
    },
    profesi:{
        fontSize:14,
        fontFamily:'Poppins-Regular',
        color:colors.text.secondary,
        textAlign:'center'
    },
    link:{
        paddingVertical:15
    },
    linkText:{
        fontSize:16,
        color:colors.text.secondary,
        textAlign:'center',
        textDecorationLine:'underline',
        fontFamily:'Poppins-SemiBold'
    },
})
