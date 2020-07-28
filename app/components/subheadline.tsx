import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

type HeadlineProps = {
  text: String;
  style?: StyleProp<TextStyle>;
};

const Subheadline = (props: HeadlineProps) => (
  <Text style={[style.textStyle, props.style]}>{props.text}</Text>
);

const style = StyleSheet.create({
  textStyle: {
    marginTop: 16,
    color: 'gray',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
  },
});

export default Subheadline;
