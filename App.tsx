import React from 'react';
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Button, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevateCards from './components/ElevateCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () =>{
  return(
  <SafeAreaProvider>
    <SafeAreaView>
      <ScrollView>
     <FlatCards></FlatCards>
     <ElevateCards></ElevateCards>
      <FancyCards></FancyCards>
      <ActionCard/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}


export default App