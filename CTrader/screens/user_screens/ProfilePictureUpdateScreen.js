import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Styles from '../../components/user_components/UserStyleComponent';
import SubHeaderComponent from '../../components/user_components/SubHeaderComponent';
import ImagePicker from 'react-native-image-crop-picker';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {AuthContext} from '../../navigation/user_navigations/AuthProvider';

const ProfilePictureUpdateScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [projectImage, setProjectImage] = useState('');

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    })
      .then(image => {
        const imageUri = image.path;
        setImage(imageUri);
      })
      .catch(e => {
        Alert.alert('Cancelled,', 'Your image capetering  cancelled...!');
      });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 1200,
      cropping: true,
    })
      .then(image => {
        const imageUri = image.path;
        setImage(imageUri);
      })
      .catch(e => {
        Alert.alert('Cancelled!', 'Your image selection cancelled...!');
      });
  };

  firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        setProjectImage(userdata.profileImage);
      }
    });

  const deleteImage = () => {
    if (projectImage != '') {
      const storageRef = storage().refFromURL(projectImage);
      const imageRef = storage().ref(storageRef.fullPath);
      imageRef
        .delete()
        .then(() => {
          console.log('Profile image has been deleted successfully.');
        })
        .catch(e => {
          console.log('Error while deleting the image. ', e);
        });
    } else {
      console.log('No image to delete.');
    }
  };

  const submitData = async () => {
    deleteImage();
    const imageUrl = await uploadImage();
    firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        profileImage: imageUrl,
      })
      .then(() => {
        console.log('Profile Image Updated');
        Alert.alert(
          'Updated,',
          'Your profile image has been updated Successfully...!',
        );
      })
      .catch(error => {
        console.log(
          'Something went wrong with added profile details to firestore.',
          error,
        );
        Alert.alert(
          'Error..!',
          'Something went wrong with added profile details to firestore.',
        );
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`users/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <View style={Styles.Container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <SubHeaderComponent
        Navigation={navigation}
        ScreenName={'Update Profile Picture'}
      />
      <View style={Styles.ProfileUpdateTextContain}>
        <View style={{paddingBottom: 20}}>
          {image != null ? (
            <Image
              source={{uri: image}}
              resizeMode="cover"
              style={Styles.UpdateProfileImage}
            />
          ) : (
            <Image
              source={require('../../assets/icons/image.png')}
              resizeMode="cover"
              style={Styles.ScanImageBack}
            />
          )}
          <ActionButton
            style={image != null ? Styles.ActionButton2 : Styles.ActionButton}
            buttonColor="#009e60">
            <ActionButton.Item
              buttonColor="#9b59b6"
              title="Take Photo"
              onPress={takePhotoFromCamera}>
              <Icon name="camera-outline" style={Styles.ActionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#3498db"
              title="Choose Photo"
              onPress={choosePhotoFromLibrary}>
              <Icon name="md-images-outline" style={Styles.ActionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
        <View style={Styles.ScanTextContain}>
          <Text style={Styles.ScanText1}>
            Capture or Upload your image to update your profile picture.
          </Text>
        </View>
        {uploading ? (
          <View style={Styles.AddPersonalInfoIndicator}>
            <Text style={Styles.ProfileText1}>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#009e60" />
          </View>
        ) : (
          <TouchableOpacity
            style={Styles.Button}
            onPress={image != null ? submitData : null}>
            <Text style={Styles.ButtonText}>Upload Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProfilePictureUpdateScreen;
