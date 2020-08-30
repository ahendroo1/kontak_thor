import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { BuldingContent } from '../../../assets'
import { colors } from '../../../utils'

const BuildingList = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri:props.picture }} style={styles.image} />
            <View style={styles.content}>
                
                <Text style={styles.textCategory}>{props.type}</Text>
                <Text style={styles.textTitle}>{props.name}</Text>
                <Text style={styles.textDesc}>{props.address}</Text>

            </View>
        </View>
    )
}

export default BuildingList

const styles = StyleSheet.create({
    container:{

        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor:colors.border

    },  
    content:{
        backgroundColor:colors.white,
        // Right:20
        flex:1
    },  
    textCategory:{
        fontSize:12,
        color:colors.text.primary,
        fontFamily:'Poppins-SemiBold',
    },  
    textTitle:{
        fontSize:14,
        color:colors.text.primary,
        fontFamily:'Poppins-SemiBold',
    },  
    textDesc:{
        fontSize:10,
        color:colors.text.secondary,
        fontFamily:'Poppins-SemiBold',
    },  
    image:{

        width:80,
        height:80,
        marginRight:20,
    }
})
