import React, { useState } from 'react'
import { Text, ImageBackground, View } from 'react-native'
import { StyleSheet } from 'react-native-web'
import Forecast from './Forcast'



export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        
        })

    return (
        <View >
        
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
         <Text style={styles.Text}> Zip Code</Text>
        <Text style={styles.Text}>{props.zipCode}</Text>
        <Forecast {...forecastInfo} />
        </ImageBackground>
    
         </View>

    )
}

const styles = StyleSheet.create({

    
 backdrop: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    height: '100%'

 },
 Text: { 
    fontSize: 30,
    color: 'white'
}

});
