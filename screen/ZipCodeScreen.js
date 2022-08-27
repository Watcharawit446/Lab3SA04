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
             <Text>{place}</Text>
            <Text>{code}</Text>
         </View>
    </TouchableHighlight>
    )   
    const _keyExtractor = item => item.code
    export default function ZipCodeScreen(){
        const navigation = useNavigation()
        return (
        <View>
        <FlatList
        data={availableZipItems}
        keyExtractor={_keyExtractor}
        renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        <StatusBar style="auto" />
        </View>
        );
       
       }

       const styles = StyleSheet.create({
        ZipItem: {
            backgroundColor: '#00ACC1',
            alignSelf: 'stretch',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around', 
        },
        zipPlace: {
            flex: 1,
        },
        zipcode: {
            flex: 1,
        }
       })