import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import Styles from '../components/StyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import IMaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
const ViewProjectDetailsScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/project.jpg')}
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
            <Text style={Styles.ProjectDetailText1}>Burgos Wind Project</Text>
            <View style={Styles.ProjectDetailInfo}>
              <IMaterialIconsIcons
                name="location-on"
                size={22}
                color={'#fa8072'}
                style={Styles.ProjectDetailInfoIcon}
              />
              <Text style={Styles.ProjectDetailText2}>
                No 102, Colombo Road, Baticlo
              </Text>
            </View>
            <View style={Styles.ProjectDetailInfo}>
              <IMaterialIconsIcons
                name="alternate-email"
                size={22}
                color={'#1e90ff'}
                style={Styles.ProjectDetailInfoIcon}
              />
              <Text style={Styles.ProjectDetailText2}>madusanka@gmail.com</Text>
            </View>
          </View>
          <View style={Styles.ProjectDetailSummery}>
            <View style={Styles.ProjectDetailCol1}>
              <View style={Styles.ProjectDetailRow}>
                <FontAwesome5Icons name="coins" size={20} color={'#ffd700'} />
                <Text style={Styles.ProjectDetailColText1}>$ 5</Text>
              </View>
              <Text style={Styles.ProjectDetailColText2}>Per Carbon Ton</Text>
            </View>
            <View style={Styles.ProjectDetailCol2}>
              <View style={Styles.ProjectDetailRow}>
                <EntypoIcons name="leaf" size={20} color={'#008000'} />
                <Text style={Styles.ProjectDetailColText1}>1000 tonne(s)</Text>
              </View>
              <Text style={Styles.ProjectDetailColText2}>Available Tonnes</Text>
            </View>
          </View>
          <View>
            <Text style={Styles.ProjectDetailText3}>Description</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={Styles.ProjectDetailDes}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                iure enim earum reprehenderit perferendis. Provident culpa
                possimus adipisci, corporis at tenetur minima corrupti eos
                asperiores inventore totam, illum laudantium ipsum!Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Rerum iure enim
                earum reprehenderit perferendis. Provident culpa possimus
                adipisci, corporis at tenetur minima corrupti eos asperiores
                inventore totam, illum laudantium ipsum!Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Rerum iure enim earum
                reprehenderit perferendis. Provident culpa possimus adipisci,
                corporis at tenetur minima corrupti eos asperiores inventore
                totam, illum laudantium ipsum!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Rerum iure enim earum
                reprehenderit perferendis. Provident culpa possimus adipisci,
                corporis at tenetur minima corrupti eos asperiores inventore
                totam, illum laudantium ipsum!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Rerum iure enim earum
                reprehenderit perferendis. Provident culpa possimus adipisci,
                corporis at tenetur minima corrupti eos asperiores inventore
                totam, illum laudantium ipsum!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Rerum iure enim earum
                reprehenderit perferendis. Provident culpa possimus adipisci,
                corporis at tenetur minima corrupti eos asperiores inventore
                totam, illum laudantium ipsum!
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewProjectDetailsScreen;
