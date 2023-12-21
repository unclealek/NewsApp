import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import moment from "moment";
import * as WebBrowser from 'expo-web-browser';

const Article = (props) => {

  const goToSource=()=>{
    WebBrowser.openBrowserAsync(props.url);
  }
  return (
    <Pressable style={styles.container} onPress={goToSource}>
      <Image 
        source={{uri: props.urlToImage}}
        style={{width:350, height:200, borderTopLeftRadius:40, borderTopRightRadius: 40}}
        />
    <View style={{padding:20}}> 
      
      {/* TITLE */}
      <Text style={styles.title}>{props.title}</Text>

      {/* description */}
      <Text style={styles.description} numberOfLines={3}> {props.description} </Text>
      <View style={styles.data}>
        <Text style={styles.heading}>by: <Text style={styles.author}>{props.author}</Text></Text>
        <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY") }</Text>
      </View>

       {/*source*/}
       <View style={{marginTop: 10}}>
       <Text>source: <Text style={styles.source}>{props.sourceName}</Text></Text>
       </View>
    </View>
    </Pressable>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    
    width: "90%",
    alignSelf: "center",
    borderRadius:40,
    shadowOpacity:0.5,
    shadowColor: "#000",
    shadowOffset:{
        height:5,
        width:5
  },
    backgroundColor:"#fff",
    marginTop: 20
},
//   image: {
//     height: "70%",
//     width: "100%"
//   },
  title: {
    fontSize: 18,
    fontWeight: "600"
  },
  description:{
    fontSize:16,
    fontWeight: "400",
    marginTop: 10
  },
  data:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  heading:{


  },
  author:{
    fontWeight:"bold"
  },
  date:{
    fontWeight: "bold",
    color:"#0d1b2a",
    fontSize: 16
  },
  source:{
    color:"#778da9",
    fontWeight:"bold",
    fontSize:10
    
  }


  
});
