import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import HeaderComponent from '../../components/user_components/HeaderComponent';
import Styles from '../../components/user_components/UserStyleComponent';
import EntypoIcons from 'react-native-vector-icons/Entypo';
const GreenProjectsScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <HeaderComponent Navigation={navigation} ScreenName={'Green Projects'} />
      <ScrollView>
        <View style={Styles.ProjectBody}>
          <TouchableOpacity
            style={Styles.ProjectCard}
            onPress={() => navigation.navigate('GreenProjectDetailScreeen')}>
            <Image
              style={Styles.ProjectImage}
              source={require('../../assets/hydro2.jpg')}
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
                <Text style={Styles.ProjectText1}>Hydro Power Plant</Text>
                <Text style={Styles.ProjectText2}>Belihuloya</Text>
                <View style={Styles.ProjectCardBottom}>
                  <View style={Styles.ProjectCardBottom1}>
                    <Text style={Styles.ProjectText3}>$ 5 per tonne</Text>
                  </View>
                  <View style={Styles.ProjectCardBottom1}>
                    <Text style={Styles.ProjectText3}>120 tonne(s)</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.ProjectCard}
            onPress={() => navigation.navigate('GreenProjectDetailScreeen')}>
            <Image
              style={Styles.ProjectImage}
              source={require('../../assets/solar.jpg')}
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
                <Text style={Styles.ProjectText1}>Solar Power Plant</Text>
                <Text style={Styles.ProjectText2}>Hambanthota</Text>
                <View style={Styles.ProjectCardBottom}>
                  <View style={Styles.ProjectCardBottom1}>
                    <Text style={Styles.ProjectText3}>$ 5 per tonne</Text>
                  </View>
                  <View style={Styles.ProjectCardBottom1}>
                    <Text style={Styles.ProjectText3}>120 tonne(s)</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.ProjectCard}
            onPress={() => navigation.navigate('GreenProjectDetailScreeen')}>
            <Image
              style={Styles.ProjectImage}
              source={require('../../assets/wind.jpg')}
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
                <Text style={Styles.ProjectText1}>Wind Power Plant</Text>
                <Text style={Styles.ProjectText2}>Puththalama</Text>
                <View style={Styles.ProjectCardBottom}>
                  <View style={Styles.ProjectCardBottom1}>
                    <Text style={Styles.ProjectText3}>$ 5 per tonne</Text>
                  </View>
                  <View style={Styles.ProjectCardBottom1}>
                    <Text style={Styles.ProjectText3}>120 tonne(s)</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenProjectsScreen;
