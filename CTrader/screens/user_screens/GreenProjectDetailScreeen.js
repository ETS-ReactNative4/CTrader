import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import IMaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const GreenProjectDetailScreeen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/wind.jpg')}
        resizeMode="cover"
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
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={Styles.ProjectDetailBody}>
        <View style={Styles.ProjectDetailTopic}>
          <Text style={Styles.ProjectDetailText1}>Hybro Power Plant</Text>
          <View style={Styles.ProjectDetailInfo}>
            <IMaterialIconsIcons
              name="location-on"
              size={22}
              color={'#fa8072'}
              style={Styles.ProjectDetailInfoIcon}
            />
            <Text style={Styles.ProjectDetailText2}>Belihuloya, Pabahinna</Text>
          </View>
          <View style={Styles.ProjectDetailInfo}>
            <IMaterialIconsIcons
              name="supervisor-account"
              size={22}
              color={'#1e90ff'}
              style={Styles.ProjectDetailInfoIcon}
            />
            <Text style={Styles.ProjectDetailText2}>Mr. Akila Fernanado</Text>
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
              <Text style={Styles.ProjectDetailColText1}>120 tonne(s)</Text>
            </View>
            <Text style={Styles.ProjectDetailColText2}>Available Tonnes</Text>
          </View>
        </View>
        <View>
          <Text style={Styles.ProjectDetailText3}>Description</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
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
            />
          </View>
          <Text style={Styles.ProjectDetailText4}>tonne(s)</Text>
        </View>
        <TouchableOpacity style={Styles.ProjectDetailButton}>
          <Text style={Styles.ProjectDetailButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GreenProjectDetailScreeen;
