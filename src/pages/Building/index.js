import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { BuldingBackground } from '../../assets'
import { colors } from '../../utils'
import BuildingList from '../../components/molecules/BuildingList'
import { color } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'
import { Bullets } from 'react-native-easy-content-loader'

const Building = () => {
    const [news, setNews] = useState([])


    useEffect(() => {
        Fire.database()
        .ref('news/')
        .once('value')
        .then(res => {
            const data = res.val();
            const filterData = data.filter(el => el !== null);
            setNews(filterData)
        })
        .catch(err => { 
            showMessage({
                message: err.message,
                type:'warning'
            })
        })
    }, [])

    return (
        <View style={styles.page}>
            <View style={styles.titleHead}>
                
                <Text style={styles.imageTitle}>Properti</Text>
                <Text style={styles.imageDesc}>Indonesia</Text>
            </View>
            <ImageBackground source={BuldingBackground} style={styles.imageBackground}>
            </ImageBackground>
            <View style={styles.content}>
                
                {/* <Text>Building Development</Text> */}
                <ScrollView showsVerticalScrollIndicator={false}>


                    {   news < 1 ? <Bullets active listSize={4} primaryColor={colors.primary} /> :
                        news.map(news => {
                            return  <BuildingList 
                                type={news.type} 
                                key={news.id}
                                name={news.title}
                                address={news.date}
                                picture={news.image}
                            />
                        })
                    }

                    
                </ScrollView>
            </View>
        </View>
    )
}

export default Building

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.primary,
    },  
    content:{
        backgroundColor:colors.white,
        flex:1,
        borderRadius:20,
        marginTop:-20,
        paddingHorizontal:10,
        // paddingVertical:20

    },
    titleHead:{
        // marginBottom:-10,
        position:'absolute',
        zIndex:2,
        flex:1,
        alignSelf: 'center',
        paddingTop:50,

    },
    imageBackground:{
        height:220,
        backgroundColor:color.primary,
        opacity: 0.6,
    },
    imageTitle:{
        textAlign:'center',
        fontSize:25,
        color:colors.white,
        fontFamily:'Poppins-SemiBold',
    },
    imageDesc:{

        textAlign:'center',
        fontSize:18,
        color:colors.white,
        fontFamily:'Poppins-Regular'
    },
})
