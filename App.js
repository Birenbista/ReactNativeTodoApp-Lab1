import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './component/TodoList/TodoList';
import Header from './component/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
