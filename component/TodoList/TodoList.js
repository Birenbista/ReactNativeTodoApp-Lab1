import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, Switch, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { FontAwesome5 } from '@expo/vector-icons';


export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');


    const handleAddTask = () => {
        if (newTaskTitle.trim() !== '') {
            const newTask = { title: newTaskTitle, status: 'due/false' };
            setTasks([...tasks, newTask]);
            setNewTaskTitle('');
        }
    };

    const handleToggleStatus = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = updatedTasks[index].status === 'due/false' ? 'done/true' : 'due/false';
        setTasks(updatedTasks);
    };
    const handleDeleteTask = (index) => {
        Alert.alert(
            'Remove Task',
            'This action will permanently delete this task. This action cannot be undone!', [
            {
                text: 'Confirm',
                onPress: () => {
                    const updatedTasks = tasks.filter((_, i) => i !== index);
                    setTasks(updatedTasks);
                }
            },
            {
                text: 'Cancel'
            }
        ]);

    };
    return (
        <View style={styles.container}>
            <View style={styles.taskDetail}>
                <Text style={{ fontSize: 20, color: 'purple', fontWeight: 'bold' }}>Enter Task Details</Text>
            </View>
            <TextInput style={styles.input}
                value={newTaskTitle}
                onChangeText={(text) => setNewTaskTitle(text)}
                placeholder="Enter task title">
            </TextInput>
            <TouchableOpacity onPress={handleAddTask} disabled={newTaskTitle.trim() === ''} style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD TASK</Text>
            </TouchableOpacity>

            <ScrollView>
                {tasks.map((task, index) => (
                    <View key={index} style={styles.taskContainer}>
                        <View style={styles.taskElement}>
                            <Text>{task.title}</Text>
                            <TouchableOpacity onPress={() => handleDeleteTask(index)} >
                                <FontAwesome5 name="trash" size={30} color="black" style={styles.icon} />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.secTaskElement}>
                            <Text>Status:{task.status}</Text>
                            <Switch
                                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                                value={task.status === 'done/true'}
                                onValueChange={() => handleToggleStatus(index)}
                                color="#6200EE"

                            />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}