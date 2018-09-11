import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Inicio',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/images/home_active.png')}
        />
    ),
};

const FavouritesStack = createStackNavigator({
    Home: HomeScreen,
});

FavouritesStack.navigationOptions = {
    tabBarLabel: 'Favoritos',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/images/tapbar_favoritos.png')}
        />
    ),
};


const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'My settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};


const MusicStack = createStackNavigator({
    Settings: SettingsScreen,
});

MusicStack.navigationOptions = {
    tabBarLabel: 'Música',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/images/icon_music.png')}
        />
    ),
};

const ProfileStack = createStackNavigator({
    Settings: SettingsScreen,
});

ProfileStack.navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({ focused }) => (
        <Image
            source={require('../assets/images/icon_ios_user.png')}
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    MusicStack,
    FavouritesStack,
    ProfileStack,
    // LinksStack,
    // SettingsStack,
});
