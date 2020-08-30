import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {NewsImage} from '../../../assets';
import { colors } from '../../../utils';

const NewsItem = ({title, date, image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                    
                <Text style={styles.title}>{title}</Text>
                <Text>{date}</Text>
            </View>
            <Image 
            
                source={{ uri: image }} 
                style={styles.newsImage}
            />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderBottomWidth:1, 
        borderBottomColor: colors.border,
        paddingVertical:10,
    },
    titleWrapper:{
        flex:1,
        marginRight:20
    },
    title:{
        fontSize:14,
        fontFamily: 'Poppins-SemiBold',
    },
    date:{
        fontSize:12,
        marginTop:4
    },
    newsImage:{
        width:80,
        height:60,
    }
})
