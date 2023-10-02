import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../pages/Cart/Cart';
import Favorites from '../pages/Favorites/Favorites';
import { cartIcon, homeIcon, likeIcon } from '@Assets';
import HomeStackScreen from './homeStackScreen/HomeStackScreen';

const Tab = createBottomTabNavigator();

function TabBar() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomeStack'>
            <Tab.Screen options={{
                tabBarIcon: () => {
                    return <Image source={homeIcon} />
                },
            }} name="HomeStack" component={HomeStackScreen} />
            <Tab.Screen options={{
                tabBarIcon: () => {
                    return <Image source={cartIcon} />
                },
            }} name="Cart" component={Cart} />
            <Tab.Screen options={{
                tabBarIcon: () => {
                    return <Image source={likeIcon} />
                },
            }} name="Favorites" component={Favorites} />
        </Tab.Navigator>
    );
}

export default TabBar;