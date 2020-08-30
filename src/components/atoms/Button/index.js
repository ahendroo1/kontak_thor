import React from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';
import IconOnly from './IconOnly';
import BtnIcon from './BtnIcon';

const Button = ({type, title, onPress, icon, disabled}) => {

  if (type === 'btn-icon') {
    return <BtnIcon icon={icon} onPress={onPress} disabled={disabled} /> ;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress}  /> ;
  }

  if(disabled) {
      
    return(
      <View style={styles.disabledBg} > 
        <Text style={styles.disabledText}>{title}</Text>
      </View>
    );
  }

  return(
    <TouchableOpacity style={styles.views(type)} onPress={onPress}> 
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
    views: (type) => ({
        // flex:1, 
        alignItems:'center',
        marginVertical:8,
        backgroundColor:type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
        borderRadius:7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation:3,
    }),
    text: (type, disabled) => ({
        fontSize:12,
        color:type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
        paddingVertical:10,
        fontFamily: 'Poppins-Regular'
    }),
    disabledBg:{
      
      alignItems:'center',
      marginVertical:10,
      backgroundColor: colors.buttonDisabled,
      borderRadius:7,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.7,
      shadowRadius: 5,
      elevation:3,
    },
    disabledText:{
      
      fontSize:14,
      color:colors.blackSmooth,
      paddingVertical:10,
      fontFamily: 'Poppins-Regular'
    }
});