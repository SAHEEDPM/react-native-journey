import React from 'react';
import {Text, SafeAreaView, View, Button, Image, Alert} from 'react-native';

function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
       
        <Image 
        source={{uri :"https://tse2.mm.bing.net/th/id/OIP.wsaZnFT4d9LG1dtEIGbujgHaIt?rs=1&pid=ImgDetMain&o=7&rm=3"}}
        style={{width:200 ,height:200}}
        />
         <Text style={{color:'black'}}>Hello World!...</Text>
        <Button title='YES'
        onPress={() => Alert.alert('oops')}
        color="green"/>
      </View>
    </SafeAreaView>
  );
};
export default App;