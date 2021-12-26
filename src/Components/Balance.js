import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_EXTRA_SMALL,
} from '../constants/fontsize';
import {Height, Width} from '../constants/dimension';

const Balance = () => {
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.mainBalanceView}>
        <Icon name="rupee" size={24} color={colors.WHITE} />
        <Text style={styles.mainBalanceNumeric}>{'0.00'}</Text>
      </View>
      <Text style={styles.mainBalanceText}>{'Total INR Wallet Balance'}</Text>
      <View style={styles.subBalanceView}>
        <View style={styles.availableBalanceView}>
          <Text style={styles.subBalanceText}>{'Available'}</Text>
          <View style={[styles.row, {alignItems: 'center', marginTop: 4}]}>
            <Icon name="rupee" size={16} color={colors.WHITE} />
            <Text style={styles.subBalanceNumeric}>{'0.00'}</Text>
          </View>
        </View>
        <View style={styles.inoderView}>
          <Text style={styles.subBalanceText}>{'In order'}</Text>
          <View style={[styles.row, {alignItems: 'center', marginTop: 4}]}>
            <Icon name="rupee" size={16} color={colors.WHITE} />
            <Text style={styles.subBalanceNumeric}>{'0.00'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  balanceContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
  },
  mainBalanceView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
  mainBalanceNumeric: {
    fontSize: 32,
    color: colors.WHITE_VARIENT,
    marginLeft: 8,
  },
  mainBalanceText: {
    fontSize: FONT_SIZE_SMALL,
    color: colors.WHITE_VARIENT,
    fontWeight: '400',
  },
  subBalanceView: {
    flexDirection: 'row',
    marginVertical: 16,
    borderWidth: 0.2,
    borderColor: colors.BORDER,
    height: Height / 14,
  },
  subBalanceText: {
    fontSize: FONT_SIZE_EXTRA_SMALL,
    color: colors.GREY_VARIENT3,
    fontWeight: '400',
  },
  subBalanceNumeric: {
    fontSize: FONT_SIZE_MEDIUM,
    color: colors.WHITE_VARIENT,
    fontWeight: '400',
    marginLeft: 8,
  },
  availableBalanceView: {
    padding: 12,
    width: Width / 2.2,
    justifyContent: 'center',
  },
  inoderView: {
    padding: 12,
    width: Width / 2.2,
    justifyContent: 'center',
    borderLeftColor: colors.WHITE_VARIENT,
    borderLeftWidth: 0.2,
    borderColor: colors.BORDER,
  },

  headerText: {
    color: colors.WHITE_VARIENT,
    fontSize: FONT_SIZE_EXTRA_LARGE,
    fontWeight: 'bold',
    marginLeft: 24,
  },
});
