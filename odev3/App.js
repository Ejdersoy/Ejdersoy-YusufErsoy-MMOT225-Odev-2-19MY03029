/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
  @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
   
        <View style={styles.body}>
             <Text style={styles.header}>Kayıt Ekranı</Text>
             <TextInput style={styles.textinput} placeholder="Adınız" placeholderTextColor="#fafafa" underlineColorAndroid={'transparent'} />
             <TextInput style={styles.textinput} placeholder="Soyadınız" placeholderTextColor="#fafafa" underlineColorAndroid={'transparent'} />
             <TextInput style={styles.textinput} placeholder="Yaşınız" placeholderTextColor="#fafafa" underlineColorAndroid={'transparent'} />
             <TextInput style={styles.textinput} placeholder="E-Posta-Adresiniz" placeholderTextColor="#fafafa" underlineColorAndroid={'transparent'} />
             <TextInput style={styles.textinput} placeholder="Şifre" secureTextEntry={true} placeholderTextColor="#fafafa" underlineColorAndroid={'transparent'} />
             <TextInput style={styles.textinput} placeholder="Şifre Tekrar" secureTextEntry={true}  placeholderTextColor="#fafafa" underlineColorAndroid={'transparent'} />
             
             <TouchableOpacity style={styles.button}>
             <Text style={styles.btntext}>Kayıt Ol</Text>
             </TouchableOpacity>
        </View>
     
    </>
  );
};

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: '#36485f',
     justifyContent: 'center',
  },
 body: {
    backgroundColor: '#36485f',
    flex:1,
    justifyContent: 'center',
    paddingLeft:60,
    paddingRight:60,
  },
  header:{
    fontSize:24,
    paddingBottom:10,
    color:'#fafafa',
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1
  },
  textinput:{
    alignSelf:'stretch',
    height:40,
    marginBottom: 30,
    color:'#fafafa',
    borderBottomColor:'#f8f8f8',
    borderBottomWidth:1,
  },
  button:{
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext:{
    color: '#fff',
    fontWeight: 'bold',
  }

});

export default App;
