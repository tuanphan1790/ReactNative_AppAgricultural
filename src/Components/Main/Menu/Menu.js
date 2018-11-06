import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity, Image
} from 'react-native';

import { connect } from 'react-redux';
import * as actionCreditors from '../../../redux/action';
import saveToken from '../../../api/saveToken';

import profile from '../../../Media/temp/profile.png';

class Menu extends Component {

    onSignOut() {
        const { logoffStatus } = this.props;
        saveToken('');
        logoffStatus();

        this.props.navigation.navigate(
            'Screen_Authentication'
        );
    }

    gotoAuthentication() {
        
    }

    gotoChangeInfor() {
        this.props.navigation.navigate(
            'Screen_ChangeInfor'
        );
    }

    render() {
        const { MenuStyle, ImageStyle, btnStyle, textStyle, btnSignInStyle, textSignIn, content, userNameStyle } = styles;
        const { loginState } = this.props;

        return (
            <View style={MenuStyle}>
                <Image style={ImageStyle} source={profile} />
                <View style={content} >
                <Text style={userNameStyle}>{loginState.username}</Text>
                <View style={btnSignInStyle} >
                    <TouchableOpacity onPress={this.gotoChangeInfor.bind(this)} >
                        <Text style={textSignIn}>Change Infor</Text>
                    </TouchableOpacity>
                </View>
                <View style={btnSignInStyle} >
                    <TouchableOpacity onPress={this.onSignOut.bind(this)}>
                        <Text style={textSignIn}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    MenuStyle: {
        backgroundColor: '#34B089',
        flex: 1,
        borderRightWidth: 3,
        borderRightColor: 'white',
        alignItems: 'center',
        paddingTop: 20
    },
    ImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 30
    },
    btnStyle: {
        height: 30,
        paddingHorizontal: 60,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#34B089',
        fontSize: 15
    },
    btnSignInStyle: {
        height: 30,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSignIn: {
        color: '#34B089',
        fontSize: 15
    },
    userNameStyle: {
        marginTop: 0,
        fontSize: 20,
        color: '#FFF',
        paddingBottom: 70
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProp = state => ({ loginState: state.loginState });

export default connect(mapStateToProp, actionCreditors)(Menu);
