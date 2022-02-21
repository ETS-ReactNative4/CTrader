import React, {useContext, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Styles from './UserStyleComponent';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const DrawerContentComponent = props => {
  const {logout, user} = useContext(AuthContext);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [imagePath, setImagePath] = useState('');

  firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        setFullName(userdata.fullName);
        setImagePath(userdata.profileImage);
        setEmail(userdata.email);
      }
    });

  return (
    <View style={Styles.Container}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          style={Styles.CrossIcon}>
          <EntypoIcons
            name="cross"
            size={25}
            color={'rgb(0,158,96)'}
            style={Styles.CrossIconContain}
          />
        </TouchableOpacity>
        <View style={Styles.DrawerHeader}>
          {!imagePath ? (
            <Image
              style={Styles.DrawerImg}
              source={require('../../assets/user/userTemp.jpg')}
            />
          ) : (
            <Image style={Styles.DrawerImg} source={{uri: imagePath}} />
          )}
          <View style={Styles.DrawerTextContain}>
            <Text style={Styles.DrawerText3}>{fullName}</Text>
            <Text style={Styles.DrawerText1}>{email}</Text>
          </View>
        </View>
        <View style={Styles.DrawerTitle}>
          <Text style={Styles.DrawerText2}>Menu</Text>
        </View>
        <DrawerItem
          icon={() => <Ionicons name="md-home" color={'#5e5e5e'} size={25} />}
          label={() => (
            <View style={Styles.DrawerLabel}>
              <Text style={Styles.DrawerText}>Home</Text>
              <Ionicons name="chevron-forward" color={'#5e5e5e'} size={25} />
            </View>
          )}
          onPress={() => {
            props.navigation.navigate('HomeScreen');
          }}
        />
        <DrawerItem
          icon={() => (
            <FontistoIcons name="person" color={'#5e5e5e'} size={25} />
          )}
          label={() => (
            <View style={Styles.DrawerLabel}>
              <Text style={Styles.DrawerText}>Profile</Text>
              <Ionicons name="chevron-forward" color={'#5e5e5e'} size={25} />
            </View>
          )}
          onPress={() => {
            props.navigation.navigate('ProfileScreen');
          }}
        />
        <DrawerItem
          icon={() => <Ionicons name="md-car" color={'#5e5e5e'} size={25} />}
          label={() => (
            <View style={Styles.DrawerLabel}>
              <Text style={Styles.DrawerText}>Vehicle</Text>
              <Ionicons name="chevron-forward" color={'#5e5e5e'} size={25} />
            </View>
          )}
          onPress={() => {
            props.navigation.navigate('VehicleScreen');
          }}
        />
        <DrawerItem
          icon={() => (
            <Ionicons name="md-scan-sharp" color={'#5e5e5e'} size={25} />
          )}
          label={() => (
            <View style={Styles.DrawerLabel}>
              <Text style={Styles.DrawerText}>Scan Now</Text>
              <Ionicons name="chevron-forward" color={'#5e5e5e'} size={25} />
            </View>
          )}
          onPress={() => {
            props.navigation.navigate('ScanScreen');
          }}
        />
      </DrawerContentScrollView>
      <View style={Styles.DrawerFooter}>
        <DrawerItem
          icon={() => (
            <MaterialIcons name="logout" color={'#5e5e5e'} size={25} />
          )}
          label="Sign Out"
          labelStyle={Styles.DrawerText}
          onPress={() => logout()}
        />
      </View>
    </View>
  );
};

export default DrawerContentComponent;
