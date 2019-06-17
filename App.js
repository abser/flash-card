import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hadiths from './src/component/Hadiths';
import Footer from './src/component/Footer';
import Header from './src/component/Header';
import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';
import aws_exports from './aws-exports';
import { withAuthenticator} from 'aws-amplify-react-native';

Amplify.configure(aws_exports);

function App() {
  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <Hadiths />
        </View>
        <View >
          <Footer />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    flex: 4
  }
});

export default withAuthenticator(App, true);
// export default App;