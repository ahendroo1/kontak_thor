import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../../../utils'

const Other = ({text, date, photo}) => {
    
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={{ uri: photo }}
                    style={styles.chatImage}
                />
            </View>
            <View style={styles.textChat}>
                
                <View style={styles.chatContent}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

export default Other;

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        alignItems:'flex-end',
        flexDirection:'row',
        paddingLeft:16,
    },
    chatContent:{
        padding:12,
        paddingRight:18,
        backgroundColor:colors.iconBackgroundDark,
        maxWidth:'90%',
        borderRadius:10,
        borderBottomLeftRadius:0
    },
    text:{
        fontSize:12, 
        fontFamily:'Poppins-Regular',
        color:colors.white,
    },
    textChat:{
      maxWidth: '80%',
  
    },
    date:{
        fontSize:8, 
        fontFamily:'Poppins-Regular',
        color:colors.blackSmooth,
    },
    chatImage:{
        width:30,
        height:30,
        borderRadius:30 / 2,
        marginRight:10
    }
})
