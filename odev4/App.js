/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as data from './mydata.json';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function Example() {
  const [mysubdata, setSource] = useState(data.data[0]);
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSource(item)}>
      <Text>{item.il_adi}</Text>
    </TouchableOpacity>
  );
  const renderItem2 = ({item}) => (
    <TouchableOpacity style={styles.item2} onPress={console.log('ok')}>
      <Text>{item.ilce_adi}</Text>
       <Text>Nufüzu : {item.nufus}</Text>
    </TouchableOpacity>
  );
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 15,
    flex: 2,
  },
  bodyy: {
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    padding: 15,
    flex: 2,
  },
  item: {
    backgroundColor: '#f9a825',
    paddingLeft: 20,
    paddingTop: 15,
    height: 50,
    marginVertical: 3,
    marginHorizontal: 16,
  },
  item2: {
    backgroundColor: '#f9a825',
    paddingLeft: 20,
    paddingTop: 15,
    height: 70,
    marginVertical: 3,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  head: {
    textAlign: 'center',
    alignSelf: 'stretch',
    fontSize: 25,
    marginVertical: 10,
  },
});
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.head}>Şehirler</Text>
        <FlatList
          data={data.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.plaka_kodu}
        />
      </View>
      <View style={styles.bodyy}>
        <Text style={styles.head}>{ mysubdata.bolge} Bölgesi {mysubdata.il_adi} { mysubdata.plaka_kodu} </Text>
        <FlatList
          data={mysubdata["ilceler"]}
          renderItem={renderItem2}
          keyExtractor={(item) => item.id}
        />
      </View>
     </>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Example />
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 15,
    flex: 2,
  },
  bodyy: {
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    padding: 15,
    flex: 2,
  },
  item: {
    backgroundColor: '#f9a825',
    paddingLeft: 20,
    paddingTop: 15,
    height: 50,
    marginVertical: 3,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  head: {
    textAlign: 'center',
    alignSelf: 'stretch',
    fontSize: 25,
    marginVertical: 10,
  },
});

export default App;
