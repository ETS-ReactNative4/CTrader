import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Styles from '../components/StyleComponent';
import FontawsomeIcon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <View style={Styles.HomeHeader}>
        <Image
          style={Styles.Logo}
          source={require('../assets/icons/logo2.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Image
            style={Styles.UserImg}
            source={require('../assets/user/user.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.HomeTopicContain}>
        <Text style={Styles.userNameText}>Welcome back, Jone!</Text>
        <Text style={Styles.HomeTopic}>Dashboard</Text>
        <View style={Styles.HomeTopicImgContain}>
          <Image
            style={Styles.HomeTopicImg}
            source={require('../assets/save.png')}
          />
        </View>
      </View>
      <View style={Styles.HomeCardArea}>
        <View style={Styles.HomeCardContain}>
          <TouchableOpacity
            style={Styles.HomeCard}
            onPress={() => navigation.navigate('AdminListScreen')}>
            <Image
              style={Styles.HomeCardImg}
              source={require('../assets/icons/admin.png')}
            />
            <Text style={Styles.HomeCardTopic}>Admins</Text>
            <Text style={Styles.HomeCardTopic}>10</Text>
            <FontawsomeIcon name="caret-right" size={22} color="#009e60" />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.HomeCard}
            onPress={() => navigation.navigate('RequestListScreen')}>
            <Image
              style={Styles.HomeCardImg}
              source={require('../assets/icons/request.png')}
            />
            <Text style={Styles.HomeCardTopic}>Requests</Text>
            <Text style={Styles.HomeCardTopic}>10</Text>
            <FontawsomeIcon name="caret-right" size={22} color="#009e60" />
          </TouchableOpacity>
        </View>
        <View style={Styles.HomeCardContain}>
          <TouchableOpacity
            style={Styles.HomeCard}
            onPress={() => navigation.navigate('ProjectsListScreen')}>
            <Image
              style={Styles.HomeCardImg}
              source={require('../assets/icons/projects.png')}
            />
            <Text style={Styles.HomeCardTopic}>Projects</Text>
            <Text style={Styles.HomeCardTopic}>10</Text>
            <FontawsomeIcon name="caret-right" size={22} color="#009e60" />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.HomeCard}
            onPress={() => navigation.navigate('UserListScreen')}>
            <Image
              style={Styles.HomeCardImg}
              source={require('../assets/icons/users.png')}
            />
            <Text style={Styles.HomeCardTopic}>Users</Text>
            <Text style={Styles.HomeCardTopic}>10</Text>
            <FontawsomeIcon name="caret-right" size={22} color="#009e60" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
