import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeCategory = ({category, desc, onPress, image, photo}) => {
 

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <ImageBackground 
                source={{ uri: image }}
                style={styles.imageCategory}
            >
            </ImageBackground>
            <View style={styles.user}>
                <Image source={{ uri: photo }} style={styles.userImage} />
                <View style={{ paddingLeft:10, flex:1 }}>
                    <Text style={styles.name}>{category}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
            </View>
            
        </TouchableOpacity>
    )
}

export default HomeCategory

const styles = StyleSheet.create({
    
    container: {
        
        padding:0,
        backgroundColor: colors.iconBackground,
        alignSelf:'flex-start',
        borderRadius:10,
        marginRight:10,
        width:200
    },
    ilustration:{
        marginBottom: 14,
    },
    user:{
        borderRadius:32 / 2,
        backgroundColor: '#00000080',
        position:'absolute',
        zIndex:2,
        flexDirection:'row',
        padding:5,
        margin:10
    },
    name: {
        fontSize:14,
        fontFamily:'Poppins-SemiBold',
        color:colors.white,
        alignContent:'center'
    },
    userImage:{
        width:32, height:32,
        borderRadius: 32 / 2
    }, 
    desc:{
        fontSize:10,
        fontFamily: 'Poppins-Regular',
        color:colors.white
    },
    imageCategory:{
        flex:1,
        width:'100%',
        height:130,
        borderRadius:10,
        overflow: 'hidden',
        resizeMode: "cover",
        
    }
})
