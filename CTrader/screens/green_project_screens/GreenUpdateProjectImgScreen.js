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
import Styles from '../../components/green_project_components/ProjectStyleComponent';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {AuthContext} from '../../navigation/green_project_navigations/AuthProvider';

const GreenUpdateProjectImgScreen = ({navigation}) => {
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
        Alert.alert('Cancelled...!', 'Your image capetering  cancelled!');
      });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
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
    .collection('green_projects')
    .doc(user.uid)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        var userdata = documentSnapshot.data();
        setProjectImage(userdata.projImage);
      }
    });

  const deleteImage = () => {
    if (projectImage != '') {
      const storageRef = storage().refFromURL(projectImage);
      const imageRef = storage().ref(storageRef.fullPath);
      imageRef
        .delete()
        .then(() => {
          console.log('Project image has been deleted successfully.');
        })
        .catch(e => {
          console.log(e.message);
          Alert.alert('Error..!', 'Something went wrong with delete image.');
        });
    } else {
      console.log('No image to delete.');
    }
  };

  const submitData = async () => {
    deleteImage();
    const imageUrl = await uploadImage();
    firestore()
      .collection('green_projects')
      .doc(user.uid)
      .update({
        projImage: imageUrl,
      })
      .then(() => {
        console.log('Project Image Updated');
        Alert.alert(
          'Project Image Added!',
          'Your project image has been added Successfully!',
        );
      })
      .catch(error => {
        console.log(error.message);
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

    const storageRef = storage().ref(`green_projects/${filename}`);
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
      <View style={Styles.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IoniconsIcons
            name="chevron-back"
            color={'#000'}
            size={25}
            style={Styles.BackIcon}
          />
        </TouchableOpacity>
        <Text style={Styles.TopicText}>Add Project Image</Text>
        <Text />
      </View>
      <View style={Styles.ProfileUpdateTextContain}>
        <View>
          {image != null ? (
            <Image
              source={{uri: image}}
              resizeMode="cover"
              style={Styles.AddProjectlInfoBack}
            />
          ) : (
            <Image
              source={require('../../assets/icons/image.png')}
              resizeMode="cover"
              style={Styles.UpdateImageBack}
            />
          )}
          <ActionButton
            style={image != null ? Styles.ActionButton1 : Styles.ActionButton}
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
        <View style={Styles.UpdateTextContain}>
          <Text style={Styles.UpdateText1}>
            Capture or Upload your green project image to show your green
            project.
          </Text>
        </View>
        {uploading ? (
          <View style={Styles.AddPersonalInfoIndicator}>
            <Text style={Styles.ProjText1}>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#009e60" />
          </View>
        ) : (
          <TouchableOpacity
            style={Styles.Button}
            onPress={image != null ? submitData : null}>
            <Text style={Styles.ButtonText}>Update Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default GreenUpdateProjectImgScreen;
