import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { UserProfileDefault } from '../../../assets'
import { colors, getData } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeProfile = ({onPress}) => {

    const [profile, setProfile] = useState({

        photo: UserProfileDefault,
        fullname: '',
        profesi: ''

    })
    
    useEffect(() => {
        getData('user').then((res) => {
            const data = res ;
            data.photo = {uri: res.photo}
            // console.log(data)
            setProfile(data)
        })
    }, [])

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar} />
            <View style={styles.content}>
                <Text style={styles.name}>{profile.fullname}</Text>
                <Text style={styles.profesi}>{profile.profesi}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container:{
        padding:10,
        marginTop:10,
        flexDirection:'row',
        alignItems:"center"
    },
    avatar:{
        
        width:50,
        height:50,
        borderRadius:50 / 2,
        marginRight:12,
        
    },
    name: {
        
        fontSize:14,
        fontFamily:'Poppins-SemiBold',
        color:colors.blackSmooth,
        textTransform:'capitalize'
    },
    profesi:{
        fontSize:12,
        fontFamily: 'Poppins-Regular',
        color:colors.blackSmooth,
        textTransform:'capitalize'
    },
    content:{
        flex:1,
    }
})
