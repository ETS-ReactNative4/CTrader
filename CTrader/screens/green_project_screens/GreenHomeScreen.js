import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import GreenHeaderComponent from '../../components/green_project_components/GreenHeaderComponent';
import Styles from '../../components/green_project_components/ProjectStyleComponent';

import {AuthContext} from '../../navigation/green_project_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';
const GreenHomeScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [ownerName, setOwnerName] = useState('');
  const [currentCredits, setCurrentCredits] = useState('');
  const [totPayment, setTotPayment] = useState('');
  const [totCredits, setTotCredits] = useState('');

  firestore()
    .collection('green_projects')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        var firstName = userdata.ownerName.split(' ')[0];
        setOwnerName(firstName);
        setCurrentCredits(userdata.creditsAmount);
      }
    });

  firestore()
    .collection('green_project_summery')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        setTotPayment(documentSnapshot.data().totalPrice);
        setTotCredits(documentSnapshot.data().totalPerchasedCredit);
      }
    });

  useEffect(() => {
    return () => {
      setOwnerName(null);
      setCurrentCredits(null);
      setTotPayment(null);
      setTotCredits(null);
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
      <GreenHeaderComponent Navigation={navigation} />
      <View style={Styles.HomeUserName}>
        <Text style={Styles.HomeText1}>Hello {ownerName},</Text>
        <Text style={Styles.HomeText2}>
          Do you want to know your current status?
        </Text>
      </View>
      <View style={Styles.HomeMainIconContain}>
        <Image
          style={Styles.HomeMainIcon}
          source={require('../../assets/icons/factory.png')}
        />
      </View>
      <View style={Styles.HomeCardContainer}>
        <View style={Styles.HomeCard}>
          <View>
            <Image
              style={Styles.HomeIcon}
              source={require('../../assets/icons/green-technology.png')}
            />
          </View>
          <View style={Styles.HomeCardDetails}>
            <Text style={Styles.HomeText3}>{totCredits} tonne(s)</Text>
            <Text style={Styles.HomeText4}>Total Sold Carbon Credits.</Text>
          </View>
        </View>
        <View style={Styles.HomeCard}>
          <View>
            <Image
              style={Styles.HomeIcon}
              source={require('../../assets/icons/money-bag.png')}
            />
          </View>
          <View style={Styles.HomeCardDetails}>
            <Text style={Styles.HomeText3}>$ {totPayment}</Text>
            <Text style={Styles.HomeText4}>
              Total Earning From Carbon Credits. .
            </Text>
          </View>
        </View>
        <View style={Styles.HomeCard}>
          <View>
            <Image
              style={Styles.HomeIcon}
              source={require('../../assets/icons/available.png')}
            />
          </View>
          <View style={Styles.HomeCardDetails}>
            <Text style={Styles.HomeText3}>{currentCredits} tonne(s)</Text>
            <Text style={Styles.HomeText4}>Now Avaliable Carbon Credits.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GreenHomeScreen;
