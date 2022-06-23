import React, { useState,  useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList ,
  Button
} from 'react-native';

import List from '../../Services/List'


const Home = ({navigation}) => {

const [ api,  setApi ]= useState('');  

function buscar(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setApi(json))
}
useEffect(()=>{
  
  //buscar();
  //console.log(api);
},[]);

  return (
    <View >
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={styles.title}>IR PARA DETAILS </Text>
      </TouchableOpacity>
      <Button 
      title='API'
      onPress={buscar}
      
      />

      <FlatList
        data={api}
        keyExtractor={(item) => (item.id)}
        renderItem={({ item }) => <List name = {item}/>}
        
      />
      
  
   </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize:20,
    paddingVertical:20,
    marginStart:'30%',
    fontFamily:'HachiMaruPop-Regular'
  }
})