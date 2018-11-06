import { AsyncStorage } from 'react-native';

const saveStatusTasks = async (taskArray) => {
    await AsyncStorage.setItem('@task', JSON.stringify(taskArray));
};

export default saveStatusTasks;
