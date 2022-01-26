import React from "react";
import {Text,View,StyleSheet} from 'react-native';
import ListApp from "./list";

const Home = ()=>{

    return(
        <View>
          <Text style={styels.size}>
            <h1>Top Ten Series</h1>
          </Text>
            <ListApp/>
          </View>
    );

}

const styels = StyleSheet.create({
        size:{
            fontSize:20,
            color:'white',
            textAlign:'center',
            backgroundColor:'red'
        }
})

export default Home;