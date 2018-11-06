import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import * as actionCreditors from '../../redux/action';

import signIn from '../../api/signIn';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
    }
    onSignIn() {
        const { name, password } = this.state;
        const { loginedStatus } = this.props;
        signIn(name, password)
            .then(res => {
                let _data = res.data;
                loginedStatus(
                    _data.user_id,
                    _data.firstname,
                    _data.username,
                    _data.group.group_id
                );
            })
            .catch(err => console.log(err));

        this.props.gotoScreenListTasks();
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { name, password } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={text => this.setState({ name: text })}
                    underlineColorAndroid="transparent"
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});

export default connect(null, actionCreditors)(SignIn);
