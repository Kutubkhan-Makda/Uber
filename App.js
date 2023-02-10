import react from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux'
import HomeScreen from './Screens/HomeScreen';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <SafeAreaProvider>
          <HomeScreen/>
        </SafeAreaProvider>
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
