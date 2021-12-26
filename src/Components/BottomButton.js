import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Button, Modal} from 'react-native-paper';

import colors from '../constants/colors';
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_EXTRA_SMALL,
} from '../constants/fontsize';
import {Height, Width} from '../constants/dimension';

const BottomButton = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <View>
      <Button
        mode="contained"
        uppercase={false}
        style={styles.buttonStyles}
        onPress={showModal}>
        <Text style={styles.buttonText}>{'Deposit INR to wallet'}</Text>
      </Button>

      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </View>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: '#44CBB3',
    alignItems: 'center',
    justifyContent: 'center',
    height: Height / 18,
    marginTop: 16,
  },
  buttonText: {
    color: colors.WHITE,
    fontWeight: '700',
  },
});
