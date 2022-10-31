import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import IonIcon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoggedDevices from './src/screens/LoggedDevices';


const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Home'>
        <RootStack.Screen
          name="Home"
          component={TabStackNavigator}
          options={{
            headerShown: false
          }}
        />
        <RootStack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            title: 'Details',
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};


const TabStack = createBottomTabNavigator();

const TabStackNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <IonIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <TabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: 'blue',
            fontSize: 12
          }
        }}
      />
      <TabStack.Screen
        name="ProfileScreen"
        component={DrawerStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <TabStack.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </TabStack.Navigator>
  )
};

const DrawerStack = createDrawerNavigator();

const DrawerStackNavigator = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <DrawerStack.Screen
        name="Devices"
        component={LoggedDevices}
      />
    </DrawerStack.Navigator>
  )
}

export default App;

const styles = StyleSheet.create({});