import React from 'react';
import {Button, Alert} from 'react-native';

const Buttons=()=>{
    const alertName = ()=>{
        Alert.alert('done')
    }
    
    return(
        <Button 
         title='Press Me'
         onPress={()=>alertName()}
        />
    )
}

export default Buttons;