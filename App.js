/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button, Linking
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-video';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
       <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>
<Text  style={styles.sectionTitle}>Yusuf Ersoy</Text>
          <Video   source={{uri: "http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-backdrops/552.webm"}}   // Can be a URL or a local file.

       repeat={true}
       resizeMode='cover'
       style={styles.backgroundVideo} />

          <Image
            source={{uri:'https://cdn.communitydragon.org/latest/champion/graves/tile'}}
            style={{width: 150, height: 150, borderRadius: 400/2,position: 'absolute',top: 200,alignSelf:'center'}} />
              <Text  style={{color:Colors.white}}>
              Merhebalar , {"\n"}{"\n"}

              Ben Yusuf. 21 Yaşındayım ve Gebzede STFA Anadolu Meslek Lisesinde Okudum.4 Yıldır UI&UX Developer Olarak Kocaeli Bilişim Vadisinde Çalışıyorum.{"\n"}{"\n"}

              4 yılın 2 yılı Javascript üzerine çalıştım . real time client based table ürettim.daha sonra arayüz geliştirme kısmında çalıştım bootstrap ve jquery ile. {"\n"}{"\n"}

              2 Yılı da Mobil Uygulama Üzerine Ionic ve Flutter ile Çalıştım. {"\n"}{"\n"}

              Mobil Uygulama Geliştirme Konusunda Ionic&Angular ile başladım ve google play store üzerinde bir uygulama yayınladım. {"\n"}{"\n"}

              Daha sonra kullanıcılar arayüz ve performans  kısmında yetersiz kaldığını belirtince bence alternatif frameworkler aradım.{"\n"}{"\n"}

              bence react arayüz kısmında yetersiz kalıyor.Flutter ile çalışmayı tercih ediyorum. {"\n"}{"\n"}

              Flutter ile geliştirdiğim uygulamalardan birtanesini aşağıda bulabilirsiniz. şuanda 19 bin indirmem var.{"\n"}{"\n"}
              <Button title="LoL Rehber Google Play Store" onPress={ ()=>{ Linking.openURL('https://play.google.com/store/apps/details?id=com.lolguide.legends')}} />


              </Text>
          </View>


        </ScrollView>
         </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.black,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
   backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width:'100%',
    height:300,
    right: 0,

  },
  body: {
    backgroundColor: Colors.black,
    height:1100,
    justifyContent:'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    position: 'absolute',
    top:20,
    left:20,
    fontSize: 30,
    fontWeight: '600',
    color: Colors.white,
    zIndex: 5,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
