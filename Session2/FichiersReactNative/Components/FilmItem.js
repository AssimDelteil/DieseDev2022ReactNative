import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>

        <Image style={styles.image} source={{uri:"https://images.affiches-et-posters.com//albums/3/56170/affiche-film-joker.jpg"}}/>

        <View style={styles.contentContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Titre du film</Text>
            <Text style={styles.voteText}>Vote</Text>
          </View>
          
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.dateText}>Sorti le 00/00/0000</Text>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 200,
    width:'90%',
    flexDirection: 'row',
    backgroundColor:'lightblue'
  },

  image: {
    flex:1,
  },
  contentContainer: {
    flex: 2,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:'grey'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor:'orange'
  },
  voteText: {
    alignSelf:'flex-end',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor:'violet'
  },

  descriptionText: {
    flex: 1,
    backgroundColor:'yellow',
    fontStyle: 'italic',
  },

  dateText: {
    textAlign: 'right',
    fontSize: 14,
    backgroundColor:'red'
  }
})