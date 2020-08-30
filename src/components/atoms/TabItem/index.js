import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HomeIcon, MessageIcon, ProgramIcon, HomeIconActive, MessageIconActive, ProgramIconActive } from '../../../assets'
import { colors } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import AddButton from './buttonCenter'
import { useDispatch, useSelector } from 'react-redux';

const TabItem = ({title, active, onPress, onLongPress}) => {

    const dispatch = useDispatch()
    
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
                name='home'
                type='ionicon'
                color={active ? '#f6cd61' : colors.white}
                />
                
            </TouchableOpacity>
        )
    } 
    
    if(title === 'Kategori'){
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
                <Icon             
                name='file-tray-full'
                type='ionicon'
                color={active ? '#f6cd61' : colors.white}
                />
            </TouchableOpacity>
        ) 

    } 
    if(title === 'Properti'){
        if(active){
            
            dispatch({type: 'SET_STATUSBAR', value:false})
        } else {
            
            dispatch({type: 'SET_STATUSBAR', value:true})
        }
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
                <Icon             
                name='business'
                type='ionicon'
                color={active ? '#f6cd61' : colors.white}
                />
                
            </TouchableOpacity>
        )
    } 
    if(title === 'Profile'){
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
                <Icon             
                name='person-circle'
                type='ionicon'
                color={active ? '#f6cd61' : colors.white}
                />
                
            </TouchableOpacity>
        ) 

    } 

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
            <Icon             
            name='file-tray-full-ellipses'
            type='ionicon'
            color={active ? '#f6cd61' : colors.white}
            />
            
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
