import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconSend, IconSendActive } from '../../../assets'
import { colors } from '../../../utils'

const BtnIcon = ({disabled, onPress}) => {
    if(disabled){

        return (
            <View style={styles.container(disabled)}>
                {disabled === "disabled" ? <IconSend /> : <IconSendActive /> }
            </View>
        )
    }
    
    return (
        <TouchableOpacity style={styles.container(disabled)} onPress={onPress}>
            {disabled === "disabled" ? <IconSend /> : <IconSendActive /> }
        </TouchableOpacity>
    )
}

export default BtnIcon

const styles = StyleSheet.create({
    container: (disabled) => (
        {
            backgroundColor: disabled ? colors.disabled : colors.primary,
            width:45,
            height:45,
            borderRadius:45 / 2,
            paddingTop:8,
            paddingRight:5,
            paddingBottom:8,
            paddingLeft:13,
    
        }
    )
})
