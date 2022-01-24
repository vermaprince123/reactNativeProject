import React from "react";
import {FlatList, Text} from 'react-native';

const ListApp = ()=>{
    const listIntro = [
        {name:'prince', age:24},
        {name:'sonu', age:25},
        {name:'mohan', age:26},
        {name:'ravi', age:21},
        {name:'tina', age:22}
    ];

    const displayItem = (element)=>{
        return <Text>{element.item.name + "  " + element.item.age}</Text>;
    }    
    
    return(
        <FlatList 
          data={listIntro}
          renderItem={displayItem}
        />
    )
}

export default ListApp;