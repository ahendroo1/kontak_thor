import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View ,ScrollView, TouchableOpacity } from 'react-native'
import { HomeProfile, HomeCategory, UserRate, NewsItem, Button } from '../../components'
import { colors } from '../../utils';
import {JSONCategoryContractor} from '../../assets';
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';
import { InstagramLoader, Bullets } from 'react-native-easy-content-loader';

const Home = ({navigation}) => {

    const [news, setNews] = useState([])
    const [categorys, setCategory] = useState([])
    const [categoryUser, setCategoryUser] = useState([])
    const [contractors, setContractor] = useState([])

    useEffect(() => {
        getCategory();
        getCategoryUser();
        getContractor();
        getNews();
        
    }, []);

    const getContractor = () => {
        Fire.database()
        .ref('doctors/')
        .orderByChild('rate')
        .limitToLast(4)
        .once('value')
        .then((res) => {
            if(res.val()){
                    
                const oldData = res.val()
                const data = []
                Object.keys(oldData).map((key) => {
                    data.push({
                        id: key,
                        data: oldData[key]
                    })
                })
                
                const filterData = data.filter(el => el !== null);
                setContractor(filterData)
            }
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type: 'warning'
            })
        })
    }

    const getNews = () => {
        
         Fire.database()
        .ref('news/')
        .once('value')
        .then((res) => {
            const data = res.val();
            const filterData = data.filter(el => el !== null);
            setNews(filterData)
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type: 'warning'
            })
        })
    }
    
    const getCategoryUser = () => {

        
        const rootDB =  Fire.database().ref(urlHistory);
        const urlHistory = `contractor_category/`;
        const messageDB = rootDB.child(urlHistory)

        messageDB.on('value', async snapmesage => {

            if (snapmesage.val()) {

                const oldData = snapmesage.val()
                const data = []
                const promise = await Object.keys(oldData).map(async key => {

                    const urlUidContractor = `doctors/${oldData[key].uid}`;
                    const detailContractor = await rootDB.child(urlUidContractor).once('value');

                    const urlIdCategory = `category/${oldData[key].category_id}`;
                    const detailCategory = await rootDB.child(urlIdCategory).once('value');
                    data.push({
                        id:key,
                        categorys: detailCategory.val(),
                        contractor: detailContractor.val(),
                        ...oldData[key]
                    })
                    
                })
                await Promise.all(promise)
                // console.log(data)
                setCategoryUser(data)
            }
        })

    }
    const getCategory = () => {
         Fire.database()
        .ref('category/')
        .once('value')
        .then((res) => {
            // console.log(res)
            const data = res.val();
            const filterData = data.filter(el => el !== null);

            setCategory(filterData)
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type: 'warning'
            })
        })
    }

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    
                    <HomeProfile  onPress={() => navigation.navigate('UserProfile')} />
                    
                    {/* <Text style={styles.welcome}></Text> */}
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                {  categoryUser < 1 ? <InstagramLoader active primaryColor={colors.primary} /> :
                                    categoryUser.map(category => {
                                        // console.log(category)
                                        return <HomeCategory 
                                            key={category.id} 
                                            category={category.contractor.fullName}
                                            desc={category.contractor.profession}
                                            image={category.categorys.image}
                                            photo={category.contractor.photo}
                                            // onPress={() => navigation.navigate('UserContent', category) }
                                        />
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View> 

                    <View style={{ padding:0 }} >
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                {
                                    categorys < 1 ? <Bullets active listSize={1} primaryColor={colors.primary} /> :
                                    categorys.map(category => {
                                        return <View 
                                                    style={styles.containerCategory} 
                                                    key={category.id}
                                                >
                                                    <TouchableOpacity style={styles.categoryButton} 
                                                        onPress={() => navigation.navigate('ChooseContractor', category) } 
                                                        >
                                                        <Text style={styles.categoryText}>{category.category}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                        
                                    })
                                }

                        </ScrollView>
                    </View>

                    <View style={styles.wrappSection}>
                        <Text style={styles.textUser} >Profesional Contractor</Text>
                        { contractors < 1 ? <Bullets active listSize={4} primaryColor={colors.primary} /> :
                            contractors.map(contractor => {
                                // console.log(contractor)
                                return <UserRate
                                    key={contractor.id}
                                    name={contractor.data.fullName} 
                                    desc={contractor.data.profession}
                                    avatar={contractor.data.photo}
                                    rate={contractor.data.rate}
                                    onPress={() => navigation.navigate('ContractorProfile', contractor)}
                                />
                            })
                        }
                        
                    </View>
                    <View  style={styles.wrappSection}>
                        <Text style={styles.goodNews}>Properti</Text>

                        {   news < 1 ? <Bullets active listSize={4} primaryColor={colors.primary} /> :
                            news.map((item) => {
                                return  <NewsItem 
                                    key={item.id}
                                    title={item.title}
                                    date={item.date}
                                    image={item.image}
                                />
                            })
                        }


                    </View>
                
                </ScrollView>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.primary,
        flex:1,
        
    },
    content:{
        
        // paddingVertical:20,
        paddingHorizontal:10,
        backgroundColor:colors.white,
        flex:1,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,

    },
    goodNews:{
        fontSize:16,
        fontFamily:'Poppins-SemiBold',
    },
    welcome:{
        fontSize: 16,
        color: colors.blackSmooth,
        fontFamily: 'Poppins-SemiBold',
        marginTop:20,
        marginBottom:20,
        marginRight:40,
    },
    category:{
        flexDirection:'row',
    },
    wrapperScroll:{
        marginHorizontal:5,
        marginVertical:15,
    },
    textUser:{
        fontSize:16,
        fontFamily:'Poppins-SemiBold'
    },
    wrappSection:{
        marginTop:20,
    },
    categoryButton:{
        color:'#fff',
        backgroundColor:colors.primary,
        fontSize:14,
        padding:10,
        margin:5,
        fontFamily:'Poppins-Regular',
        borderRadius:6
    },
    containerCategory:{
    },
    categoryText:{
        color:colors.white
    }
    
})
