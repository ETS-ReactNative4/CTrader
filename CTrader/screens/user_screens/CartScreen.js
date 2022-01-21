import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import SubHeaderComponent from '../../components/user_components/SubHeaderComponent';
const CartScreen = ({navigation}) => {
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
          <Text style={Styles.HomeText5}>3 items</Text>
          <TouchableOpacity>
            <Text style={Styles.HomeText3}>Clear all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.CartItem}>
            <Image
              style={Styles.ProjectImg}
              source={require('../../assets/wind.jpg')}
            />
            <View>
              <Text style={Styles.CartText1}>Wind Power Plant</Text>
              <Text style={Styles.CartText2}>$5 per tonne</Text>
            </View>
            <View>
              <TouchableOpacity>
                <EntypoIcons
                  name="cross"
                  size={20}
                  color={'#5e5e5e'}
                  style={Styles.RemoveIcon}
                />
              </TouchableOpacity>
              <View style={Styles.CartItemRight}>
                <EntypoIcons name="cross" size={16} color={'#009e60'} />
                <Text style={Styles.CartText3}>10</Text>
              </View>
            </View>
          </View>
          <View style={Styles.CartItem}>
            <Image
              style={Styles.ProjectImg}
              source={require('../../assets/hydro1.jpg')}
            />
            <View>
              <Text style={Styles.CartText1}>Hydro Power Plant</Text>
              <Text style={Styles.CartText2}>$10 per tonne</Text>
            </View>
            <View>
              <TouchableOpacity>
                <EntypoIcons
                  name="cross"
                  size={20}
                  color={'#5e5e5e'}
                  style={Styles.RemoveIcon}
                />
              </TouchableOpacity>
              <View style={Styles.CartItemRight}>
                <EntypoIcons name="cross" size={16} color={'#009e60'} />
                <Text style={Styles.CartText3}>5</Text>
              </View>
            </View>
          </View>
          <View style={Styles.CartItem}>
            <Image
              style={Styles.ProjectImg}
              source={require('../../assets/solar.jpg')}
            />
            <View>
              <Text style={Styles.CartText1}>Solar Power Plant</Text>
              <Text style={Styles.CartText2}>$3 per tonne</Text>
            </View>
            <View>
              <TouchableOpacity>
                <EntypoIcons
                  name="cross"
                  size={20}
                  color={'#5e5e5e'}
                  style={Styles.RemoveIcon}
                />
              </TouchableOpacity>
              <View style={Styles.CartItemRight}>
                <EntypoIcons name="cross" size={16} color={'#009e60'} />
                <Text style={Styles.CartText3}>8</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={Styles.CartFooter}>
        <View style={Styles.CartBill}>
          <View style={Styles.CartTotal}>
            <Text style={Styles.CartText4}>Sub-Total</Text>
            <Text style={Styles.CartText4}>$89.90</Text>
          </View>
          <View style={Styles.CartTotalLast}>
            <Text style={Styles.CartText3}>Net-Total</Text>
            <Text style={Styles.CartText3}>$89.90</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CheckOutScreen')}
          style={Styles.ProjectDetailButton}>
          <Text style={Styles.CartText5}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
