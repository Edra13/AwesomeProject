import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import WebView from 'react-native-webview';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Createdata from './Createdata';
import Listdata from './Listdata';


function HomeScreen() {
  return (
      <Createdata/>
  );
}

function DataMahasiswaScreen() {
  return (
    <Listdata/>
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
        <Tab.Screen name="Create Data" component={HomeScreen} 
        options={{ 
          headerShown: true, 
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={20} color={color} />
          ),
        }} 
        />
        <Tab.Screen name="Mahasiswa" component={DataMahasiswaScreen}  options={{ 
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