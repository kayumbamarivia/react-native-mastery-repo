import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import CoreComponents from './components/CoreComponents';
import APIs from './components/APIs';
import ModalComponent from './components/ModalComponent';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16 }}>🧙‍♂️ Grandmaster Jean's React Native Spellbook</Text>
        <CoreComponents />
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ backgroundColor: 'lightblue', padding: 10, marginVertical: 8 }}
        >
          <Text>Open Grandmaster Modal here</Text>
        </TouchableOpacity>
        <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <APIs />
      </ScrollView>
    </SafeAreaView>
  );
}
