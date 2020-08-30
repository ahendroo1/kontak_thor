import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, Input, Button } from '../../components'
import { colors, getData, storeData } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'
import { UserProfileDefault, UserNull } from '../../assets'
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message'
import ImagePicker from 'react-native-image-picker';

const UpdateProfile = ({navigation}) => {

    const [profile, setProfile] = useState({
        fullname: '',
        profesi: '',
        photo: UserProfileDefault,
    })
    
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(UserNull)
    const [photoForDB, setPhotoForDB] = useState('')

    useEffect(() => {
        getData('user').then((res) => {
            const data = res ;
            setPhoto({uri: res.photo})
            setProfile(data)
        })
    }, [])

    const update = () => {

        // const password = console.log('news pass: ', password);

        if(password.length > 0 ){
            if(password.length < 6) {
                showMessage({
                    message:"Password less than 6 Characters",
                    type:"warning"
                });
            } else {
                updatePassword(password)
                updateProfile()
            }

        } else {
            updateProfile()
        }

    }

    const updatePassword = (password) => {

        Fire.auth().onAuthStateChanged((user) => {
            if(user){
                user.updatePassword(password).catch((err) => {
                    showMessage({
                        message: err.message,
                        type: "danger"
                    })
                })
            }
        })
    }

    const updateProfile = () => {
 
        const data = profile ;
        data.photo = photoForDB ;

        Fire.database()
        .ref(`users/${profile.uid}/`)
        .update(data)
        .then(() => {
            
            storeData('user', data)
            showMessage({
                message: 'Update Profile Success',
                type: 'success',
            })
        }).catch(err => {
            showMessage({
                message: err.message,
                type: 'warning',
            })
        })
    }


    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value
        })
    }

    const getImage = () => {
        ImagePicker.showImagePicker({quality: 0.5, maxWidth:200, maxHeight:200}, (response) => {
            if (response.didCancel || response.error) {
                console.log(response.error)
                showMessage({
                    message:  response.error,
                    type:"warning",
                })

            } else {
                const source = `data:${response.type};base64, ${response.data}`;
                setPhotoForDB(source)
                
                setPhoto({uri: source})
            }
        })
    }

    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>

                    <Profile photo={photo} isRemove onPress={getImage} />
                    <Input 
                        label="Nama Lengkap"
                        value={profile.fullname}
                        onChangeText={(val) => changeText('fullname', val)}
                        />
                    <Input 
                        label="Profesi"
                        value={profile.profesi}
                        onChangeText={(val) => changeText('profesi', val)}
                        />
                    <Input 
                        label="Email"
                        value={profile.email}
                        disable
                        />
                    <Input 
                        label="Password" 
                        
                        value={password}
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry
                        />

                    <Button title="Save Profile" onPress={() => update()} />
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1,
    },
    content:{
        padding:30,
        paddingTop:10
    }
})
