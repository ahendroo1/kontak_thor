import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { 
    
    IconLaunch1,
    IconLaunch2,
    IconLaunch3,
    IconLaunch4,
    IconLaunch5,
    IconLaunch6,
    IconLaunch7,


} from '../../../assets'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeCategory = ({category, desc, onPress}) => {
    // const Icon = () =>{
    //     if (category === 'Hotel') {
    //         return <IconLaunch1 style={styles.ilustration} />;
    //     }
    //     if (category === 'Building') {
    //         return <IconLaunch2 style={styles.ilustration} />;
    //     }
    //     if (category === 'House') {
    //         return <IconLaunch3 style={styles.ilustration} />;
    //     }
    //     if (category === 'Appartment') {
    //         return <IconLaunch4 style={styles.ilustration} />;
    //     }
    //     if (category === 'Store') {
    //         return <IconLaunch5 style={styles.ilustration} />;
    //     }
    //     if (category === 'Market') {
    //         return <IconLaunch6 style={styles.ilustration} />;
    //     }
    //     if (category === 'Mall') {
    //         return <IconLaunch7 style={styles.ilustration} />;
    //     }
        
    //     return <IconLaunch1 style={styles.ilustration} />;
    // }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <ImageBackground 
                source={{ uri: 'https://images.unsplash.com/photo-1498373419901-52eba931dc4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }}  
                style={styles.imageCategory}
            >
            </ImageBackground>
            <View style={styles.user}>
                <Image source={{ uri: 'https://images.unsplash.com/profile-1527612589857-49c8a88f2b79?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff' }} style={styles.userImage} />
                <View style={{ paddingLeft:5, flex:1 }}>
                    <Text style={styles.name}>{category}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
            </View>
            
            {/* <Text style={styles.desc}>{desc}</Text> */}
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
        
        position:'absolute',
        zIndex:2,
        flexDirection:'row',
        padding:10,
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
        
        backgroundColor:colors.primary,
        opacity: 0.7,
    }
})
