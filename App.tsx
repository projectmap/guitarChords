/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
<script src="http://localhost:8097"></script>;
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {StackNavigation} from './navigations';
import {NavigationContainer} from '@react-navigation/native';
function App(): React.JSX.Element {
  return <StackNavigation />;
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

export default App;
