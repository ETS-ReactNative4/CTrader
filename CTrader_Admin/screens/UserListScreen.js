import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Image, FlatList} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Styles from '../components/StyleComponent';
import firestore from '@react-native-firebase/firestore';
const UserListScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
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
      <HeaderComponent Navigation={navigation} ScreenName={'User List'} />
      <View style={Styles.ListCardContain}>
        {users.length != 0 ? (
          <FlatList
            data={users}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.userId}
            renderItem={({item, index}) => {
              return (
                <View style={Styles.ListCard}>
                  <Text style={Styles.ListIndexText}>{index + 1}</Text>
                  <Image
                    style={Styles.UserImg}
                    source={
                      !item.profileImage
                        ? require('../assets/user/user.jpg')
                        : {uri: item.profileImage}
                    }
                  />
                  <View style={Styles.ListTextContain}>
                    <Text style={Styles.ListText1}>{item.fullName}</Text>
                    <Text style={Styles.ListText2}>{item.email}</Text>
                    <View style={Styles.ListTextDes}>
                      <Text style={Styles.ListText3}>Vehicle Type:</Text>
                      <Text style={Styles.ListText2}>{item.vehicleType}</Text>
                    </View>
                    <View style={Styles.ListTextDes}>
                      <Text style={Styles.ListText3}>Fuel Type:</Text>
                      <Text style={Styles.ListText2}>{item.fuelType}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        ) : (
          <View style={Styles.ListCard1}>
            <Text style={Styles.ListText5}>No Any Users.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default UserListScreen;
