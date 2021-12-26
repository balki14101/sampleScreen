import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

import Icon from 'react-native-vector-icons/Feather';
import {
  FONT_SIZE_NORMAL,
  FONT_SIZE_LARGE,
  FONT_SIZE_EXTRA_LARGE,
} from '../constants/fontsize';

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-left" size={24} color={colors.WHITE} />
      <Text style={styles.headerText}>{'Deposit INR'}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    // padding: 12,
  },
  headerText: {
    color: colors.WHITE_VARIENT,
    fontSize: FONT_SIZE_EXTRA_LARGE,
    fontWeight: 'bold',
    marginLeft: 24,
  },
});
