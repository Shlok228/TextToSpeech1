import React from 'react'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen'
 
const AppSwitchNavigator = createSwitchNavigator({LoginScreen:LoginScreen, MainScreen:MainScreen})
const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return <AppNavigator/>

}