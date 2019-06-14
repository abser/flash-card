import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/component/Card';
import Footer from './src/component/Footer';
import Header from './src/component/Header';
import Amplify from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';
import aws_exports from './aws-exports';
import { withAuthenticator} from 'aws-amplify-react-native';

Amplify.configure(aws_exports);

function App() {
  // Auth.signUp({
  //   username: 'nurul',
  //   password: 'nurul123',
  //   attributes: {
  //     email: 'nurul.abser@income.com.sg'
  //   }
  // }).then(res => {
  //   console.log("signup response:", res);
  // })
  
  // Auth.signIn('nurul', 'nurul123')
  // .then(success => {
  //   console.log("Logged in :", success);
  // })
  // .catch(err => {
  //   console.log("Login error: ", err);
  // })
  // Storage.put('test.txt', 'Hello')
  // .then (result => console.log(result)) // {key: "test.txt"}
  // .catch(err => console.log(err));
  // Storage.get("hadith.json",{expires: 300})
  // .then(res => { 
  //   console.log("S3 data: ", res);
  //   fetch(res).then(file => {
  //     console.log(file);
  //   }).catch(error => {
  //     console.log(error);
  //   })
  
  // })
  // .catch(err => {console.log("errr:", err)})
  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <Card />
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