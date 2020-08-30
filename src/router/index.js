import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { Splash, 
    GetStarted, 
    Login, 
    Register, 
    UploadFotoProfile, 
    Building,
    Home,
    Message,
    Chat,
    UserProfile,
    UpdateProfile,
    ContractorProfile
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import ChooseContractor from '../pages/ChooseContractor';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} /> } >
            <Tab.Screen name="Beranda" component={Home} />
            <Tab.Screen name="Kategori" component={Building} />
            <Tab.Screen name="Pesan" component={Message} />
            <Tab.Screen name="Properti" component={Building} />
            <Tab.Screen name="Profile" component={UserProfile} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            
            <Stack.Screen
                name="Splash" 
                component={Splash} 
                options={{ headerShown:false }} 
            /> 
            <Stack.Screen 
                name="GetStarted"  
                component={GetStarted} 
                options={{ headerShown:false }} 
            /> 
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{ headerShown:false }} 
            /> 
            <Stack.Screen 
                name="Register" 
                component={Register}
                options={{ headerShown:false }}
            /> 
            <Stack.Screen 
                name="UploadFotoProfile" 
                component={UploadFotoProfile}  
                options={{ headerShown:false }}
            /> 
            <Stack.Screen
                name="MainApp"  
                component={MainApp}  
                options={{ headerShown:false }} 
            />
            <Stack.Screen
                name="ChooseContractor"  
                component={ChooseContractor}
                options={{ headerShown:false }} 
            />
        
            <Stack.Screen
                name="Chat"
                component={Chat}
                options={{ headerShown:false }}
            />
            <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{ headerShown:false }} 
            />
            <Stack.Screen
                name="UpdateProfile"
                component={UpdateProfile}
                options={{ headerShown:false }} 
            />
            <Stack.Screen
                name="ContractorProfile"
                component={ContractorProfile}
                options={{ headerShown:false }} 
            />
        </Stack.Navigator>
    );
}

export default Router ;