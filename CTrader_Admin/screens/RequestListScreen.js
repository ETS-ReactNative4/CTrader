import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Styles from '../components/StyleComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
const RequestListScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('green_projects')
      .where('approve', '==', 'No')
      .onSnapshot(querySnapshot => {
        const projectsData = [];

        querySnapshot.forEach(documentSnapshot => {
          projectsData.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setRequests(projectsData);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  return (
    <View style={Styles.Container1}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <HeaderComponent Navigation={navigation} ScreenName={'Request List'} />
      <View style={Styles.ListCardContain}>
        {requests.length != 0 ? (
          <FlatList
            data={requests}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.userId}
            renderItem={({item, index}) => {
              return (
                <View style={Styles.ListCardTop}>
                  <View style={Styles.ListCardBottom}>
                    <Text style={Styles.ListIndexText}>{index + 1}</Text>
                    <Image
                      style={Styles.UserImg}
                      source={
                        !item.projImage
                          ? require('../assets/project.jpg')
                          : {uri: item.projImage}
                      }
                    />
                    <View style={Styles.ListTextContain}>
                      <Text style={Styles.ListText1}>{item.projectName}</Text>
                      <Text style={Styles.ListText2}>{item.companyName}</Text>
                      <Text style={Styles.ListText2}>
                        {
                          item.address.split(',')[
                            item.address.split(',').length - 1
                          ]
                        }
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ApproveProjectSreen', {
                        userId: item.userId,
                      })
                    }
                    style={Styles.ListCardView}>
                    <Text style={Styles.ListText4}>View Now</Text>
                    <MaterialIcons
                      name="navigate-next"
                      size={26}
                      color="#009e60"
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        ) : (
          <View style={Styles.ListCard1}>
            <Text style={Styles.ListText5}>No Any Requested Projects.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default RequestListScreen;
