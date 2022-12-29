import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

// import StateWithClassComponent from './components/StateWithClassComponent'
import StateWithFuctionalComponent from './components/StateWithFuctionalComponent'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent/> */}
      <StateWithFuctionalComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
