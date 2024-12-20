import React from 'react'
import Datamahasiswa from './data/mahasiswa.json'
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMars, faUserGraduate, faVenus } from '@fortawesome/free-solid-svg-icons'

const Mahasiswa = () => {
 return (
    <FlatList
    data={Datamahasiswa}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('google.navigation:q=' + item.latitude + ',' + item.longitude)} >
        <View style={styles.card}>
          <View style={styles.avatar}>
            <FontAwesomeIcon icon={faUserGraduate} size={40} color={item.gender == 'male' ? '#5485ba' : '#ab6d94'} />
          </View>
          <View>
            <Text style={styles.cardtitle}>{item.first_name} {item.last_name}</Text>

            <FontAwesomeIcon 
            icon={item.gender == 'male' ? faMars : faVenus}
            color={item.gender == 'male' ? '#5485ba' : '#ab6d94'}
            size={14}
            />

            <Text>Kelas {item.class}</Text>
            {/* <Text>{item.email}</Text> */}
            <Text>{item.latitude}, {item.longitude}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )}
  />
  
 )
}

export default Mahasiswa

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      borderRadius: 100,
      width: 70,
      padding: 5,  
      justifyContent: 'center',
    },
    cardtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#8a362b',
    },
    card: {
      flexDirection: 'row',
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })
   