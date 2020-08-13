import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();
  function hadleNavigateBack() {
    goBack();
  }

  return( 
    <View style={styles.container}>
      <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImage} 
        style={styles.content}>
          <Text style={styles.title}>Quer ser um Proffy?</Text>        
          <Text style={styles.description}>
            Para começar você precisa se cadastrar como professor em nossa plataforma web.
          </Text>        
      </ImageBackground>
      <RectButton onPress={hadleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses;