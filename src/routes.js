import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import logo from './assets/logo.png'

import Feed from './pages/Feed'
import New from './pages/New'

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
        initialRouteName: 'New',
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
            headerBackTitle: null
        }, 
        mode: 'modal'
    })
)