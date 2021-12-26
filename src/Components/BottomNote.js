import React from 'react';
import {View, Text} from 'react-native';

import Colors from '../constants/colors';
import {Height, Width} from '../constants/dimension';

const BottomNote = () => {
  return (
    <View
      style={{
        backgroundColor: '#23282C',
        borderRadius: 4,
        height: Height / 16,
        padding: 6,
      }}>
      <Text
        style={{
          color: Colors.WHITE_VARIENT,
          fontSize: 12,
          fontWeight: '300',
        }}>
        {'Deposit Should be made only from this bank account  '}
        <Text
          style={{
            color: Colors.WHITE_VARIENT,
            fontSize: 12,
            fontWeight: 'bold',
            lineHeight: 18,
          }}>
          {'5462542685215'}
        </Text>
      </Text>
    </View>
  );
};

export default BottomNote;
