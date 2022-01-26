import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const ListApp = ()=>{
    const listIntro = [
        {name:'prince', age:24, year:2000},
        {name:'sonu', age:25, year:2001},
        {name:'mohan', age:26, year:2002},
        {name:'ravi', age:21, year:2003},
        {name:'tina', age:23,year:2004},
        {name:'hery', age:27,year:2004},
        {name:'java', age:28,year:2004},
        {name:'python', age:29,year:2004},
        {name:'js', age:30,year:2004}
    ];

    return(
        <>
            <FlatList
              style={styles.listStyle}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={listIntro}
              keyExtractor={(key)=>{key.name}}
              renderItem={(element)=>{
                return (
                    <View style={styles.viewStyle}>
                       <Text style={styles.textStyle}>Name:-{element.item.name}</Text>
                       <Text style={styles.textStyle}>Age:-{element.item.age}</Text>
                       <Text style={styles.textStyle}>Year:-{element.item.year}</Text>
                    </View>
                )
            }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    listStyle:{
        textAlign:'center',
        backgroundColor:'yellow'
    },
    textStyle:{
        padding:5,
        margin:30,
        fontSize:30,
        width:300,
        height:40
    },
    viewStyle:{
        backgroundColor:'cyan',
        padding:5,
        margin:20
    }
})

export default ListApp;