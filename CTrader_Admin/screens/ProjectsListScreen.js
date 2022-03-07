import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import Styles from '../components/StyleComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
const ProjectsListScreen = ({navigation}) => {
  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={Styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IoniconsIcons name="chevron-back" color={'#fff'} size={30} />
        </TouchableOpacity>
        <Text style={Styles.TopicText}>Projects List</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddProjectScreen')}>
          <IoniconsIcons name="add" color={'#fff'} size={30} />
        </TouchableOpacity>
      </View>
      <View style={Styles.ListCardContain}>
        <View style={Styles.ListCardTop}>
          <View style={Styles.ListCardBottom}>
            <Text style={Styles.ListIndexText}>1</Text>
            <Image
              style={Styles.UserImg}
              source={require('../assets/user/user.jpg')}
            />
            <View style={Styles.ListTextContain}>
              <Text style={Styles.ListText1}>Burgos Wind Project</Text>
              <Text style={Styles.ListText2}>Burgos (PVT) .Ltd</Text>
              <Text style={Styles.ListText2}>Colombo</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewProjectDetailsScreen')}
            style={Styles.ListCardView}>
            <Text style={Styles.ListText4}>View Now</Text>
            <MaterialIcons name="navigate-next" size={26} color="#009e60" />
          </TouchableOpacity>
        </View>
        <View style={Styles.ListCardTop}>
          <View style={Styles.ListCardBottom}>
            <Text style={Styles.ListIndexText}>2</Text>
            <Image
              style={Styles.UserImg}
              source={require('../assets/user/user.jpg')}
            />
            <View style={Styles.ListTextContain}>
              <Text style={Styles.ListText1}>Burgos Wind Project</Text>
              <Text style={Styles.ListText2}>Burgos (PVT) .Ltd</Text>
              <Text style={Styles.ListText2}>Colombo</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewProjectDetailsScreen')}
            style={Styles.ListCardView}>
            <Text style={Styles.ListText4}>View Now</Text>
            <MaterialIcons name="navigate-next" size={26} color="#009e60" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProjectsListScreen;
