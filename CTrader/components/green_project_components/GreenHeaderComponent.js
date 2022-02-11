import React, {useContext} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './ProjectStyleComponent';
import {AuthContext} from '../../navigation/green_project_navigations/AuthProvider';

const GreenHeaderComponent = ({Navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={Styles.HeaderContain}>
      <Image
        style={Styles.HeaderIcon}
        source={require('../../assets/icons/logo2.png')}
      />
      <TouchableOpacity onPress={() => logout()}>
        <MaterialCommunityIcons name="logout" size={25} color={'#009e60'} />
      </TouchableOpacity>
    </View>
  );
};

export default GreenHeaderComponent;
