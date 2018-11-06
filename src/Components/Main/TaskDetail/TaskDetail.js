import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import RNFetchBlob from 'react-native-fetch-blob';

import pick from '../../../api/picker';
import uploadFile from '../../../api/upload';
import updateTask from '../../../api/updateTask'

export default class TaskDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            data: null
        }
    }
    render() {

        const task = this.props.navigation.state.params.task;

        let img = this.state.avatarSource == null ? null :
            <Image
                source={this.state.avatarSource}
                style={{ height: 200, width: 200 }}
            />
        return (
            <View>
                <View>
                    <Text>Công việc trên mảnh vườn thứ nhất</Text>
                    <Text>Total : {task.total}</Text>
                    <Text>Current : {task.current}</Text>
                    <TouchableOpacity onPress={this.updateTaskComplete.bind(this)}>
                        <Text>Cập nhật thời gian hoàn thành</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.show.bind(this)}>
                        <Text>Show Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.upload.bind(this)}>
                        <Text>Up Load</Text>
                    </TouchableOpacity>
                    {img}
                </View>
            </View>
        )
    }
    updateTaskComplete() {
        updateTask(1)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    show() {
        pick((source, data) => this.setState({ avatarSource: source, data: data }));
    }
    upload() {
        uploadFile([
            { name: 'task', filename: 'task.png', data: this.state.data }
        ])
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
}

