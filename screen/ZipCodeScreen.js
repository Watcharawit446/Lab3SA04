import { StyleSheet } from "react-native-web";
import React from "react";
import { FlatList,View, Text, TouchableHighlight, ImageBackground } from "react-native";
import {useNavigation} from "@react-navigation/native";
import { StatusBar } from "react-native";
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
         <View style={styles.ZipItem}>
             <Text style={styles.Text}>{place}</Text>
            <Text style={styles.Text}>{code}</Text>
         </View>
    </TouchableHighlight>
    )   
    const _keyExtractor = item => item.code
    export default function ZipCodeScreen(){
        const navigation = useNavigation()
        return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        
        <FlatList
        data={availableZipItems}
        keyExtractor={_keyExtractor}
        renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        <StatusBar style="auto" />
        </ImageBackground>
        );
       
       }

       const styles = StyleSheet.create({
        backdrop: {
            width: '100%',
            height: '100%',
        },
        ZipItem: {
            backgroundColor: '#f36c60',
            alignSelf: 'stretch',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between', 
            paddingRight: 50,
            paddingLeft: 50,
            paddingTop: 20,
            paddingBottom: 20
        },
        zipPlace: {
            flex: 1,
        },
        zipcode: {
            flex: 1,
        },
        Text: {
            fontSize: 19,
            color: 'white',
            fontWeight: "300"
        }
       })