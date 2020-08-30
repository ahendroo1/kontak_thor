import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconLeftDark, IconLeftLight } from '../../../assets';

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if (icon === 'left-dark') {
            return <IconLeftDark />
        }
        if (icon === 'left-light') {
            return <IconLeftLight />
        }

        return <IconLeftDark />

    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
