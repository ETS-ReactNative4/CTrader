import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  //GreenSignUp, GreenLogin Styles
  BackgroundImage: {
    position: 'absolute',
    height: height / 2.3,
    width: width,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  BackgroundColor: {
    backgroundColor: 'rgba(0, 0, 0, .4)',
    width: width,
    height: height / 2.3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  BackgroundImage1: {
    position: 'absolute',
    height: height / 2.8,
    width: width,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  BackgroundColor1: {
    backgroundColor: 'rgba(0, 0, 0, .4)',
    width: width,
    height: height / 2.8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  Logo: {
    alignSelf: 'center',
    tintColor: '#fff',
    height: 150,
    width: 140,
  },
  Form: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  Input: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: 'rgba(0,158,96,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 10,
    width: width / 1.15,
  },
  InputMulti: {
    borderRadius: 20,
    backgroundColor: 'rgba(0,158,96,0.2)',
    padding: 5,
    marginBottom: 15,
    width: width / 1.15,
    height: width * 0.48,
  },
  InputMultiBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputField: {
    width: width / 1.5,
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  InputFieldMulti: {
    width: width / 1.5,
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
  },
  InputContainerSignUp: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 3,
    paddingRight: 3,
  },
  Bottom: {
    flexDirection: 'row',
  },
  ButtonContain: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#009e60',
    borderRadius: 20,
    padding: 15,
    width: width / 1.1,
  },
  ButtonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Bold',
  },
  Text1: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'PlayfairDisplay-Black',
    paddingTop: 15,
    paddingBottom: 5,
  },
  Text2: {
    color: '#009e60',
    textAlign: 'right',
    marginBottom: 25,
    fontSize: 18,
    fontFamily: 'NunitoSans-Bold',
  },
  Text3: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'NunitoSans-Bold',
  },
  Text4: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
    marginBottom: 20,
  },
  ScrollDotsContain: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -5,
  },
  ScrollDot: {
    height: 10,
    borderRadius: 50,
    margin: 5,
  },
  //GreenSignUp, GreenLogin Styles
  //Wating Screen Styles
  WaitContain: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginTop: 25,
  },
  WaitImage: {
    height: height * 0.35,
    width: width * 0.4,
  },
  WaitTextContain: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(0,158,96,0.2)',
    padding: 20,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    width: width * 0.9,
  },
  WaitText1: {
    color: '#000',
    fontSize: 36,
    fontFamily: 'PlayfairDisplay-Black',
    marginBottom: 30,
  },
  WaitText2: {
    color: '#009e60',
    fontSize: 20,
    fontFamily: 'NunitoSans-Bold',
    textAlign: 'center',
  },
  //Wating Screen Styles
  //Header Styles
  HeaderContain: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  HeaderIcon: {
    height: 50,
    width: 150,
    tintColor: '#009e60',
  },
  //Header Styles
  //Green Home Screen Styles
  HomeUserName: {
    paddingTop: 10,
    paddingLeft: 22,
  },
  HomeMainIconContain: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  HomeMainIcon: {
    width: 150,
    height: 150,
  },
  HomeCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomeCard: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#5e5e5e',
    marginBottom: 10,
    width: width * 0.9,
    height: 75,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  HomeIcon: {
    width: 50,
    height: 50,
  },
  HomeCardDetails: {
    width: 250,
    borderLeftWidth: 2,
    borderLeftColor: '#5e5e5e',
    paddingLeft: 20,
  },
  HomeText1: {
    color: '#009e60',
    fontSize: 32,
    fontFamily: 'PlayfairDisplay-Black',
  },
  HomeText2: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
    width: 250,
  },
  HomeText3: {
    color: '#009e60',
    fontSize: 18,
    fontFamily: 'NunitoSans-Black',
  },
  HomeText4: {
    color: '#5e5e5e',
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
  },
  //Green Home Screen Styles
  //Green Project Styles
  ProjectImage: {
    height: height * 0.35,
    width: width,
  },
  ProjectImageBack: {
    height: height * 0.35,
    width: width,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 10,
  },
  ProjectImageCamerIcon: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    borderRadius: 10,
    top: height * 0.25,
    left: width * 0.84,
  },
  ProjectDetailBody: {
    padding: 22,
    backgroundColor: '#fff',
  },
  ProjectDetailTopicCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProjectDetailInfo: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  ProjectDetailInfoIcon: {
    paddingRight: 20,
  },
  ProjectDetailInfoContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProjectDetailDes: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
    marginBottom: 10,
  },
  ProjectDetailText1: {
    color: '#000',
    fontSize: 26,
    width: 300,
    fontFamily: 'PlayfairDisplay-Black',
  },
  ProjectDetailText2: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'NunitoSans-Regular',
  },
  ProjectDetailText3: {
    color: '#000',
    fontSize: 18,
    paddingTop: 15,
    fontFamily: 'NunitoSans-Black',
    paddingBottom: 5,
  },
  ProjectDetailText4: {
    color: '#009e60',
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
  },
  //Green Project Styles
  //Green Profile Styles
  ProfileContain: {
    padding: 22,
  },
  ProfileImageContain: {
    alignItems: 'center',
  },
  ProfileImage: {
    width: 120,
    height: 120,
  },
  ProfileCompanyName: {
    color: '#000',
    fontSize: 28,
    fontFamily: 'PlayfairDisplay-Black',
    paddingBottom: 10,
    textAlign: 'center',
  },
  ProfileCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#5e5e5e',
    borderRadius: 10,
    width: width * 0.9,
    marginTop: 10,
  },
  ProfileIcon: {
    width: 40,
    height: 40,
  },
  ProfileIconContain: {
    width: width * 0.15,
    borderRightWidth: 2,
    borderRightColor: '#5e5e5e',
  },
  ProfileText: {
    color: '#5e5e5e',
    fontSize: 16,
    fontFamily: 'NunitoSans-Bold',
    paddingLeft: 15,
    width: width * 0.6,
  },
  ProfileButtonContain: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  ProfileButton: {
    backgroundColor: '#009e60',
    padding: 15,
    borderRadius: 10,
    width: width * 0.43,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'NunitoSans-Black',
  },
  //Green Profile Styles
  //Updating Screen Styles
  BackButton: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginTop: 30,
    marginLeft: 22,
    width: 35,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScreenTopic: {
    padding: 25,
    marginTop: 35,
  },
  ScreenTopic1: {
    paddingLeft: 25,
    paddingTop: 10,
  },
  ScreenTopic3: {
    padding: 25,
    marginTop: 10,
  },
  InputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Updating Screen Styles
  //Update Project Image Screen Styles
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    height: 90,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
  },
  TopicText: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'PlayfairDisplay-Black',
  },
  ProfileUpdateTextContain: {
    padding: 20,
    alignItems: 'center',
  },
  UpdateImageBack: {
    width: width * 0.7,
    height: height * 0.41,
  },
  UpdateTextContain: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
    marginTop: 10,
    marginBottom: 20,
    padding: 20,
    width: width * 0.9,
  },
  UpdateText1: {
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'center',
    padding: 20,
    color: '#5e5e5e',
  },
  AddProjectlInfoBack: {
    width: width * 0.85,
    height: height * 0.35,
    borderRadius: 10,
    marginBottom: 10,
  },
  ActionButton: {
    paddingLeft: 325,
    paddingTop: 305,
  },
  ActionButton1: {
    paddingLeft: 400,
    paddingTop: 280,
  },
  ActionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  AddPersonalInfoIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProjText1: {
    fontSize: 18,
    fontFamily: 'NunitoSans-Regular',
    paddingBottom: 20,
  },
  //Update Project Image Screen Styles
});

export default Styles;
