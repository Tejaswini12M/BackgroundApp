import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

constructor(props){
  super(props);
   this.state ={
     randomColor: null
   }
}

getRandomColor = () => {
return(
  "rgb(" +
  Math.floor(Math.random()*256) +
  "," +
  Math.floor(Math.random()*256) +
  "," +
  Math.floor(Math.random()*256) +
  ")" 
);
}

  buttonPress = () => {
    // alert('I am pressed!');
    this.setState({
      randomColor: this.getRandomColor()
    })
  }
  render(){
    return (
      <View style={[styles.container,{backgroundColor:this.state.randomColor}]}>
        <TouchableOpacity onPress={
          this.buttonPress
        }> 
        <Text style={styles.text}>Teju</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    height: 10,
    width:30,
    backgroundColor:'#000000',
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: '#ffffff',
    
  }
});
