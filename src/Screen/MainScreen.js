import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Button, Modal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Height} from '../constants/dimension';
import colors from '../constants/colors';
import {FONT_SIZE_MEDIUM} from '../constants/fontsize';

import Header from '../Components/Header';
import Balance from '../Components/Balance';
import Amount from '../Components/Amount';
import BottomNote from '../Components/BottomNote';
import BottomButton from '../Components/BottomButton';

const MainScreen = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.appContainer}>
      <View>
        <Header />
        <Balance />
        <Amount />
      </View>
      <View>
        <BottomNote />
        <Button
          mode="contained"
          uppercase={false}
          style={styles.buttonStyles}
          onPress={showModal}>
          <Text style={styles.buttonText}>{'Deposit INR to wallet'}</Text>
        </Button>
      </View>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}>
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>{'Contact customer support'}</Text>
          <Icon
            name="close"
            size={24}
            color={colors.WHITE_VARIENT}
            onPress={hideModal}
          />
        </View>
        <Text style={styles.modelContentText}>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu aliquam lectus venenatis, elit, diam egestas viverra.'
          }
        </Text>
        <Button
          mode="contained"
          uppercase={false}
          style={styles.buttonStyles}
          onPress={hideModal}>
          <Text style={styles.buttonText}>{'Contact chat support'}</Text>
        </Button>
      </Modal>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.BLACK,
    padding: 12,
    justifyContent: 'space-between',
  },
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
  containerStyle: {
    padding: 16,
    marginHorizontal: 12,
    backgroundColor: '#1A1E21',
    borderRadius: 4,
  },
  modalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modelContentText: {
    color: colors.WHITE_VARIENT,
    fontSize: 12,
    fontWeight: '300',
  },
  modalHeader: {
    color: colors.WHITE_VARIENT,
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: '700',
  },
});
