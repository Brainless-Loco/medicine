import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../components/Dashboard/Tabs/Home/Home';
import Activities from '../../components/Dashboard/Tabs/Activities/Activities';
import AboutUs from '../../components/Dashboard/Tabs/AboutUs/AboutUs';
import FontAwesome  from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Dashboard({ route, navigation }) {

  const focusedIcons = [
    <Ionicons name="home-outline" size={24} color="black" />,
    <Ionicons name="newspaper-outline" size={24} color="black" />,
    <AntDesign name="infocirlceo" size={24} color="black" />
  ]

  const unFocusedIcons = [
    <Ionicons name="home-sharp" size={24} color="#0044ba" />,
    <Ionicons name="newspaper-sharp" size={24} color="#0044ba" />,
    <AntDesign name="infocirlce" size={24} color="#0044ba" />
  ]

  const tabComponents = [
    {
      name: "Home", component: Home,
      focusedIcon: focusedIcons[0], unFocusedIcon: unFocusedIcons[0]
    },
    {
      name: "Activities", component: Activities,
      focusedIcon: focusedIcons[1], unFocusedIcon: unFocusedIcons[1]
    },
    {
      name: "About Us", component: AboutUs,
      focusedIcon: focusedIcons[2], unFocusedIcon: unFocusedIcons[2]
    }
  ]

  return (
    <Tab.Navigator >
      {
        tabComponents.map(({ name, component, focusedIcon, unFocusedIcon },index) => {
          return (
            <Tab.Screen key={name} name={name} component={component} options={{ headerShown: false, tabBarIcon: ({ focused }) => (focused ? unFocusedIcon : focusedIcon) }} />
          )
        })
      }
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});