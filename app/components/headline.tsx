import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

type HeadlineProps = {
  text: String;
  style?: StyleProp<TextStyle>;
};

const Headline = (props: HeadlineProps) => (
  <Text style={[style.textStyle, props.style]}>{props.text}</Text>
);

const style = StyleSheet.create({
  textStyle: {
    marginLeft: 16,
    fontWeight: '700',
    fontSize: 24,
  },
});

export default Headline;
