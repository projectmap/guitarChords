import React, { useState } from 'react'
import { Button, Image, ImageBackground, Modal, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({navigation}) {
    const [showTipsModal, setShowTipsModal] = useState(false);
    const navigateToChordsPage=()=>{
        console.log('navigation')
        navigation.navigate('Chords Shapes')
    }
    console.log('home')
  return (
    <SafeAreaView  style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.contentContainer}>
        <Modal visible={showTipsModal}>
          <Image
            style={styles.tipsImage}
            source={require('./assets/images/tips.png')}
          />
        
          <Button
            onPress={() => setShowTipsModal(false)}
            title="Got it,Thanks!"></Button>
        </Modal>
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Text  style={styles.projectTitle}>Diachords</Text>
          </View>
          <View style={styles.navContainer}>
            <Text onPress={navigateToChordsPage} style={styles.navtext}>View chords</Text>
            <Text style={styles.navtext}>About</Text>
            <Text onPress={() => {setShowTipsModal(true)
            console.log('modal opened')
            }} style={styles.navtext}>
              Tips
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.overlay}></View>
          <ImageBackground
            source={require('./assets/images/hero.jpg')}
            style={styles.heroImg}
            resizeMode="cover">
            <View style={styles.buttonNtext}>
              <Text style={styles.advertiseText}>
                Find hundreds of chords and chord shapes on guitar...
              </Text>
              <View style={styles.buttonContainer}>
                <Button title="explore chords"></Button>
              </View>

              <Text style={styles.advertiseText2}>
                Learning new chords doesn't have to complicated
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    tipsImage: {
      borderRadius: 16,
      marginBottom: 'auto',
    },
    tipsHeading: {
      fontSize: 32,
      color: '#111827',
    },
    tipsSubHeading: {
      fontSize: 24,
      color: '#000',
    },
    numberingHeading: {
      fontSize: 16,
      color: '#000',
    },
    buttonNtext: {
      zIndex: 10,
    },
    buttonContainer: {
      width: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 32,
    },
    advertiseText: {
      color: '#1BD79E',
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
    },
    advertiseText2: {
      marginTop: 72,
      color: '#1BD79E',
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
    },
    overlay: {
      backgroundColor: '#000000',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 9,
      opacity: 0.5,
    },
    projectTitle: {
      color: '#1BD79E',
      borderColor: 'red',
      borderWidth: 2,
      textTransform: 'uppercase',
      fontWeight: '700',
    },
    headerTextContainer: {
      alignSelf: 'flex-start',
      borderColor: 'green',
      borderWidth: 2,
      display: 'flex',
      flexDirection: 'row',
    },
    header: {
      borderWidth: 2,
      width: '100%',
      height: 32,
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'row',
    },
    navtext: {
      color: '#ffff',
      fontSize: 16,
      fontWeight: '700',
      marginLeft: 16,
      textTransform: 'capitalize',
    },
    navContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 'auto',
      marginRight: 16,
    },
    container: {
      borderWidth: 2,
      borderColor: 'green',
      height: '100%',
      position: 'relative',
    },
    heroImg: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImageContainer: {
      borderWidth: 2,
      borderColor: 'red',
    },
    contentContainer: {},
  });