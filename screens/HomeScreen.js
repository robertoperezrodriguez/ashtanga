import React from 'react';
import {
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {Dimensions} from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var image_original_height = 226;
var image_original_width = 640;
var reduction_ratio = width / image_original_width;
var image_reducted_height = reduction_ratio * image_original_height;

var header_original_height = 130;
var header_original_width = 640;
var reduction_ratio = width / header_original_width;
var header_reducted_height = reduction_ratio * header_original_height;

console.log("image_original_width: " + image_original_width);
console.log("screen width: " + width);
console.log("reduction ratio:" + reduction_ratio);
console.log("image original_height: " + image_original_height);
console.log("image reduced height: " + image_reducted_height);
console.log("header_reducted_height: " + header_reducted_height)


import {WebBrowser} from 'expo';

import {MonoText} from '../components/StyledText';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <ImageBackground style={styles.image} source={require('../assets/images/search_background.png')} resizeMode={Image.resizeMode.contain}>
                    </ImageBackground>
                </View>
                <View style={styles.image_separator}/>
                <View style={styles.image_container}>
                    <ImageBackground style={styles.image} source={require('../assets/images/asthanga.png')}
                           resizeMode={Image.resizeMode.contain}>
                        <View style={styles.text_over_image_container}>
                            <Text style={styles.text_over_image}>Sobre Ashtanga</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.image_separator}/>
                <View style={styles.image_container}>
                    <ImageBackground style={styles.image} source={require('../assets/images/inspirations.png')}
                                     resizeMode={Image.resizeMode.contain}>
                        <View style={styles.text_over_image_container}>
                            <Text style={styles.text_over_image}>Inspiraciones</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.image_separator}/>
                <View style={styles.image_container}>
                    <ImageBackground style={styles.image} source={require('../assets/images/asanas.png')}
                                     resizeMode={Image.resizeMode.contain}>
                        <View style={styles.text_over_image_container}>
                            <Text style={styles.text_over_image}>Asanas</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.image_separator}/>
                <View style={styles.image_container}>
                    <ImageBackground style={styles.image} source={require('../assets/images/lifestyle.png')}
                                     resizeMode={Image.resizeMode.contain}>
                        <View style={styles.text_over_image_container}>
                            <Text style={styles.text_over_image}>Estilo de vida</Text>
                        </View>
                    </ImageBackground>
                </View>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    header: {
        width: width,
        height: header_reducted_height,
    },
    image_list: {
        height: 700,
        alignItems: 'center',
    },
    image_container: {
        backgroundColor: 'red',
        width: width,
        height: image_reducted_height,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    image_separator: {
        width: width,
        height: 4,
    },
    text_over_image_container: {
        position: 'absolute',
        bottom: 13,
        left: 19,
    },
    text_over_image: {
        fontSize: 22,
        fontFamily: 'Avenir-Medium',
        color: 'white',
    }
});
