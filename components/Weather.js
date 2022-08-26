import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, View } from 'react-native'
import { StyleSheet } from 'react-native-web'
import Forecast from './Forcast'



export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '',
        description: '',
        
        })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
        main: json.weather[0].main,
        description: json.weather[0].description,
        temp: json.main.temp
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
        }, [props.zipCode])
    

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
