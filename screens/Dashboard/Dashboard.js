import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Others from '../../components/Dashboard/Tabs/Others/Others'
import Profile from '../../components/Dashboard/Tabs/Profile/Profile'

// import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Dashboard({ route, navigation }) {

  // const focusedIcons=[
  //   <FontAwesome name="user-o" size={24} color="black" />,
  //   <AntDesign name="infocirlceo" size={24} color="black" />
  // ]

  // const unFocusedIcons = [
  //   <FontAwesome name="user" size={24} color="#0044ba" />,
  //   <AntDesign name="infocirlce" size={24} color="#0044ba" />
  // ]

  const tabComponents = [
    {
      name: "Profile", component: Profile
    },
    {
      name: "Others", component: Others
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