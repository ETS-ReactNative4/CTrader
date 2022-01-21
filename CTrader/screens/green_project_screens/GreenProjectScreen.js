import React from 'react';
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
const GreenProjectScreen = ({navigation}) => {
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
          <Image
            style={Styles.ProjectImage}
            source={require('../../assets/wind.jpg')}
          />
          <TouchableOpacity
            style={Styles.ProjectImageCamerIcon}
            onPress={() => navigation.navigate('GreenUpdateProjectImgScreen')}>
            <FontAwesomeIcons name="camera" size={25} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={Styles.ProjectDetailBody}>
          <View>
            <View style={Styles.ProjectDetailTopicCon}>
              <Text style={Styles.ProjectDetailText1}>Hybro Power Plant</Text>
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
                <Text style={Styles.ProjectDetailText4}>$ 5 </Text>
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
                <Text style={Styles.ProjectDetailText4}>120 tonne(s) </Text>
                <Text style={Styles.ProjectDetailText2}>Available</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={Styles.ProjectDetailText3}>Description</Text>
            <Text style={Styles.ProjectDetailDes}>
              The aim of this project is to reduce nitrous oxide (N2O) emissions
              in the tail gas of the nitric acid plant of Pakarab Fertilizer
              Ltd. N2O is an undesired by-product in the production process of
              nitric acid, which was normally released to the atmosphere. To
              avoid this, the plant has been retrofitted with a tertiary N2O
              abatement unit in the tail gas stream. The unit reduces the vast
              majority of N2O at the source, before it would be released to the
              atmosphere. Other project benefits include the preservation of the
              ozone layer and helping spread green technology worldwide: Before
              the existence of the Kyoto Protocol there was no worldwide
              regulation of N2O emissions from the nitric acid industry.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenProjectScreen;
