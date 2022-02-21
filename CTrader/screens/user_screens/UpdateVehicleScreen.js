import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import ModalDropdown from 'react-native-modal-dropdown';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const UpdateVehicleScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [vehicleType, setVehicleType] = useState('');
  const [fuelType, setFuelType] = useState('');

  let vehicleTypes = ['Motor Bike', 'Car', 'Van', 'Lorry', 'Bus', 'Threwheel'];
  let fuelTypes = ['Petrol', 'Diesel'];

  const submitData = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        vehicleType: vehicleTypes[vehicleType],
        fuelType: fuelTypes[fuelType],
      })
      .then(() => {
        console.log('User Vehicle Details Updated!');
        Alert.alert(
          'Task Completed,',
          'Your vehicle has been successfully updated...!',
        );
        setVehicleType(null);
        setFuelType(null);
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert(
          'Error..!',
          'Something went wrong with added profile details to firestore.',
        );
      });
  };
  const updateVehicle = () => {
    if (vehicleTypes[vehicleType] == undefined) {
      Alert.alert('Alert,', 'Please Select Your Vehicle Type...!');
    } else if (fuelTypes[fuelType] == undefined) {
      Alert.alert('Alert,', 'Please Select Your Vehicle Fuel Type...!');
    } else {
      submitData();
    }
  };

  useEffect(() => {
    return () => {
      setVehicleType(null);
      setFuelType(null);
    };
  }, []);

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
          <Text style={Styles.Text1}>Update Your Vehicle Details</Text>
        </View>
      </ImageBackground>
      <View style={Styles.Form}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.ProfileText1}>
            Update the new vehicle type and fule type.
          </Text>
          <View style={Styles.InputFieldContain}>
            <View style={Styles.DropInput}>
              <IoniconsIcons name="car" size={25} color="#009e60" />
              <ModalDropdown
                options={vehicleTypes}
                style={Styles.DropDownMenu}
                showsVerticalScrollIndicator={false}
                dropdownStyle={Styles.DropDownOption}
                dropdownTextStyle={Styles.DropDownOptionText}
                onSelect={userVehicle => setVehicleType(userVehicle)}>
                <Text style={Styles.DropDownText}>
                  {vehicleTypes[vehicleType] == undefined
                    ? 'Select Your Vehicle Type'
                    : vehicleTypes[vehicleType]}
                </Text>
              </ModalDropdown>
            </View>
            <View style={Styles.DropInput}>
              <MaterialCommunityIcons name="fuel" size={25} color="#009e60" />
              <ModalDropdown
                options={fuelTypes}
                style={Styles.DropDownMenu}
                showsVerticalScrollIndicator={false}
                dropdownStyle={Styles.DropDownOption}
                dropdownTextStyle={Styles.DropDownOptionText}
                onSelect={usefuel => setFuelType(usefuel)}>
                <Text style={Styles.DropDownText}>
                  {fuelTypes[fuelType] == undefined
                    ? 'Select Your Vehicle Fuel Type'
                    : fuelTypes[fuelType]}
                </Text>
              </ModalDropdown>
            </View>
            <TouchableOpacity
              style={Styles.Button}
              onPress={() => updateVehicle()}>
              <Text style={Styles.ButtonText}>Update Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default UpdateVehicleScreen;
