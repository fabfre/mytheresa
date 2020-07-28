import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

type CategoryProps = {
  style?: StyleProp<ViewStyle>;
};

const Category = (props: CategoryProps) => (
  <TouchableOpacity style={[style.container, props.style]}>
    <Text style={style.textStyle}>Comedy</Text>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    marginBottom: 8,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
});

export default Category;
