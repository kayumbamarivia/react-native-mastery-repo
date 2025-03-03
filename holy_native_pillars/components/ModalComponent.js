import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

const ModalComponent = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal visible={modalVisible} transparent={true}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 8 }}>
          <Text>🧙‍♂️ Modal Spell is here!</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: 'blue', marginTop: 10 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
ModalComponent.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
};

export default ModalComponent;
