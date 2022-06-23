import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const List = ({name}) => {
  return (
      <View style={styles.container1}>
          <View style={styles.container}>
            <Text style={styles.title}>{name.id}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{name.title}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{name.body}</Text>
          </View>                         
      </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop:20,
    backgroundColor:'blue',
    padding:10,
    borderRadius:5,
  },
  container1: {
     
     paddingHorizontal: 20,
  },
  title: {
    color:'#fff',
    fontSize:20,
    fontFamily: 'Anton-Regular',
  }
});