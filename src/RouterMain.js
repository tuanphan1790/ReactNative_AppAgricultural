import React from 'react';
import { StackNavigator } from 'react-navigation';

import Main from './Components/Main/Main';
import Authentication from './Components/Authentication/Authentication';


export const HomeStack = StackNavigator({
    Screen_Authentication: {
        screen: Authentication,
        navigationOptions: {
            header: null
        }
    },
    Screen_Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    }
})