import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../components/Dashboard/Tabs/Home/Home';
import Activities from '../../components/Dashboard/Tabs/Activities/Activities';
import AboutUs from '../../components/Dashboard/Tabs/AboutUs/AboutUs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function Dashboard({ route, navigation }) {

  const tabComponents = [
    {
      name: "Home", component: Home
    },
    {
      name: "Activities", component: Activities
    },
    {
      name: "About Us", component: AboutUs
    }
  ]

  return (
    <Tab.Navigator >
      {
        tabComponents.map(({ name, component },index) => {
          return (
            <Tab.Screen key={name} name={name} component={component} options={{ headerShown: false}} />
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