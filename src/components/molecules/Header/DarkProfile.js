import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = ({onPress, name, desc, photo}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="left-light" onPress={onPress} />
            <View style={styles.content}>
                
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.profesi}>{desc}</Text>
            </View>
            <Image source={{ uri: photo }} style={styles.avatar} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        paddingVertical:10,
        paddingLeft:16,
        paddingRight:16,
        borderBottomLeftRadius:20,  
        borderBottomRightRadius:20,
        flexDirection:'row',
        alignItems:'center',
    },
    content:{
        flex:1
    },
    avatar: {
        width:40,
        height:40,
        borderRadius:40 /2,

    },
    name:{
        fontSize:16, 
        fontFamily:'Poppins-SemiBold',
        textAlign:'center',
        color:colors.white
    },
    profesi:{
        fontSize:12, 
        fontFamily:'Poppins-Regular',
        textAlign:'center',
        color:colors.white
    }
})
