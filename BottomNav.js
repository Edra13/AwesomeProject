import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mahasiswa from './Mahasiswa';
import Profile from './App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import WebView from 'react-native-webview';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function HomeScreen() {
  return (
      <Profile />
  );
}

function DataMahasiswaScreen() {
  return (
    <Mahasiswa/>
  );
}
function WebScreen() {
  return (
    <WebView
    source={{ uri: 'https://github.com/Edra13' }}
  />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={HomeScreen} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={20} color={color} />
          ),
        }} 
        />
        <Tab.Screen name="Data Mahasiswa" component={DataMahasiswaScreen}  options={{ 
          headerShown: true, 
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUserGraduate} size={20} color={color} />
          ),
        }}
        />
        <Tab.Screen name="GitHub" component={WebScreen}  options={{ 
          headerShown: true, 
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faGithub} size={20} color={color} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}