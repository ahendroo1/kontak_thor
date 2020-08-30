import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { colors } from '../../../utils'

const Loading = ({switchButton}) => {

    if(switchButton){
        
        return (
            <View style={styles.wrapper}>
                <ActivityIndicator size="small" color={colors.primary} />
            </View>
        )
    }
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.loadingText}>Loading....</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.loadingBackground,
        width:'100%',
        height:'100%',
    }, 
    loadingText:{
        fontSize:20,
        fontFamily:'Poppins-Regular',
        color:colors.primary
    }
})
