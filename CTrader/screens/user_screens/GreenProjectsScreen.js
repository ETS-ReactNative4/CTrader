import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import HeaderComponent from '../../components/user_components/HeaderComponent';
import Styles from '../../components/user_components/UserStyleComponent';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
const GreenProjectsScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('green_projects')
      .onSnapshot(querySnapshot => {
        const projects = [];

        querySnapshot.forEach(documentSnapshot => {
          projects.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProjects(projects);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  return (
    <View style={Styles.Container}>
      <HeaderComponent Navigation={navigation} ScreenName={'Green Projects'} />
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
        <View style={Styles.ProjectBody}>
          <FlatList
            data={projects}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.userId}
            renderItem={({item}) =>
              item.approve == 'Yes' ? (
                <TouchableOpacity
                  key={item.userId}
                  style={Styles.ProjectCard}
                  onPress={() =>
                    navigation.navigate('GreenProjectDetailScreeen', {
                      userId: item.userId,
                    })
                  }>
                  <Image
                    style={Styles.ProjectImage}
                    source={
                      item.projImage == ''
                        ? require('../../assets/project.jpg')
                        : {uri: item.projImage}
                    }
                  />
                  <View style={Styles.ProjectImageBack}>
                    <View style={Styles.ProjectIcon}>
                      <EntypoIcons
                        name="bookmark"
                        size={70}
                        color={'rgba(255,255,255,0.7)'}
                      />
                    </View>
                    <View style={Styles.ProjectDetails}>
                      <Text style={Styles.ProjectText1}>
                        {item.projectName}
                      </Text>
                      <Text style={Styles.ProjectText2}>
                        {
                          item.address.split(',')[
                            item.address.split(',').length - 1
                          ]
                        }
                      </Text>
                      <View style={Styles.ProjectCardBottom}>
                        <View style={Styles.ProjectCardBottom1}>
                          <Text style={Styles.ProjectText3}>
                            $ {item.creditPrice} per tonne
                          </Text>
                        </View>
                        <View style={Styles.ProjectCardBottom1}>
                          <Text style={Styles.ProjectText3}>
                            {item.creditsAmount} tonne(s)
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : null
            }
          />
        </View>
      )}
    </View>
  );
};

export default GreenProjectsScreen;
