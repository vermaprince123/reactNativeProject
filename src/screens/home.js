import React from "react";
import {Text, StyleSheet, TextInput} from 'react-native';

const Home = ()=>{

    return(
        <Text style={styels.size}>
            <h1>Home Component ----</h1>
            <p>it is para</p>
            <TextInput/>
        </Text>
    );

}

const styels = StyleSheet.create({
        size:{
            fontSize:20,
            color:'blue'
        }
})

export default Home;