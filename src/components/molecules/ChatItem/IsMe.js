import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'

const IsMe = ({text, date}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.textChat}>{text}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

export default IsMe;

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        alignItems:'flex-end',
        paddingRight:16,
    },
    chatContent:{
        padding:12,
        paddingRight:18,
        backgroundColor:colors.iconBackground,
        maxWidth:'85%',
        borderRadius:10,
        borderBottomRightRadius:0
    },
    textChat:{
        fontSize:12, 
        fontFamily:'Poppins-Regular',
        color:colors.blackSmooth,
    },
    date:{
        fontSize:8, 
        fontFamily:'Poppins-Regular',
        color:colors.blackSmooth,
    }
})
