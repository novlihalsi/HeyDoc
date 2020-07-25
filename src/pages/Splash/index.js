import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ICAppLogo} from '../../assets';
import {Gap} from '../../components';

export default function Splash() {
  return (
    <View style={styles.container}>
      <ICAppLogo width={100} height={100} />
      <Gap height={20} />
      <Text>Hey Doctor!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
