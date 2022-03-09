import React, {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Styles from '../components/StyleComponent';
import FontawsomeIcon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
const HomeScreen = ({navigation}) => {
  const {logout, user} = useContext(AuthContext);
  const [adminName, setAdminName] = useState('');
  const [admins, setAdmins] = useState('');
  const [requests, setRequests] = useState('');
  const [projects, setProjects] = useState('');
  const [users, setUsers] = useState('');

  firestore()
    .collection('admin')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        var firstName = userdata.userName.split(' ')[0];
        setAdminName(firstName);
      }
    });

  useEffect(() => {
    const adminList = firestore()
      .collection('admin')
      .onSnapshot(querySnapshot => {
        const adminData = [];

        querySnapshot.forEach(documentSnapshot => {
          adminData.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setAdmins(adminData);
      });
    const requestList = firestore()
      .collection('green_projects')
      .where('approve', '==', 'No')
      .onSnapshot(querySnapshot => {
        const requestData = [];

        querySnapshot.forEach(documentSnapshot => {
          requestData.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setRequests(requestData);
      });
    const projectsList = firestore()
      .collection('green_projects')
      .where('approve', '==', 'Yes')
      .onSnapshot(querySnapshot => {
        const projectData = [];

        querySnapshot.forEach(documentSnapshot => {
          projectData.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProjects(projectData);
      });
    const usersList = firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const userData = [];

        querySnapshot.forEach(documentSnapshot => {
          userData.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(userData);
      });
    return () => {
      adminList();
      requestList();
      projectsList();
      usersList();
    };
  }, []);

  return (
    <View style={Styles.Container}>
      <View style={Styles.HomeHeader}>
        <Image
          style={Styles.Logo}
          source={require('../assets/icons/logo2.png')}
        />
        <TouchableOpacity onPress={() => logout()}>
          <Image
            style={Styles.HomeLogOut}
            source={require('../assets/icons/logout.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.HomeTopicContain}>
        <View style={Styles.HomeHeaderMiddle}>
          <View>
            <Text style={Styles.userNameText}>Welcome back, {adminName}!</Text>
            <Text style={Styles.HomeTopic}>Dashboard</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Image
              style={Styles.UserImg}
              source={require('../assets/user/user.jpg')}
            />
          </TouchableOpacity>
        </View>
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
            <Text style={Styles.HomeCardTopic}>{admins.length}</Text>
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
            <Text style={Styles.HomeCardTopic}>{requests.length}</Text>
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
            <Text style={Styles.HomeCardTopic}>{projects.length}</Text>
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
            <Text style={Styles.HomeCardTopic}>{users.length}</Text>
            <FontawsomeIcon name="caret-right" size={22} color="#009e60" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
