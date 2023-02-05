import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Kutubkhan Makda</Text>
        <Text>Maleka</Text>
      </View>
    </Provider>
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
