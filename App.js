import React, { Component } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import ReadMore from 'react-native-read-more-text';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      
    }
  }
  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything?q=noida&apiKey=8e1c1bde2e2f479ba5589586812bd075')
      .then(response => {
        console.warn(response.data);
        this.setState({ articles: response.data.articles })
      })
      .catch(function (error) {
        console.warn(response)
      });
  }

  readMore = handlePress => {
    return (
      <Text onPress={handlePress} style={{color: 'blue', marginTop: 5}}>
        View more
      </Text>
    );
  };

  showLess = handlePress => {
    return (
      <Text onPress={handlePress} style={{color: 'blue', marginTop: 5}}>
        View less
      </Text>
    );
  };

  

 
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, fontStyle: 'italic', color: '#3371FF' }}>Shembe</Text>
        </View>
        <View style={styles.vStyle}>
          <Text style={{ fontSize: 40 }}>Home</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'flex-start' }}>
          <Text style={{ margin: 20, fontSize: 18, fontStyle: 'normal' }}>Search</Text>
          <TextInput style={styles.tStyle}>Noida</TextInput>
          <TouchableOpacity style={styles.b1Style}>
          <Text style={{ color: 'black', fontSize: 20 }}>Press</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.articles}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.nStyle}>
                {
                  this.state.articles[index].urlToImage != null ? <Image style={styles.imgStyle} Image source={{ uri: this.state.articles[index].urlToImage }} /> : null
                }
                <Text style={styles.mStyle}>Title:{this.state.articles[index].title}</Text>
                <ReadMore
                    numberOfLines={2}
                    enderTruncatedFooter={this.readMore}
                    renderRevealedFooter={this.showLess}>
                    <Text style={styles.cardText}> {this.state.articles[index].description} </Text>
                  </ReadMore>
                
              </View>
            )
          }}
        />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  vStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 20,
    marginRight: 30
  },
  tStyle: {
    margin: 10,
    flex: 1,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 62.5,
    paddingEnd: 20
  },
  mStyle: {
    fontWeight: 'bold',
    flex: 1,
    marginTop: 30,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'white'

  },
  nStyle: {
    padding: 10,
    marginLeft: 20,
    borderWidth: 20,
    borderColor: '#00cc00',
    margin: 20
  },
  bStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 130,
    backgroundColor:'#3399ff',
    borderRadius: 30,
    marginRight: 30
  },
  imgStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'white'
  },
  b1Style:{
    backgroundColor:'white',
    marginTop:20,
    marginRight:20,
    borderRadius:50,
    marginBottom:20,
  },
}); 