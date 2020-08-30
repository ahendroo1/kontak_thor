import React, {useState} from 'react';
import {
    StyleSheet, Text, View, TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Button = ({label, value, onChangeText, secureTextEntry, disable}) => {
    const [border,setBorder] = useState(colors.border);
    const onFocusForm = () => {
        setBorder(colors.primary)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
  return(
    <View style={{ marginVertical:10 }}>
        <Text style={styles.text} >{label}</Text>
        <TextInput 
            onFocus={onFocusForm} 
            onBlur={onBlurForm} 
            style={styles.input(border)}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            editable={!disable}
            selectTextOnFocus={!disable}
             />
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
    input:(border) => (
        {
            borderWidth:1,
            borderColor:border,
            borderRadius:8,
            paddingVertical:7,
            paddingHorizontal:14,
    
        }
    ),
    text:{
        fontSize:14,
        color: colors.text.secondary,
        marginBottom:6,
        fontFamily:'Poppins-Regular',
    }
});