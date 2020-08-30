import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { UserContractor, IconNext, IconLanguage, IconEditProfile, IconRate, IconHelp } from '../../../assets'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const List = ({profile, name, desc, type, onPress, icon}) => {
    const Icon = () => {
        if (icon === "edit-profile") {
            return <IconEditProfile />
        }
        if (icon === "language") {
            return <IconLanguage />
        }
        if (icon === "rate") {
            return <IconRate />
        }
        if (icon === "help") {
            return <IconHelp />
        }
        
        return <IconEditProfile />
        
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {
                icon ? 
                    <Icon /> 
                : 
                    <Image source={{ uri:profile }} style={styles.userImage} />
            }
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text  style={styles.desc}>{desc}</Text>
            </View>
            {type === "next" ? <IconNext /> : null}
            
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor:colors.border,
        justifyContent:'space-between',
        
        // borderBottomColor:colors.border,

    },
    content:{
        flex:1,
        marginLeft:10
    },  
    name:{
        fontSize:14,
        fontFamily:'Poppins-Regular',
        
    },
    desc:{
        fontFamily:'Poppins-Regular',
        fontSize:12,
        color:colors.text.secondary
    },  
    userImage:{
        width:40,
        height:40,
        borderRadius:40 / 2,
        marginRight:10,
    }, 
    
})
