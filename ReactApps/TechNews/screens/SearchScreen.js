
import React, {useEffect, useState} from "react";
import {View, Text,StyleSheet, FlatList, TouchableWithoutFeedback,Keyboard} from "react-native";
import SearchBar from "../components/SearchBar";
import axios from 'axios';
import Article from "../components/Article";


const SearchScreen = () => {
    const [searchText, setSearchText] = useState();
    const [articles, setArticles] = useState([]);
    const searchArticles=()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=03ebf07ff6334869b28cea6136690276', {
            params:{
                category: "technology",
                q: searchText
            }
        })
            .then(function (response) {
                // handle success
                console.log(response.data.articles);
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
        });
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{
            
            Keyboard.dismiss(); 
            
          }}>
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles}/>
            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                        url={item.url}
                    />}
                keyExtractor = {(item) => item.title}
            />
        </View>
        </TouchableWithoutFeedback>
    );
}
export default SearchScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    }
})
