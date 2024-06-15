import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

export default function Header() {
    return (
        <View style={styles.container}>
            <FontAwesome5 name="tasks" size={30} color="black" style={styles.icon} />

            <View style={styles.title}>
                <Text style={styles.appName}>Todo App</Text>

            </View>

        </View>
    );
}