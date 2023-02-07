import react from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import {Provider} from 'react-redux'
import HomeScreen from './Screens/HomeScreen';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <HomeScreen/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
