import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddVehicleScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/background_images/VehicleUpdateScreenBg.jpg')}
        resizeMode="cover"
        style={Styles.BackgroundImage}>
        <View style={Styles.BackgroundColor}>
          <TouchableOpacity
            style={Styles.ProfileBackIcon}
            onPress={() => navigation.goBack()}>
            <IoniconsIcons
              style={Styles.BackIconContainer}
              name="chevron-back"
              color={'#fff'}
              size={25}
            />
          </TouchableOpacity>
          <Text style={Styles.Text1}>Add Your Vehicle Details</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.ProfileText1}>
            Set the your vhehicle type and fule type.
          </Text>
          <View style={Styles.InputFieldContain}>
            <View style={Styles.Input}>
              <MaterialCommunityIcons name="car" size={30} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Vehicle Type"
              />
            </View>
            <View style={Styles.Input}>
              <MaterialCommunityIcons name="fuel" size={30} color="#009e60" />
              <TextInput
                style={Styles.InputField}
                placeholderTextColor="#009e60"
                placeholder="Fuel Type"
              />
            </View>
            <TouchableOpacity style={Styles.Button} onPress={() => {}}>
              <Text style={Styles.ButtonText}>Add Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddVehicleScreen;
