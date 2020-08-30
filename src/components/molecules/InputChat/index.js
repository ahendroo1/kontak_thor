import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils'
import { Button } from '../../atoms'
import { color } from 'react-native-reanimated'

const InputChat = ({value, onChangeText, onButtonPress}) => {

    
    return (
        <View style={styles.container}>
            {/* <Text style={styles.inputDisabled} >Tulis pesan disini...</Text> */}
            <TextInput 
                style={styles.input} 
                placeholder="Tulis pesan disini..." 
                value={value} 
                onChangeText={onChangeText}  
            />
            <Button  title="Send" type="btn-icon" onPress={onButtonPress} disabled={value.length < 1}  />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
    },
    input:{
        backgroundColor:colors.enabledInput,
        padding:12,
        borderRadius:10,
        fontSize:12,
        maxHeight:45,
        fontFamily:'Poppins-Regular',
        flex:1,
        marginRight:7,
        color:colors.blackSmooth
    },
    inputDisabled:{
        backgroundColor:colors.disabled,
        padding:12,
        borderRadius:10,
        fontSize:12,
        maxHeight:45,
        fontFamily:'Poppins-Regular',
        flex:1,
        marginRight:7,
        color:colors.blackSmooth
    }
})
