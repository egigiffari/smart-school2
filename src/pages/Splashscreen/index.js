import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar, Text, Image } from 'react-native';

const SplashScreen = () => {

    useEffect(() =>{
        StatusBar.setHidden(true);
    }, []);
    
    return (
        <>
        <View style={{flex : 1, backgroundColor: '#E96F1C', justifyContent:"center"}}>
            <Image style={{width: 150, height:150, alignSelf: "center"}} source={require('../../assets/images/logo.png')} />
        </View>
        </>
    );
}

const Styles = {

}

export default SplashScreen;

