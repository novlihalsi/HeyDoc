import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {ICAppLogo, IMGGetStarted} from '../../assets';
import {Button, Gap} from '../../components';

export default function GetStarted() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={IMGGetStarted} style={styles.bg}>
        <View>
          <ICAppLogo />
          <Gap height={91} />
          <Text style={styles.desc}>
            Konsultasi dengan dokter jadi lebih mudah & fleksibel
          </Text>
        </View>
        <View>
          <Button title="Get Started" />
          <Gap height={16} />
          <Button title="Sign In" type="secondary" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: 28,
    color: 'white',
    lineHeight: 34,
  },
});
