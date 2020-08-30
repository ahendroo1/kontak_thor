import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { colors, getData } from '../../utils'
import { List } from '../../components'
import { Fire } from '../../config'
import { Bullets } from 'react-native-easy-content-loader'


const Message = ({navigation}) => {

    const [contructors, setContructors ] = useState([])
    const [user, setUser ] = useState({})

    useEffect(() => {

        getLocalStorage()
        const rootDB =  Fire.database().ref(urlHistory);
        const urlHistory = `message/${user.uid}`;
        const messageDB = rootDB.child(urlHistory)

        messageDB.on('value', async snapmesage => {

            if (snapmesage.val()) {

                const oldData = snapmesage.val()
                const data = []
                const promise = await Object.keys(oldData).map(async key => {
                    const urlUidContractor = `doctors/${oldData[key].uidPartner}`;
                    const detailContractor = await rootDB.child(urlUidContractor).once('value');

                    data.push({
                        id:key,
                        detailContractor: detailContractor.val(),
                        ...oldData[key]
                    })
                })
                await Promise.all(promise)
                setContructors(data)
            }
        })
    }, [user.uid])

    const getLocalStorage = () => {
        getData('user').then(res => {
            setUser(res)
        })
    }

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Message</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    {
                        contructors.length < 1 ? <Bullets active listSize={10} /> :
                        contructors.map(chat => {
                            const dataContractor = {
                                id: chat.detailContractor.id,
                                data: chat.detailContractor
                            }
                            return <List 
                                key={chat.id}
                                profile={chat.detailContractor.photo} 
                                name={chat.detailContractor.fullName}
                                desc={chat.lastContentChat}
                                onPress={() => navigation.navigate('Chat', dataContractor)}
                            />
                        })
                    }
                    
                </ScrollView>
            </View>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.primary
    },
    container:{

        flex:1,
        // paddingVertical:20,
        paddingHorizontal:10,
        backgroundColor:colors.white,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,

    },
    title:{

        fontSize:23,
        fontFamily:'Poppins-SemiBold',
        marginVertical:15,
        marginHorizontal:10

    }
})
