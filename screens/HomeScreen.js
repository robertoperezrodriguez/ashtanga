import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {WebBrowser} from 'expo';

import {MonoText} from '../components/StyledText';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={{flex: 1}}>
                // Header
                <View style={styles.header}>
                    <Image source={require('../assets/images/search_bar.png')} resizeMode="cover"/>
                </View>
                // Images list
                <ScrollView>
                    // About Ashtanga
                    <View style={styles.image_separator}/>
                    <View style={styles.image_container}>
                        <Image source={require('../assets/images/about_ashtanga.png')} resizeMode="cover"/>
                    </View>
                    <View style={styles.image_separator}/>
                    // Inspirations
                    <View style={styles.image_container}>
                        <Image source={require('../assets/images/inspirations.png')} resizeMode="cover"/>
                    </View>
                    <View style={styles.image_separator}/>
                    // Asanas
                    <View style={styles.image_container}>
                        <Image source={require('../assets/images/asanas.png')} resizeMode="cover"/>
                    </View>
                    <View style={styles.image_separator}/>
                    // Lifestyle
                    <View style={styles.image_container}>
                        <Image source={require('../assets/images/lifestyle.png')} resizeMode="cover"/>
                    </View>
                </ScrollView>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    header: {
        height: 65,
        backgroundColor: 'red',
    },
    image_list: {
        flex: 1,
        height: 500,
        alignItems: 'center',
    },
    image_container: {
        flex: 1,
        backgroundColor: 'green',
        height: 113,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    image_separator: {
        flex: 1,
        height: 4,
    },
});
