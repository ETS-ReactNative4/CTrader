import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import SubHeaderComponent from '../../components/user_components/SubHeaderComponent';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';
const CartScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const d = new Date();
  const date = d.getDate() + '/' + d.getDay() + '/' + d.getFullYear();

  useEffect(() => {
    const subscriber = firestore()
      .collection('cart')
      .where('userId', '==', user.uid)
      .where('date', '==', date)
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

  const deleteOne = (docId, projId, byAmount) => {
    Alert.alert(
      'Verification,',
      'Are you sure that you want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            resetCredits(projId, byAmount);
            firestore()
              .collection('cart')
              .doc(docId)
              .delete()
              .then(() => {
                console.log('Cart Item deleted!');
              });
          },
        },
      ],
    );
  };

  const resetCredits = (projId, byAmount) => {
    firestore()
      .collection('green_projects')
      .doc(projId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          var projdata = documentSnapshot.data();
          var newCreditsAmount =
            parseInt(projdata.creditsAmount) + parseInt(byAmount);
          firestore()
            .collection('green_projects')
            .doc(projId)
            .update({
              creditsAmount: newCreditsAmount,
            })
            .then(() => {
              console.log('Project Credit Amount Reset Again!');
            })
            .catch(error => {
              console.log(error.message);
            });
        }
      });
  };

  const deleteAll = () => {
    Alert.alert(
      'Verification,',
      'Are you sure that you want to clear the cart?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            for (let i = 0; i < projects.length; i++) {
              resetCredits(projects[i].projectId, projects[i].buyingAmount);
              firestore()
                .collection('cart')
                .doc(projects[i].key)
                .delete()
                .then(() => {
                  console.log('Cart celared!');
                });
            }
          },
        },
      ],
    );
  };
  let length = projects.length;
  let totalPrice = 0;
  let totalPerchasedCredit = 0;

  for (let i = 0; i < projects.length; i++) {
    totalPrice = projects[i].price + totalPrice;
    totalPerchasedCredit =
      parseInt(projects[i].buyingAmount) + totalPerchasedCredit;
  }

  const receve = [
    {
      totalPrice: totalPrice,
      count: length,
      totalPerchasedCredit: totalPerchasedCredit,
    },
  ];

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <SubHeaderComponent Navigation={navigation} ScreenName={'My Cart'} />
      <View style={Styles.CartBody}>
        <View style={Styles.CartHead}>
          <Text style={Styles.HomeText5}>{length} items</Text>
          <TouchableOpacity
            onPress={
              length != 0
                ? () => deleteAll()
                : () => {
                    Alert.alert(
                      'Alert',
                      'Your cart is empty. There is no items to delete..!',
                    );
                  }
            }>
            <Text style={Styles.HomeText3}>Clear all</Text>
          </TouchableOpacity>
        </View>
        {projects.length == 0 ? (
          <View style={Styles.CartItem1}>
            <Text style={Styles.CartText6}>
              There is no any item in the cart.
            </Text>
          </View>
        ) : loading ? (
          <View style={Styles.ProjectLoading}>
            <Image
              style={{width: 200, height: 200}}
              source={require('../../assets/icons/synchronize.png')}
            />
            <Text style={Styles.ProjectText4}>Loading...!</Text>
            <ActivityIndicator color={'#009e60'} size={70} />
          </View>
        ) : (
          <FlatList
            data={projects}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.key}
            renderItem={({item}) => {
              return (
                <View style={Styles.CartItem}>
                  <Image
                    style={Styles.ProjectImg}
                    source={
                      item.projImage == ''
                        ? require('../../assets/project.jpg')
                        : {uri: item.projImage}
                    }
                  />
                  <View>
                    <Text style={Styles.CartText1}>{item.projectName}</Text>
                    <Text style={Styles.CartText2}>
                      ${item.creditsPrice} per tonne
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        deleteOne(item.key, item.projectId, item.buyingAmount)
                      }>
                      <EntypoIcons
                        name="cross"
                        size={20}
                        color={'#5e5e5e'}
                        style={Styles.RemoveIcon}
                      />
                    </TouchableOpacity>
                    <View style={Styles.CartItemRight}>
                      <EntypoIcons name="cross" size={16} color={'#009e60'} />
                      <Text style={Styles.CartText3}>{item.buyingAmount}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
      <View style={Styles.CartFooter}>
        <View style={Styles.CartBill}>
          <View style={Styles.CartTotal}>
            <Text style={Styles.CartText4}>Sub-Total</Text>
            <Text style={Styles.CartText4}>${totalPrice}</Text>
          </View>
          <View style={Styles.CartTotalLast}>
            <Text style={Styles.CartText3}>Net-Total</Text>
            <Text style={Styles.CartText3}>${totalPrice}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={
            totalPrice != 0
              ? () => navigation.navigate('CheckOutScreen', receve)
              : () => {
                  Alert.alert(
                    'Alert',
                    'Your cart is empty. Please add items to the cart..!',
                  );
                }
          }
          style={Styles.ProjectDetailButton}>
          <Text style={Styles.CartText5}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
