import React from "react";
import {View, TextInput,StyleSheet,Button} from "react-native";

const SearchBar = (props) => {
    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                style={styles.input}
                value={props.searchText}
                onChangeText={(text)=>props.setSearchText(text)}
                //onSubmitEditing={props.onSubmit}
                />
                <Button onPress={props.onSubmit} title='Search' color="#0d1b2a" />

        </View>
    )
}
export default SearchBar;

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    input:{
        padding: 10,
        backgroundColor: '#fff',
        borderRadius:10,
        color: '#000',
        borderWidth:1,
    }
});