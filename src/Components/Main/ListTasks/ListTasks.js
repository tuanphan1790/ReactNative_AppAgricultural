import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, Image, ListView, RefreshControl
} from 'react-native';

import { connect } from 'react-redux';
import getTasks from '../../../api/getTasks';


import * as actionCreditors from '../../../redux/action';
import imageIcon from '../../../Media/appIcon/images.jpg';

// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
// }

class ListTasks extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listTasks: ds,
            refreshing: false,
            pageNumber: 1
        };
        this.arr = [];
    }

    componentDidMount() {
        const userId = this.props.accountInfor.userID;
        const dateStart = '01-01-2011';
        {/*
        getTasks(userId, this.state.pageNumber, dateStart)
            .then(res => {
                this.arr = res;
                this.setState({ listTasks: this.state.listTasks.cloneWithRows(this.arr) });
            }
            )
            .catch(err => console.log(err));
            */}
        this.arr = getTasks(userId, this.state.pageNumber, dateStart);
        this.setState
            ({
                listTasks: this.state.listTasks.cloneWithRows(this.arr),
            });
    }

    gotoDetail(_task) {
        this.props.navigation.navigate(
            'Screen_TaskDetail',
            {
                task: _task
            }
        );
    }

    goOnRefresh() {
        this.setState({
            refreshing: true,
        });
        const newPage = this.state.pageNumber + 1;
        const dateStart = '01-01-2011';
        const userId = this.props.accountInfor.userID
        this.arr = getTasks(userId, newPage, dateStart).concat(this.arr);
        this.setState
            ({
                refreshing: false,
                listTasks: this.state.listTasks.cloneWithRows(this.arr),
                pageNumber: newPage
            });
        {/*
        getTasks(userId, newPage, dateStart)
            .then((res) => {
                this.arr = res.concat(this.arr);
                this.setState({
                    refreshing: false,
                    listTasks: this.state.listTasks.cloneWithRows(this.arr),
                    pageNumber: newPage
                });
            })
            .catch(err => console.log(err));
            */}
    }

    render() {
        const {
            container, header, wrapper, backStyle, titleStyle,
            taskContainer, taskImage, taskInfo, lastRowInfo,
            txtName, txtData, txtTotal, txtCurrent, txtShowDetail
         } = styles;

        return (
            <View style={container}>
                <ListView
                    contentContainerStyle={wrapper}
                    enableEmptySections
                    dataSource={this.state.listTasks}
                    renderRow={task => (
                        <View style={taskContainer}>
                            <Image source={require('../../../Media/appIcon/images.jpg')} style={taskImage} />
                            <View style={taskInfo}>
                                <Text style={txtName}>{task.name}</Text>
                                <Text style={txtData}>Cong viec 1</Text>
                                <Text style={txtTotal}>Total : {task.total}</Text>
                                <View style={lastRowInfo}>
                                    <Text style={txtCurrent}>Current: {task.current}</Text>
                                    <TouchableOpacity onPress={() => this.gotoDetail(task)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.goOnRefresh.bind(this)}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    taskContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    taskImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    taskInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtData: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtTotal: {
        fontFamily: 'Avenir'
    },
    txtCurrent: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});

const mapStateToProp = state => ({ accountInfor: state.loginState });
export default connect(mapStateToProp, actionCreditors)(ListTasks);
