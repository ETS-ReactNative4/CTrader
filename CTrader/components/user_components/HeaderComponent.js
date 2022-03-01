import React, {useContext, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StatusBar} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIconsIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './UserStyleComponent';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';
const HeaderComponent = ({Navigation, ScreenName}) => {
  const {user} = useContext(AuthContext);
  const [projects, setProjects] = useState([]);

  const d = new Date();
  const date = d.getDate() + '/' + d.getDay() + '/' + d.getFullYear();

  useEffect(() => {
    firestore()
      .collection('cart')
      .where('userId', '==', user.uid)
      .where('date', '==', date)
      .onSnapshot(querySnapshot => {
        const projects = [];

        querySnapshot.forEach(documentSnapshot => {
          projects.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProjects(projects);
      });
  }, []);

  return (
    <View style={Styles.Header}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <TouchableOpacity onPress={() => Navigation.openDrawer()}>
        <FontAwesomeIcons name="bars" size={25} color={'#000'} />
      </TouchableOpacity>
      <View style={Styles.HeaderSearch}>
        <Text style={Styles.TopicText}>{ScreenName}</Text>
      </View>
      <TouchableOpacity onPress={() => Navigation.navigate('CartScreen')}>
        <MaterialCommunityIconsIcons
          name="cart-outline"
          size={25}
          color={'#000'}
        />
        {projects.length != 0 ? (
          <View style={Styles.CountBack1}>
            <Text style={Styles.CountText}>{projects.length}</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
