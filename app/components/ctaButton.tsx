import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';

type CtaButtonProps = {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const CtaButton = (ctaButtonProps: CtaButtonProps) => (
  <TouchableOpacity onPress={ctaButtonProps.onPress}>
    <View style={[style.container, ctaButtonProps.style]}>
      <Text style={style.textStyle}>{ctaButtonProps.text}</Text>
    </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 24,
    height: 48,
    backgroundColor: '#00CC99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default CtaButton;
