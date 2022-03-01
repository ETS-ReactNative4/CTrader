import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import SubHeaderComponent from '../../components/user_components/SubHeaderComponent';
import {AuthContext} from '../../navigation/user_navigations/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const CheckOutScreen = ({navigation, route}) => {
  const {user} = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [ccvNumber, setCcvNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [visa, setVisa] = useState(true);
  const [master, setMaster] = useState(true);
  const [paypal, setPaypal] = useState(true);

  const [totPrice, setTotPrice] = useState(route.params[0].totalPrice);
  const [itemCount, setItemCount] = useState(route.params[0].count);

  const selectVisaCard = () => {
    setVisa(false);
    setMaster(true);
    setPaypal(true);
    setCardType('Visa');
  };
  const selectMasterCard = () => {
    setVisa(true);
    setMaster(false);
    setPaypal(true);
    setCardType('Master');
  };
  const selectPayPal = () => {
    setVisa(true);
    setMaster(true);
    setPaypal(false);
    setCardType('PayPal');
  };

  const totalPerchasedCredit = route.params[0].totalPerchasedCredit;

  const userSummery = () => {
    firestore()
      .collection('user_summery')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        let summerydata = documentSnapshot.data();
        if (documentSnapshot.exists) {
          firestore()
            .collection('user_summery')
            .doc(user.uid)
            .update({
              totalPrice: parseInt(summerydata.totalPrice) + totPrice,
              totalPerchasedCredit:
                parseInt(summerydata.totalPerchasedCredit) +
                totalPerchasedCredit,
            })
            .then(() => {
              console.log('Summery Updated!');
            })
            .catch(error => {
              console.log(error.message);
            });
        } else {
          firestore()
            .collection('user_summery')
            .doc(user.uid)
            .set({
              totalPrice: totPrice,
              totalPerchasedCredit: totalPerchasedCredit,
            })
            .then(() => {
              console.log('Summery Added!');
            })
            .catch(error => {
              console.log(error.message);
            });
        }
      });
  };

  const projectSummery = () => {
    firestore()
      .collection('cart')
      .where('userId', '==', user.uid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let data = documentSnapshot.data();
          project(data.projectId, data.buyingAmount, data.price);
        });
      });
    deleteAll();
  };
  const project = (projectId, buyingAmount, price) => {
    firestore()
      .collection('green_project_summery')
      .doc(projectId)
      .get()
      .then(documentSnapshot => {
        let projectData = documentSnapshot.data();
        if (documentSnapshot.exists) {
          firestore()
            .collection('green_project_summery')
            .doc(projectId)
            .update({
              totalPrice: parseInt(projectData.totalPrice) + parseInt(price),
              totalPerchasedCredit:
                parseInt(projectData.totalPerchasedCredit) +
                parseInt(buyingAmount),
            })
            .then(() => {
              console.log('Project Summery Updated!');
            })
            .catch(error => {
              console.log(error.message);
            });
        } else {
          firestore()
            .collection('green_project_summery')
            .doc(projectId)
            .set({
              totalPrice: price,
              totalPerchasedCredit: buyingAmount,
            })
            .then(() => {
              console.log('Project Summery Added!');
            })
            .catch(error => {
              console.log(error.message);
            });
        }
      });
  };

  const deleteAll = () => {
    firestore()
      .collection('cart')
      .where('userId', '==', user.uid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          firestore()
            .collection('cart')
            .doc(documentSnapshot.id)
            .delete()
            .then(() => {
              console.log('Cart celared!');
            });
        });
      });
  };

  const submitData = () => {
    userSummery();
    projectSummery();
    firestore()
      .collection('payments')
      .doc()
      .set({
        userId: user.uid,
        totalAmount: totPrice,
        cardType: cardType,
        userName: userName,
        cardNumber: cardNumber,
        expDate: expDate,
        ccvNumber: ccvNumber,
      })
      .then(() => {
        console.log('Payment Completed!');
        Alert.alert(
          'Payment Completed,',
          'Your have been successfully complete the payment...!',
        );
        setCardType(null);
        setUserName(null);
        setCardNumber(null);
        setExpDate(null);
        setCcvNumber(null);
        setVisa(true);
        setMaster(true);
        setPaypal(true);
        setTotPrice('0');
        setItemCount('0');
      })
      .catch(error => {
        console.log(error.message);
        Alert.alert(
          'Error..!',
          'Something went wrong with added profile details to firestore.',
        );
      });
  };

  const payNow = () => {
    if (userName == '') {
      Alert.alert('Alert,', 'Please Enter Your Card Holder Name...! ');
    } else if (cardNumber == '') {
      Alert.alert('Alert,', 'Please Enter Your Card Number...!');
    } else if (expDate == '') {
      Alert.alert('Alert,', 'Please Enter Your Card Expeir Date...!');
    } else if (expDate.includes('/') == false) {
      Alert.alert('Alert,', 'Please Enter Card Expeir Date Correctly...!');
    } else if (ccvNumber == '') {
      Alert.alert('Alert,', 'Please Enter Your Card CCV Number...!');
    } else if (cardType == '') {
      Alert.alert('Alert,', 'Select Your Card Type...!');
    } else {
      Alert.alert('Verification,', 'Are you sure that you want make payment?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => submitData(),
        },
      ]);
    }
  };

  useEffect(() => {
    return () => {
      setCardType(null);
      setUserName(null);
      setCardNumber(null);
      setExpDate(null);
      setCcvNumber(null);
      setTotPrice('0');
      setItemCount('0');
    };
  }, []);

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <SubHeaderComponent Navigation={navigation} ScreenName={'Check Out'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.CheckOuttBody}>
          <View style={Styles.CartItem}>
            <View>
              <Text style={Styles.CheckOutText1}>Total Amount</Text>
              <Text style={Styles.CheckOutText2}>{itemCount} items</Text>
            </View>
            <Text style={Styles.CheckOutText1}>$ {totPrice}</Text>
          </View>
          <View style={Styles.Payment}>
            <Text style={Styles.CheckOutText4}>Payment Method</Text>
            <View style={Styles.PaymentType}>
              <TouchableOpacity onPress={() => selectVisaCard()}>
                <View
                  style={
                    visa != true
                      ? Styles.PaymentImgContainer1
                      : Styles.PaymentImgContainer
                  }>
                  <Image
                    style={Styles.PaymentImg}
                    source={require('../../assets/payment/visa.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectMasterCard()}>
                <View
                  style={
                    master != true
                      ? Styles.PaymentImgContainer1
                      : Styles.PaymentImgContainer
                  }>
                  <Image
                    style={Styles.PaymentImg}
                    source={require('../../assets/payment/mastercard.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectPayPal()}>
                <View
                  style={
                    paypal != true
                      ? Styles.PaymentImgContainer1
                      : Styles.PaymentImgContainer
                  }>
                  <Image
                    style={Styles.PaymentImg}
                    source={require('../../assets/payment/paypal.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.PaymentForm}>
              <View style={Styles.CheckOutInputContainer}>
                <Text style={Styles.CheckOutText3}>Card Holder Name</Text>
                <View style={Styles.CheckOutTextInputField}>
                  <TextInput
                    style={Styles.CheckOutTextInput}
                    placeholder="Enter Name on Your Card"
                    placeholderTextColor={'#5e5e5e'}
                    value={userName}
                    onChangeText={name => setUserName(name)}
                  />
                </View>
              </View>
              <View style={Styles.CheckOutInputContainer}>
                <Text style={Styles.CheckOutText3}>Card Number</Text>
                <View style={Styles.CheckOutTextInputField}>
                  <TextInput
                    style={Styles.CheckOutTextInput}
                    keyboardType="numeric"
                    placeholder="---- ---- ---- ----"
                    maxLength={16}
                    placeholderTextColor={'#5e5e5e'}
                    value={cardNumber}
                    onChangeText={num => setCardNumber(num)}
                  />
                </View>
              </View>
              <View style={Styles.CheckOutInputContainer1}>
                <View>
                  <Text style={Styles.CheckOutText3}>Expire Date</Text>
                  <View style={Styles.CheckOutTextInputField}>
                    <TextInput
                      style={Styles.CheckOutTextInput1}
                      keyboardType="numeric"
                      placeholder="MM/YY"
                      maxLength={5}
                      placeholderTextColor={'#5e5e5e'}
                      value={expDate}
                      onChangeText={date => setExpDate(date)}
                    />
                  </View>
                </View>
                <View>
                  <Text style={Styles.CheckOutText3}>CCV</Text>
                  <View style={Styles.CheckOutTextInputField}>
                    <TextInput
                      style={Styles.CheckOutTextInput1}
                      keyboardType="numeric"
                      placeholder="----"
                      maxLength={4}
                      placeholderTextColor={'#5e5e5e'}
                      value={ccvNumber}
                      onChangeText={ccv => setCcvNumber(ccv)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={Styles.CheckOutFooter}>
        <TouchableOpacity
          style={Styles.ProjectDetailButton}
          onPress={() => payNow()}>
          <Text style={Styles.CartText5}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOutScreen;
