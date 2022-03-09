import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Image, FlatList} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Styles from '../components/StyleComponent';
import firestore from '@react-native-firebase/firestore';

const AdminListScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
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
      <HeaderComponent Navigation={navigation} ScreenName={'Admin List'} />
      <View style={Styles.ListCardContain}>
        {admins.length != 0 ? (
          <FlatList
            data={admins}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.userId}
            renderItem={({item, index}) => {
              return (
                <View style={Styles.ListCard}>
                  <Text style={Styles.ListIndexText}>{index + 1}</Text>
                  <Image
                    style={Styles.UserImg}
                    source={require('../assets/user/user.jpg')}
                  />
                  <View style={Styles.ListTextContain}>
                    <Text style={Styles.ListText1}>{item.userName}</Text>
                    <Text style={Styles.ListText2}>{item.email}</Text>
                  </View>
                </View>
              );
            }}
          />
        ) : (
          <View style={Styles.ListCard1}>
            <Text style={Styles.ListText5}>No Any Admins.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default AdminListScreen;
