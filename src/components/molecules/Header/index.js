import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {IconLeftDark} from '../../../assets';
import { colors } from '../../../utils';
import { Button } from '../../../components';
import { color } from 'react-native-reanimated';
import DarkProfile from './DarkProfile';

const Header = ({title, onPress, type, name, desc, photo}) => {
    if (type === "dark-profile") {
        return <DarkProfile onPress={onPress} name={name} desc={desc} photo={photo} />
    }
    return (
        <View style={styles.container(type)} >
            {/* <IconLeftDark  /> */}
            <Button type="icon-only" icon={type == 'dark' ? 'left-light' : 'left-dark'} onPress={onPress} />
            <Text style={styles.text(type)}>{title}</Text>
        </View>
    )
}

export default Header ;

const styles = StyleSheet.create({
    container: (type) => (
        {
            paddingHorizontal:14,
            paddingVertical:10,
            backgroundColor: type === 'dark' ? colors.primary : colors.white,
            flexDirection:'row',
            shadowColor: colors.text.black,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.9,
            shadowRadius: 5,
            elevation:7,
            borderBottomRightRadius:type === 'dark' ? 20 : 0,
            borderBottomLeftRadius:type === 'dark' ? 20 : 0
        }
    ),
    text: (type) => ({

        flex:1,
        textAlign:'center',
        fontSize:16,
        fontFamily:'Poppins-Bold',
        color: type === 'dark' ? colors.white : colors.blackSmooth,
         
    })

})
