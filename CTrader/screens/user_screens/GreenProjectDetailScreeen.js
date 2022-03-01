import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import IMaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';

const GreenProjectDetailScreeen = ({navigation, route}) => {
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [projectDetail, setProjectDetail] = useState([]);
  const [creditAmount, setCreditAmount] = useState('');
  const [projects, setProjects] = useState([]);

  const d = new Date();
  const date = d.getDate() + '/' + d.getDay() + '/' + d.getFullYear();

  useEffect(() => {
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
    return () => {
      setCreditAmount(null);
    };
  }, []);

  const newCreditsAmount = projectDetail.creditsAmount - creditAmount;

  const reduseCredits = async () => {
    await firestore()
      .collection('green_projects')
      .doc(projectDetail.userId)
      .update({
        creditsAmount: newCreditsAmount,
      })
      .then(() => {
        console.log('Project Credit Amount Reduced!');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const price = creditAmount * projectDetail.creditPrice;

  const submitData = async () => {
    reduseCredits();
    await firestore()
      .collection('cart')
      .add({
        userId: user.uid,
        buyingAmount: creditAmount,
        projectId: projectDetail.userId,
        projectName: projectDetail.projectName,
        creditsPrice: projectDetail.creditPrice,
        projImage: projectDetail.projImage,
        price: price,
        date: date,
      })
      .then(() => {
        console.log('Add carbon credits to the cart.');
        Alert.alert(
          'Task Completed,',
          `You are successfully add ${creditAmount} carbon credits to the cart...!`,
        );
        setCreditAmount(null);
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert(
          'Error..!',
          'Something went wrong with add cart to firestore.',
        );
      });
  };
  const addCart = () => {
    if (!creditAmount) {
      Alert.alert('Alert,', 'Please Enter the Credit Amout...!');
    } else {
      submitData();
    }
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
            source={require('../../assets/icons/synchronize.png')}
          />
          <Text style={Styles.ProjectText4}>Loading...!</Text>
          <ActivityIndicator color={'#009e60'} size={70} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ImageBackground
            source={
              projectDetail.projImage == ''
                ? require('../../assets/project.jpg')
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
                <TouchableOpacity
                  style={Styles.BackIconContainer}
                  onPress={() => navigation.navigate('CartScreen')}>
                  <IoniconsIcons
                    name="cart-outline"
                    color={'#fff'}
                    size={30}
                    style={Styles.BackIcon}
                  />
                  {projects.length != 0 ? (
                    <View style={Styles.CountBack}>
                      <Text style={Styles.CountText}>{projects.length}</Text>
                    </View>
                  ) : null}
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
                  name="supervisor-account"
                  size={22}
                  color={'#1e90ff'}
                  style={Styles.ProjectDetailInfoIcon}
                />
                <Text style={Styles.ProjectDetailText2}>
                  {projectDetail.ownerName}
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
            <View style={Styles.ProjectDetailRow}>
              <View style={Styles.ProjectDetailInput}>
                <TextInput
                  keyboardType="numeric"
                  placeholder="1"
                  placeholderTextColor={'rgb(0,158,96)'}
                  style={Styles.ProjectDetailTextInput}
                  value={creditAmount}
                  onChangeText={userCredits => setCreditAmount(userCredits)}
                />
              </View>
              <Text style={Styles.ProjectDetailText4}>tonne(s)</Text>
            </View>
            <TouchableOpacity
              onPress={() => addCart()}
              style={Styles.ProjectDetailButton}>
              <Text style={Styles.ProjectDetailButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default GreenProjectDetailScreeen;
