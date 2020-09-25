import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesImages from '../../assets/images/give-classes-background.png';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesImages}
        style={styles.content}
      >
        <Text style={styles.title}>Want to be a Proffy?</Text>
        <Text style={styles.description}>To start, you need sign up as a teacher on our web platform.</Text>
      </ImageBackground>

      <RectButton
        style={styles.button}
        onPress={handleNavigateBack}
      >
        <Text style={styles.buttonText}>Ok</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses;