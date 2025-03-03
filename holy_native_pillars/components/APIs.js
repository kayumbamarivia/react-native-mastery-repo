import React from 'react';
import { Alert, TouchableOpacity, Text, Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

const APIs = () => {

  const showAlert = () => {
    Alert.alert('Grandmaster Alert', 'You have summoned the Alert Spell!');
  };

  const copyToClipboard = () => {
    if (!isWeb) {
      alert('Clipboard is not supported on Web.');
    }
  };

  const vibratePhone = () => {
    if (!isWeb) {
      alert('Vibration is not supported on Web.');
    }
  };

  return (
    <React.Fragment>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 32 }}>React Native APIs ⚡</Text>
      <TouchableOpacity onPress={showAlert} style={{ backgroundColor: 'lightgreen', padding: 10, marginVertical: 8 }}>
        <Text>Cast Alert Spell</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={copyToClipboard} style={{ backgroundColor: 'lightcoral', padding: 10, marginVertical: 8 }}>
        <Text>Copy Secret Spell</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={vibratePhone} style={{ backgroundColor: 'lightgoldenrodyellow', padding: 10, marginVertical: 8 }}>
        <Text>Cast Vibration Spell</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default APIs;
