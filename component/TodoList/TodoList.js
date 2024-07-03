import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    Switch,
    Alert,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { FontAwesome5 } from '@expo/vector-icons'
import * as database from '../../database'

export default function TodoList() {
    const [tasks, setTasks] = useState([])
    const [newTaskTitle, setNewTaskTitle] = useState('')

    const fetchTasks = async () => {
        const getTasks = await database.load()
        setTasks(getTasks)
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    const handleAddTask = async () => {
        if (newTaskTitle.trim() !== '') {
            const data = {
                title: newTaskTitle,
                status: 'due/false',
            }
            const id = await database.save(data)
            setNewTaskTitle('')

            fetchTasks()
        }
    }

    const handleToggleStatus = async index => {
        try {
            const taskToUpdate = tasks[index]
            const newStatus =
                taskToUpdate.status === 'done/true' ? 'due/false' : 'done/true'
            const updatedData = { status: newStatus }

            await database.update(taskToUpdate.id, updatedData)

            fetchTasks()
        } catch (error) {
            console.error('Error toggling task status: ', error)
        }
    }
    const handleDeleteTask = index => {
        Alert.alert(
            'Remove Task',
            'This action will permanently delete this task. This action cannot be undone!',
            [
                {
                    text: 'Confirm',
                    onPress: async () => {
                        try {
                            const taskToDelete = tasks[index]
                            await database.remove(taskToDelete.id)

                            fetchTasks()
                        } catch (error) {
                            console.error('Error deleting task: ', error)
                        }
                    },
                },
                {
                    text: 'Cancel',
                },
            ]
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.taskDetail}>
                <Text
                    style={{
                        fontSize: 20,
                        color: 'purple',
                        fontWeight: 'bold',
                    }}
                >
                    Enter Task Details
                </Text>
            </View>
            <TextInput
                style={styles.input}
                value={newTaskTitle}
                onChangeText={text => setNewTaskTitle(text)}
                placeholder="Enter task title"
            ></TextInput>
            <TouchableOpacity
                onPress={handleAddTask}
                disabled={newTaskTitle.trim() === ''}
                style={styles.addButton}
            >
                <Text style={styles.addButtonText}>ADD TASK</Text>
            </TouchableOpacity>

            <ScrollView>
                {tasks.map((task, index) => (
                    <View key={index} style={styles.taskContainer}>
                        <View style={styles.taskElement}>
                            <Text>{task.title}</Text>
                            <TouchableOpacity
                                onPress={() => handleDeleteTask(index)}
                            >
                                <FontAwesome5
                                    name="trash"
                                    size={30}
                                    color="black"
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.secTaskElement}>
                            <Text>Status:{task.status}</Text>
                            <Switch
                                style={{
                                    transform: [
                                        { scaleX: 0.8 },
                                        { scaleY: 0.8 },
                                    ],
                                }}
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
