import React, {useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components'
import { colors, getData, getChatTime, setDateChat } from '../../utils';
import { Fire } from '../../config';
import { showMessage } from 'react-native-flash-message';

const Chat = ({navigation, route}) => {
    
    const scrollViewRef = useRef()

    const itemContractor = route.params;
    const [chatContent, setChatContent] = useState("");
    const [user, setUser] = useState({});
    const [chatData, setChatData] = useState([]);
    const defaultPhoto = "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/66231515_112699586690253_3134866998371024896_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_eui2=AeHg6SdDtMOAE0b8TOKdDfujxhgKhA8AcPLGGAqEDwBw8ixcyDGX8Avd2VDz9bTYdzaRh1n2NITwfeKvCc4Ai1Z_&_nc_ohc=LlQRz_woWUYAX8XgEPa&_nc_ht=scontent-xsp1-2.xx&oh=b88de15f26fc3d7244e35192c8805b9e&oe=5F530ADB"

    useEffect(() => {
       userDataFromLocal();
       
       const chatId = `${user.uid}_${itemContractor.data.uid}`;
       const urlFirebase = `chatting/${chatId}/allChat/` ;
       Fire.database()
       .ref(urlFirebase)
       .on('value', snapchat => {

           if(snapchat.val()){
               const dataSnapchat = snapchat.val();
               const allDataChat = [];

                Object.keys(dataSnapchat).map(key => {
                    const dataChat = dataSnapchat[key];
                    const newDataChat = []
                    
                    Object.keys(dataChat).map(itemChat => {
                        newDataChat.push({
                            id: itemChat,
                            data: dataChat[itemChat]
                        })
                    })

                    allDataChat.push({
                        id:key,
                        data:newDataChat
                    })
                })

               setChatData(allDataChat)

           }
       })
    }, [itemContractor.data.uid, user.uid])

    const userDataFromLocal = () => {
        getData('user').then(res => {
            setUser(res)
        })
    }

    const chatSend = () => {

        const today = new Date();
        const data = {

            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today),
            chatContent: chatContent
        }
        const chatId = `${user.uid}_${itemContractor.data.uid}`;
        const urlFirebase = `chatting/${chatId}/allChat/${setDateChat(today)}` ;
        const urlMessageUser = `message/${user.uid}/${chatId}`;
        const urlMessageContractor = `message/${itemContractor.data.uid}/${chatId}`;

        const dataHistoryChatUser = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: itemContractor.data.uid
        }
        
        const dataHistoryChatContractor = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: itemContractor.data.uid,
            uidFirstPartner: user.uid
        }

        Fire.database()
        .ref(urlFirebase)
        .push(data)
        .then(() => {
            setChatContent('')

            Fire.database()
            .ref(urlMessageUser)
            .set(dataHistoryChatUser)
            
            Fire.database()
            .ref(urlMessageContractor)
            .set(dataHistoryChatContractor)

        }).catch(err => {
            showMessage({
                message: err,
                type: 'warning'
            })
        })

    }
    
    return (
        <View style={styles.page}>
            <Header title="Chat" 
            name={itemContractor.data.fullName} 
            desc={itemContractor.data.profession} 
            photo={itemContractor.data.photo} 
            type="dark-profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}  ref={scrollViewRef}
                    onContentSizeChange={(contentWidth, contentHeight)=> {scrollViewRef.current.scrollToEnd({animated: false})}} >
              

            {
                chatData.map(chat => {
                    return  <View key={chat.id} style={styles.content}>
                            <Text style={styles.dateChat}>{chat.id}</Text>
                        {
                            chat.data.map(itemChat => {
                                const IsMe = itemChat.data.sendBy === user.uid ;
                                return <ChatItem 
                                    key={itemChat.id}
                                    isMe={IsMe}
                                    photo={IsMe ? null : itemContractor.data.photo }
                                    text={itemChat.data.chatContent}
                                    date={itemChat.data.chatTime}
                                /> 
                            })
                        }
                    </View>
                })
            }
            </ScrollView>
            <InputChat value={chatContent} onChangeText={(value) => setChatContent(value)} onButtonPress={chatSend} />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1,

    },
    content:{
        flex:1
    },  
    dateChat:{
        textAlign:'center',
        color:colors.blackSmooth,
        fontSize:14,
        fontFamily:'Poppins-Regular',
        marginVertical:15
    }
})
