import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import GreenHeaderComponent from '../../components/green_project_components/GreenHeaderComponent';
import Styles from '../../components/green_project_components/ProjectStyleComponent';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import {AuthContext} from '../../navigation/green_project_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';
const GreenProjectScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [projectName, setProjectName] = useState('');
  const [creditsAmount, setCreditsAmount] = useState('');
  const [creditPrice, setCreditPrice] = useState('');
  const [description, setDescription] = useState('');
  const [projImage, setProjImage] = useState('');

  firestore()
    .collection('green_projects')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        setProjectName(userdata.projectName);
        setCreditPrice(userdata.creditPrice);
        setCreditsAmount(userdata.creditsAmount);
        setDescription(userdata.description);
        setProjImage(userdata.projImage);
      }
    });

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <GreenHeaderComponent Navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.ProjectImageBack}>
          {projImage != '' ? (
            <Image style={Styles.ProjectImage} source={{uri: projImage}} />
          ) : (
            <Image
              style={Styles.ProjectImage}
              source={require('../../assets/project.jpg')}
            />
          )}
          <TouchableOpacity
            style={Styles.ProjectImageCamerIcon}
            onPress={() => navigation.navigate('GreenUpdateProjectImgScreen')}>
            <FontAwesomeIcons name="camera" size={25} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={Styles.ProjectDetailBody}>
          <View>
            <View style={Styles.ProjectDetailTopicCon}>
              <Text style={Styles.ProjectDetailText1}>{projectName}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('GreenUpdateProjectInfoScreen')
                }>
                <FontAwesomeIcons name="edit" size={25} color={'#000'} />
              </TouchableOpacity>
            </View>
            <View style={Styles.ProjectDetailInfo}>
              <FontAwesome5Icons
                name="coins"
                size={20}
                color={'#ffd700'}
                style={Styles.ProjectDetailInfoIcon}
              />
              <View style={Styles.ProjectDetailInfoContain}>
                <Text style={Styles.ProjectDetailText4}>$ {creditPrice} </Text>
                <Text style={Styles.ProjectDetailText2}>Per Carbon Tonne</Text>
              </View>
            </View>
            <View style={Styles.ProjectDetailInfo}>
              <EntypoIcons
                name="leaf"
                size={20}
                color={'#008000'}
                style={Styles.ProjectDetailInfoIcon}
              />
              <View style={Styles.ProjectDetailInfoContain}>
                <Text style={Styles.ProjectDetailText4}>
                  {creditsAmount} tonne(s)
                </Text>
                <Text style={Styles.ProjectDetailText2}> Available</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={Styles.ProjectDetailText3}>Description</Text>
            <Text style={Styles.ProjectDetailDes}>{description}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenProjectScreen;
