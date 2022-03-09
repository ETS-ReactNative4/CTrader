import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Styles from '../components/StyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import IMaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';

const ApproveProjectSreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(true);
  const [projectDetail, setProjectDetail] = useState([]);

  firestore()
    .collection('green_projects')
    .doc(route.params.userId)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        setProjectDetail(documentSnapshot.data());
      }
      setLoading(false);
    });
  useEffect(() => {
    return () => {
      setProjectDetail();
    };
  }, []);

  const updateProject = () => {
    firestore()
      .collection('green_projects')
      .doc(route.params.userId)
      .update({
        approve: 'Yes',
      })
      .then(() => {
        console.log('Project Successfully Approved!');
        completeApprove();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const completeApprove = () => {
    Alert.alert(
      'Task Completed,',
      'You are successfully approve the project..!',
      [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('RequestListScreen'),
        },
      ],
    );
  };

  const approveNow = () => {
    Alert.alert(
      'Verification,',
      'Are you sure that you want approve the project?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            updateProject();
            setProcessing(false);
          },
        },
      ],
    );
  };

  const deleteProject = () => {
    firestore()
      .collection('green_projects')
      .doc(route.params.userId)
      .delete()
      .then(() => {
        console.log('Project Successfully Deleted!');
        completeMsg();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const completeMsg = () => {
    Alert.alert(
      'Task Completed,',
      'You are successfully remove the project..!',
      [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('RequestListScreen'),
        },
      ],
    );
  };

  const removeNow = () => {
    Alert.alert(
      'Verification,',
      'Are you sure that you want remove the project?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            deleteProject();
            setProcessing(false);
          },
        },
      ],
    );
  };

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      {loading ? (
        <View style={Styles.ProjectLoading}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../assets/icons/synchronize.png')}
          />
          <Text style={Styles.ProjectDetailText4}>Loading...!</Text>
          <ActivityIndicator color={'#009e60'} size={70} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ImageBackground
            source={
              !projectDetail.projImage
                ? require('../assets/project.jpg')
                : {uri: projectDetail.projImage}
            }
            resizeMode="stretch"
            style={Styles.ProjectDetailImage}>
            <View style={Styles.ProjectDetailImageBack}>
              <View style={Styles.BacklHeader}>
                <TouchableOpacity
                  style={Styles.BackIconContainer}
                  onPress={() => navigation.goBack()}>
                  <IoniconsIcons
                    name="chevron-back"
                    color={'#fff'}
                    size={25}
                    style={Styles.BackIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={Styles.ProjectDetailBody}>
            <View style={Styles.ProjectDetailTopic}>
              <Text style={Styles.ProjectDetailText1}>
                {projectDetail.projectName}
              </Text>
              <View style={Styles.ProjectDetailInfo}>
                <IMaterialIconsIcons
                  name="location-on"
                  size={22}
                  color={'#fa8072'}
                  style={Styles.ProjectDetailInfoIcon}
                />
                <Text style={Styles.ProjectDetailText2}>
                  {projectDetail.address}
                </Text>
              </View>
              <View style={Styles.ProjectDetailInfo}>
                <IMaterialIconsIcons
                  name="alternate-email"
                  size={22}
                  color={'#1e90ff'}
                  style={Styles.ProjectDetailInfoIcon}
                />
                <Text style={Styles.ProjectDetailText2}>
                  {projectDetail.email}
                </Text>
              </View>
            </View>
            <View style={Styles.ProjectDetailSummery}>
              <View style={Styles.ProjectDetailCol1}>
                <View style={Styles.ProjectDetailRow}>
                  <FontAwesome5Icons name="coins" size={20} color={'#ffd700'} />
                  <Text style={Styles.ProjectDetailColText1}>
                    $ {projectDetail.creditPrice}
                  </Text>
                </View>
                <Text style={Styles.ProjectDetailColText2}>Per Carbon Ton</Text>
              </View>
              <View style={Styles.ProjectDetailCol2}>
                <View style={Styles.ProjectDetailRow}>
                  <EntypoIcons name="leaf" size={20} color={'#008000'} />
                  <Text style={Styles.ProjectDetailColText1}>
                    {projectDetail.creditsAmount} tonne(s)
                  </Text>
                </View>
                <Text style={Styles.ProjectDetailColText2}>
                  Available Tonnes
                </Text>
              </View>
            </View>
            <View>
              <Text style={Styles.ProjectDetailText3}>Description</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.ProjectDetailDes}>
                  {projectDetail.description}
                </Text>
              </ScrollView>
            </View>
          </View>
          <View style={Styles.ProjectDetailFooter}>
            {processing == false ? (
              <View>
                <Text style={Styles.ProjectDetailText2}>Processing..!</Text>
                <ActivityIndicator color={'#009e60'} size={30} />
              </View>
            ) : (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => approveNow()}
                  style={[Styles.ProjectDetailButton, Styles.GreenButton]}>
                  <Text style={Styles.ProjectDetailButtonText}>
                    Approve Now
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => removeNow()}
                  style={[Styles.ProjectDetailButton, Styles.RedButton]}>
                  <Text style={Styles.ProjectDetailButtonText}>Remove Now</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ApproveProjectSreen;
