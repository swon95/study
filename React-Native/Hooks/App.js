import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomHook from './components/CustomHook';

// import StateWithClassComponent from './components/StateWithClassComponent'
// import StateWithFuctionalComponent from './components/StateWithFuctionalComponent'
// import UseEffectWithClassComponent from './components/UseEffectWithClassComponent'
// import UseEffectWithFunctionalComponent from './components/UseEffectWithFunctionalComponent'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent/> */}
      {/* <StateWithFuctionalComponent/> */}
      {/* <UseEffectWithClassComponent/> */}
      {/* <UseEffectWithFunctionalComponent/> */}

      <CustomHook/>
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
