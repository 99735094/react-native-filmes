import React, { useState,  useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
} from 'react-native';



const Home = ({navigation}) => {


  return (
    <View >
      <TouchableOpacity 
      style={{
        marginVertical:'50%', 
        justifyContent: 'center', 
        alignItems: 'center'

      }}
      onPress={() => navigation.navigate('Details')}>
        <Text style={styles.title}>Filmes </Text>
      </TouchableOpacity>
   </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize:50,
    paddingVertical:50,
    //marginStart:'30%',
    fontWeight:'bold',
    fontFamily:'HachiMaruPop-Regular'
  }
})