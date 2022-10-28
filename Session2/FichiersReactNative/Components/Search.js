import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <TextInput placeholder='Titre du film' style={styles.textinput}/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    marginTop:20
  },

  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

