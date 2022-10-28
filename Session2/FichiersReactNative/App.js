import React from 'react'
import Search from './Components/Search' //Pas utilisé ici mais on peut le laisser la 
import FilmItem from './Components/FilmItem'
import { View, StyleSheet } from 'react-native'

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.mainContainer}>
        <FilmItem/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})

