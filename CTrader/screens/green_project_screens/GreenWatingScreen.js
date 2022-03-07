import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import Styles from '../../components/green_project_components/ProjectStyleComponent';
import {AuthContext} from '../../navigation/green_project_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';
const GreenWatingScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [ownerName, setOwnerName] = useState('');

  firestore()
    .collection('green_projects')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        var firstName = userdata.ownerName.split(' ')[0];
        setOwnerName(firstName);
      }
    });

  useEffect(() => {
    return () => {
      setOwnerName(null);
    };
  }, []);

  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={Styles.WaitContain}>
        <View style={Styles.WaitTopic}>
          <Text style={Styles.WaitText1}>Hello, {ownerName}...!</Text>
        </View>
        <Image
          style={Styles.WaitImage}
          source={require('../../assets/icons/wait.png')}
        />
        <View style={Styles.WaitTextContain}>
          <Text style={Styles.WaitText2}>
            Your account is not Approved till now. Our team is checking your
            profile. Soon you will part of our App.
          </Text>
        </View>
        <TouchableOpacity onPress={() => logout()} style={Styles.Button}>
          <Text style={Styles.ButtonText}>Continue for Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreenWatingScreen;
