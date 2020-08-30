import React,  {useState} from 'react';

import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { Loading } from './components';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

const AppMain = () => {

  const stateGlobal = useSelector(state => state)
  console.disableYellowBox = true;
  return (
    <>
      <NavigationContainer>
        {
          stateGlobal.statusbar ? <StatusBar backgroundColor="#00b7c2" barStyle="light-content" /> : <StatusBar backgroundColor="rgba(0, 0, 0, 0)" barStyle="light-content" translucent />
        }
          
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      { stateGlobal.loading && <Loading /> }
    </>
  ) ;
}

const App = () => {

  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  ) ;
}
export default App;
