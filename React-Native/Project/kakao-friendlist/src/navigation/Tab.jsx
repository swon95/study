import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Mail, Meet, Settings } from '../components/TabScreen';
import { Friend } from '../components/Friend';
import { Talk } from '../components/Talk';
import { HashTag } from '../components/HashTag';
import { MyPage } from '../components/Mypage';
import { Ionicons, Fontisto } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
        }}>
            <Tab.Screen 
                name='Friend' 
                component={Friend} 
                options={{ 
                    // tabBarLabel: "Home",
                    tabBarIcon: ({ focused, size }) => (
                    <Ionicons name={focused ? "person" : "person-outline"} size={size} color="black"/>
                    ), 
                    headerShown: false
                    }} />
            <Tab.Screen 
                name='Talk' 
                component={Talk} 
                options={{ 
                    tabBarIcon: ({ focused, size }) => (
                    <Ionicons name={focused ? "chatbubble" : "chatbubble-outline"} size={size} color="black"/>
                    ), headerShown: false }} />
            <Tab.Screen 
                name='HashTag' 
                component={HashTag} 
                options={{ 
                    tabBarIcon: ({ focused, size }) => (
                    <Ionicons name={focused ? "pricetag" : "pricetag-outline"} size={size} color="black"/>
                    ), headerShown: false}} />
            <Tab.Screen 
                name='MyPage' 
                component={MyPage} 
                options={{ 
                    tabBarIcon: ({ focused, size }) => (
                    <Ionicons name={focused ? "ellipsis-horizontal-circle-sharp" : "ellipsis-horizontal-circle"} size={size} color="black"/>
                    ), headerShown: false}} />
        </Tab.Navigator>
    );
};

export default TabBar;