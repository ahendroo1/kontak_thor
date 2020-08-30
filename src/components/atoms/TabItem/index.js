import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HomeIcon, MessageIcon, ProgramIcon, HomeIconActive, MessageIconActive, ProgramIconActive } from '../../../assets'
import { colors } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import AddButton from './buttonCenter'

const TabItem = ({title, active, onPress, onLongPress}) => {

   
    
    if(title === 'Pesan'){
        return  (
            <View style={{ position: 'relative' }}>
                <AddButton  onPress={onPress} active={active} />
            </View>
        )
                
    } 

    if(title === 'Beranda'){
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
                <Icon             
                name='file-tray-full-outline'
                type='ionicon'
                color={active ? colors.white : colors.blackSmooth}
                />
                <Text style={styles.text(active)}>{title}</Text>
            </TouchableOpacity>
        ) 

    } 
    
    if(title === 'Kategori'){
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
                <Icon             
                name='filter-outline'
                type='ionicon'
                color={active ? colors.white : colors.blackSmooth}
                />
                <Text style={styles.text(active)}>{title}</Text>
            </TouchableOpacity>
        ) 

    } 
    if(title === 'Properti'){
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
                <Icon             
                name='color-filter-outline'
                type='ionicon'
                color={active ? colors.white : colors.blackSmooth}
                />
                <Text style={styles.text(active)}>{title}</Text>
            </TouchableOpacity>
        )
    } 
    if(title === 'Profile'){
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
                <Icon             
                name='person-circle-outline'
                type='ionicon'
                color={active ? colors.white : colors.blackSmooth}
                />
                <Text style={styles.text(active)}>{title}</Text>
            </TouchableOpacity>
        ) 

    } 

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
            <Icon             
            name='file-tray-full-outline'
            type='ionicon'
            color={active ? colors.white : colors.blackSmooth}
            />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    ) 

      
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    text:(active) => (
        
        {
            fontSize: 12,
            color: active ?  colors.white : colors.blackSmooth ,
            fontFamily:active ? 'Poppins-Bold' : 'Poppins-Regular',
        }
    )
})
