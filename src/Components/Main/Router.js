import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import ListTasks from './ListTasks/ListTasks';
import TaskDetail from './TaskDetail/TaskDetail';
import Menu from './Menu/Menu';
import InforTask from './InforTask/InforTask';
import ChangeInfor from '../ChangeInfor/ChangeInfor';

export const MainStack = StackNavigator({
    Screen_ListTasks: {
        screen: ListTasks,
        navigationOptions: {
            title: 'Danh sách công việc'
        }
    },
    Screen_TaskDetail: {
        screen: TaskDetail,
        navigationOptions: {
            title: 'Công việc chi tiết'
        }
    },
    Screen_ChangeInfor:{
        screen: ChangeInfor
    }
})

export const TaskInfor = StackNavigator({
    Screen_Infor:{
        screen: InforTask
    }
})

export const Tabbar = TabNavigator({
    Main_Tab : {
        screen: MainStack
    },
    TaskInfo_Tab:{
        screen: TaskInfor,
        navigationOptions: {
            title: 'Thông tin'
        }
    }
},
{
    tabBarPosition: 'bottom'
})

export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabbar
    },
},
    {
        drawerWidth: 200,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
)