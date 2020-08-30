import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { UserDeveloper,IconStar, IconStarActive } from '../../../assets'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const UserRate = ({name,desc, avatar, onPress, rate}) => {
    const Star = () => {
        if(rate == 1){
            return <View style={styles.iconStar}><IconStarActive /> <IconStar /><IconStar /><IconStar /><IconStar /></View>
        }
        if(rate == 2){
            return <View style={styles.iconStar}><IconStarActive /><IconStarActive /><IconStar /><IconStar /><IconStar /></View>
        }
        if(rate == 3){
            return <View style={styles.iconStar}><IconStarActive /><IconStarActive /><IconStarActive /><IconStar /><IconStar /></View>
        }
        if(rate == 4){
            return <View style={styles.iconStar}><IconStarActive /><IconStarActive /><IconStarActive /><IconStarActive /><IconStar /></View>
        }
        if(rate == 5){
            return <View style={styles.iconStar}><IconStarActive /><IconStarActive /><IconStarActive /><IconStarActive /><IconStarActive /></View>
        }
        return <View><IconStar /> <IconStar /><IconStar /><IconStar /><IconStar /></View>
    }
    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                source={{ uri: avatar  }} 
                style={styles.avatar} 
            />
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profesi}>{desc}</Text>
            </View>
            {/* <Star /> */}

        </TouchableOpacity>
    )
}

export default UserRate

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent: 'space-between',
        alignItems:"center"
    },  
    avatar:{
        width:50,
        height:50,
        borderRadius: 50 / 2,
        marginRight:15

    },
    profile:{
        flex:1
    },  
    name: {
        // paddingTop:5,
        fontSize:14,
        fontFamily:'Poppins-SemiBold',
        color:colors.blackSmooth
    },
    profesi:{
        fontSize:12,
        fontFamily: 'Poppins-Regular',
        color:colors.blackSmooth
    },
    iconStar:{
        flexDirection:'row',
        
    }
})
