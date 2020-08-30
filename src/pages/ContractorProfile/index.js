import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Profile, ProfileItem, Button, } from '../../components'
import { colors } from '../../utils';

const ContractorProfile = ({navigation, route}) => {

    const contractor = route.params
    
    return (
        <View style={styles.page}>
            <Header title="Contractor Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Profile

                    name={contractor.data.fullName}
                    desc={contractor.data.profession}
                    photo={{ uri: contractor.data.photo }}

                />
                <View style={styles.content}>
                        
                    <ProfileItem label="Alumni" value={contractor.data.university} />
                    <ProfileItem label="Profesionalitas Kerja" value={contractor.data.profession} />
                    <ProfileItem label="No.Identitas" value={contractor.data.str_number} />

                </View>
                <View style={styles.content}>
                    <Button title="Mulai Mengobrol" onPress={() => navigation.navigate('Chat', contractor)} />
                </View>
            </ScrollView>
        </View>
    )
}

export default ContractorProfile

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    },
    content:{
        paddingVertical:30, paddingHorizontal:15
    }
})
