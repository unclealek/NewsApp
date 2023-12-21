import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, SafeAreaView, FlatList} from "react-native"
import Article from "../components/Article";
import axios from "axios";


const HomeScreen =()=> {
    const [articles, setArticles]= useState([]);
    const getNews =()=> {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=03ebf07ff6334869b28cea6136690276', {
            params:{
                category: "technology",
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
    useEffect(() => {
        getNews();
    },[]);
    return(
        <SafeAreaView stylesheet={styles.container}>
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
                        //url={item.url}
                    />}
                keyExtractor = {(item) => item.title}
            />
            
        </SafeAreaView>
        )
    }

    export default HomeScreen;


    const styles = StyleSheet.create({
        container:{
            // flex: 1,
            // backgroundColor: '#fff',
        }
    })