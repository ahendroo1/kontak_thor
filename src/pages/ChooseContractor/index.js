import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, List } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { NavigationHelpersContext } from '@react-navigation/native'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'
import { Bullets } from 'react-native-easy-content-loader'
import { colors } from '../../utils'

const ChooseContractor = ({navigation, route}) => {

    const [contractors, setContractors ] = useState([])
    const itemCategory = route.params ;

    useEffect(() => {
        
        callContractorCategory(itemCategory.category);
    }, []);

    const callContractorCategory = (category) => {
        Fire.database()
        .ref('doctors/')
        .orderByChild('category')
        .equalTo(category)
        .once('value')
        .then((res) => {
            if(res.val()){

                const oldData = res.val();
                const data = [];
                Object.keys(oldData).map(item => {
                    data.push({
                        id: item,
                        data: oldData[item]
                    })
                })
                setContractors(data)
            }
        })
        .catch(err => {
            showMessage({
                message: err,
                type: "danger"
            })
        })
    }

    
    return (
        <View>
            <Header title={itemCategory.category} type="dark" onPress={() => navigation.goBack()} />
            
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    contractors < 1 ? <Bullets active primaryColor={colors.primary} listSize={10} /> :
                    contractors.map(contractor => {

                        return <List
                            key={contractor.id}
                            profile={contractor.data.photo}
                            name={contractor.data.fullName}
                            desc={contractor.data.profession}
                            type="next"
                            onPress={() => navigation.navigate('ContractorProfile', contractor)}
                        />
                    })
                }
                
            </ScrollView>
        </View>
    )
}

export default ChooseContractor

const styles = StyleSheet.create({})
