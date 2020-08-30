import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, List, Profile, Button } from '../../components'
import { colors, getData } from '../../utils'
import { UserProfileDefault } from '../../assets'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'

const UserProfile = ({navigation}) => {
    
    const [profile, setProfile] = useState({
        fullname: '',
        profesi: '',
        photo: UserProfileDefault
    });

    useEffect(() => {
        getData('user').then(res => {
            const data = res ;
            data.photo = {uri: res.photo}
            setProfile(data)
        })
    }, [])

    const logout = () => {
        Fire.auth().signOut().then((res) => {
            showMessage({
                message: "Sign Out Success...",
                type:"info"
            })
            navigation.replace('GetStarted')
        }).catch(err => {
            showMessage({
                message: "Sign Out Error...",
                type:"danger"
            })
        })
    }
    return (
        <View style={styles.page}>
                    
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    profile.fullname !== '' && 
                    <Profile 
                        name={profile.fullname} 
                        desc={profile.profesi} 
                        photo={profile.photo} 
                    />
                }
                <List 
                    name="Edit Profile"
                    desc="Edit profile anda " 
                    type="next" 
                    icon="edit-profile"
                    onPress={() => navigation.navigate('UpdateProfile')}
                />
                <List 
                    name="Language" 
                    desc="Last Update " 
                    type="next" 
                    icon="language" 
                />
                <List 
                    name="Rate" 
                    desc="Last Update " 
                    type="next" 
                    icon="rate" 
                />
                <List 
                    name="Help Center" 
                    desc="Last Update " 
                    type="next" 
                    icon="help" 
                />
                <View  style={styles.button} >
                    
                    <Button title="Logout" type="secondary" onPress={() => logout()} /> 

                </View>
            </ScrollView>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    },
    button:{
        marginVertical:20,
        marginHorizontal:15,

    }
})
