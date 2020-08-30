import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'
import { colors } from "../../../utils";


const buttonCenter = ({onPress, active}) => {

    const handlePress = () => {
        console.log(1)
        
    };


        return (
            <View style={{ position: "absolute", alignItems: "center" }}>
               
                <View style={[styles.button]}>
                    <TouchableHighlight onPress={onPress} underlayColor={colors.primary}>
                    {/* style={{ transform: [{ rotate: rotation }] }} */}
                            <Icon name="chatbubble-ellipses-outline" type="ionicon"  size={24} color={active ? colors.white : colors.blackSmooth } />
                    </TouchableHighlight> 
                </View>
            </View>
        );
    
}

export default buttonCenter

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 52,
        height: 52,
        borderRadius: 52 / 2,
        backgroundColor: colors.primary,
        position: "absolute",
        marginTop: -30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation:3,
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: colors.primary
    }
});