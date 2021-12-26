import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {TextInput} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_EXTRA_SMALL,
} from '../constants/fontsize';
import {Height, Width} from '../constants/dimension';

const Amount = () => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.amountView}>
      <Text style={styles.headerText}>{'Enter Deposit Amount'}</Text>
      <TextInput
        // label="Email"
        placeholder="e.g. ₹10,000 "
        placeholderTextColor={colors.WHITE_VARIENT}
        keyboardType="numeric"
        activeUnderlineColor="transparent"
        style={styles.textInput}
        theme={{colors: {text: colors.WHITE_VARIENT}}}
        value={text}
        onChangeText={text => setText(text)}
      />
      <View style={styles.bottomView}>
        <Text style={styles.bottomViewText1}>{'Minimum Deposit Amount'}</Text>
        <Text style={styles.bottomViewText2}>{'₹ 500'}</Text>
      </View>
    </View>
  );
};

export default Amount;

const styles = StyleSheet.create({
  amountView: {
    marginTop: 8,
  },
  headerText: {
    color: colors.WHITE_VARIENT,
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: '700',
  },
  textInput: {
    backgroundColor: '#23282C',
    marginVertical: 8,
    height: Height / 16,
    borderRadius: 4,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomViewText1: {
    color: colors.GREY_VARIENT3,
    fontSize: FONT_SIZE_SMALL,
    fontWeight: '300',
  },
  bottomViewText2: {
    color: colors.GREY_VARIENT3,
    fontSize: FONT_SIZE_SMALL,
    fontWeight: '500',
  },
});
