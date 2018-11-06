import React, { Component } from 'react';
import {

} from 'react-native';

import {HomeStack} from './RouterMain';
import refreshToken from './api/refreshToken';

export default class App extends Component {
    componentDidMount() {
        setInterval(refreshToken, 60000);
    }
    render() {
        return (
            <HomeStack/>
        );
    }
}
