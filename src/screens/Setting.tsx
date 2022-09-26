import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScreenNavigationProps} from './Home';
import {styles} from '../styles/globalStyles';

const Setting = ({navigation}: ScreenNavigationProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.contatiner}>
        <Text style={{fontSize: 24, margin: 20}}>This is Settings Screen</Text>
      </View>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.btnText}>Go to Main screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
