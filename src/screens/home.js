import React from "react";
import {Text,View,StyleSheet} from 'react-native';
import Buttons from "./button";
import ListApp from "./list";

const Home = ()=>{

    return(
        <View>
          <Text style={styels.size}>
            <h1>Home Component</h1>
          </Text>
            <Buttons/>
            <ListApp/>
          </View>
    );

}

const styels = StyleSheet.create({
        size:{
            fontSize:20,
            color:'blue'
        }
})

export default Home;