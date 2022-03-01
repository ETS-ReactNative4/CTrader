import React, {useContext, useState} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';
const HomeScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [fullName, setFullName] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [totPayment, setTotPayment] = useState('');
  const [totCredits, setTotCredits] = useState('');

  firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        var firstName = userdata.fullName.split(' ')[0];
        setFullName(firstName);
        setImagePath(userdata.profileImage);
      }
    });

  firestore()
    .collection('user_summery')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        setTotPayment(documentSnapshot.data().totalPrice);
        setTotCredits(documentSnapshot.data().totalPerchasedCredit);
      }
    });

  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={Styles.HomeHeaderTop}>
        <Image
          style={Styles.HomeLogo}
          source={require('../../assets/icons/logo2.png')}
        />
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={Styles.HomeBaricon}
            source={require('../../assets/icons/bars.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.HomeHeaderMiddle}>
        <View>
          <Text style={Styles.HomeText1}>Hello {fullName}, </Text>
          <Text style={Styles.HomeText2}>
            Do you want to know you GHG emissons?
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          {!imagePath ? (
            <Image
              style={Styles.HomeUser}
              source={require('../../assets/user/userTemp.jpg')}
            />
          ) : (
            <Image style={Styles.HomeUser} source={{uri: imagePath}} />
          )}
        </TouchableOpacity>
      </View>
      <View style={Styles.HomeMainIconContain}>
        <Image
          style={Styles.HomeMainIcon}
          source={require('../../assets/icons/save.png')}
        />
      </View>
      <View style={Styles.HomeCardContainer}>
        <View style={Styles.HomeCard}>
          <View>
            <Image
              style={Styles.HomeIcon}
              source={require('../../assets/icons/lastmonth.png')}
            />
          </View>
          <View style={Styles.HomeCardDetails}>
            <Text style={Styles.HomeText3}>10 tonne(s)</Text>
            <Text style={Styles.HomeText4}>Last Month GHG Emissions</Text>
          </View>
        </View>
        <View style={Styles.HomeCard}>
          <View>
            <Image
              style={Styles.HomeIcon}
              source={require('../../assets/icons/purchase.png')}
            />
          </View>
          <View style={Styles.HomeCardDetails}>
            <Text style={Styles.HomeText3}>$ {totPayment}</Text>
            <Text style={Styles.HomeText4}>Total Purchasing</Text>
          </View>
        </View>
        <View style={Styles.HomeCard}>
          <View>
            <Image
              style={Styles.HomeIcon1}
              source={require('../../assets/icons/caricon.png')}
            />
          </View>
          <View style={Styles.HomeCardDetails}>
            <Text style={Styles.HomeText3}>{totCredits} tonne(s)</Text>
            <Text style={Styles.HomeText4}>Total GHG Emissions</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
