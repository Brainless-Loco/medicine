import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../components/Dashboard/Tabs/Home/Home';
import Activities from '../../components/Dashboard/Tabs/Activities/Activities';

import AllBusinesses from '../../components/Dashboard/Tabs/AllBusinesses/AllBusinesses';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import Calculator from '../../components/Dashboard/Tabs/Calculator/Calculator';

const Tab = createBottomTabNavigator();

export default function Dashboard({ route, navigation }) {

  const focusedIcons = [
    <Entypo name="home" size={24} color="#cedaed" />,
    <FontAwesome6 name="sheet-plastic" size={24} color="#cedaed" />,
    <MaterialIcons name="hub" size={24} color="#cedaed" />,
    <MaterialIcons name="calculate" size={24} color="#cedaed" />
  ]

  const unFocusedIcons = [
    <Entypo name="home" size={24} color="#0044ba" />,
    <FontAwesome6 name="sheet-plastic" size={24} color="#0044ba"/>,
    <MaterialIcons name="hub" size={24} color="#0044ba" />,
    <MaterialIcons name="calculate" size={24} color="#0044ba"/>
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
      name: "All Businesses", component: AllBusinesses,
      focusedIcon: focusedIcons[2], unFocusedIcon: unFocusedIcons[2]
    },
    {
      name: "Dose Calculator", component: Calculator,
      focusedIcon: focusedIcons[3], unFocusedIcon: unFocusedIcons[3]
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