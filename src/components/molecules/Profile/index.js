import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconRemove } from '../../../assets'
import { colors } from '../../../utils'

const Profile = ({name, desc, isRemove,  photo, onPress}) => {

    return (
        <View style={styles.container}>
           
            {
                !isRemove && (
                <View style={styles.borderImage}>
                    <Image source={photo} style={styles.image} />
                </View>
                )
            }
            {
                isRemove && (
                <TouchableOpacity style={styles.borderImage} onPress={onPress}>
                    <Image source={photo} style={styles.image} />
                    { !name && ( <IconRemove style={styles.deleteFoto} />) }
                </TouchableOpacity>
                )
            }
            {
                name && (
                <View style={styles.profileText}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profesi}>{desc}</Text>
                </View>
                )
            }
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:'center',
        marginTop:30
    },
    image:{
        width:80,
        height:80,
        borderRadius: 80 /2 ,
        
    },
    borderImage:{
        width:90,
        height:90,
        borderRadius: 90 / 2,
        borderWidth:1, 
        borderColor:colors.text.secondary,
        alignItems:"center",
        justifyContent:"center",
        alignItems:'center',
    },
    profileText:{
        alignItems: 'center',
    },  
    name:{
        fontSize:16,
        fontFamily:"Poppins-Bold",
        marginTop:20
    },
    profesi:{
        fontSize:12,
        fontFamily:"Poppins-Regular",
        marginBottom:40
    },
    deleteFoto:{
        position:'absolute',
        right:0,
        bottom:0

    }
})
