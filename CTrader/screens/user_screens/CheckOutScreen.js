import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import SubHeaderComponent from '../../components/user_components/SubHeaderComponent';

const CheckOutScreen = ({navigation}) => {
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
              <Text style={Styles.CheckOutText2}>3 items</Text>
            </View>
            <Text style={Styles.CheckOutText1}>$890.90</Text>
          </View>
          <View style={Styles.Payment}>
            <Text style={Styles.CheckOutText4}>Payment Method</Text>
            <View style={Styles.PaymentType}>
              <View style={Styles.PaymentImgContainer}>
                <Image
                  style={Styles.PaymentImg}
                  source={require('../../assets/payment/visa.png')}
                />
              </View>
              <View style={Styles.PaymentImgContainer}>
                <Image
                  style={Styles.PaymentImg}
                  source={require('../../assets/payment/mastercard.png')}
                />
              </View>
              <View style={Styles.PaymentImgContainer}>
                <Image
                  style={Styles.PaymentImg}
                  source={require('../../assets/payment/paypal.png')}
                />
              </View>
            </View>
            <View style={Styles.PaymentForm}>
              <View style={Styles.CheckOutInputContainer}>
                <Text style={Styles.CheckOutText3}>Card Holder Name</Text>
                <View style={Styles.CheckOutTextInputField}>
                  <TextInput style={Styles.CheckOutTextInput} />
                </View>
              </View>
              <View style={Styles.CheckOutInputContainer}>
                <Text style={Styles.CheckOutText3}>Card Number</Text>
                <View style={Styles.CheckOutTextInputField}>
                  <TextInput style={Styles.CheckOutTextInput} />
                </View>
              </View>
              <View style={Styles.CheckOutInputContainer1}>
                <View>
                  <Text style={Styles.CheckOutText3}>Expire Date</Text>
                  <View style={Styles.CheckOutTextInputField}>
                    <TextInput style={Styles.CheckOutTextInput1} />
                  </View>
                </View>
                <View>
                  <Text style={Styles.CheckOutText3}>CCV</Text>
                  <View style={Styles.CheckOutTextInputField}>
                    <TextInput style={Styles.CheckOutTextInput1} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={Styles.CheckOutFooter}>
        <TouchableOpacity style={Styles.ProjectDetailButton}>
          <Text style={Styles.CartText5}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOutScreen;
