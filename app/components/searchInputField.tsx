import React from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Headline from './headline';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

type SearchInputFieldProps = {
  placeholderText: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
  iconColor?: string;
};

const SearchInputField = (props: SearchInputFieldProps) => (
  <View style={[style.container, props.style]}>
    <Icon
      name="search"
      size={props.iconSize ? props.iconSize : 20}
      color={props.iconColor ? props.iconColor : '#000'}
    />
    <TextInput placeholder={props.placeholderText} style={[style.inputField, props.inputStyle]} />
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'black',
    marginHorizontal: 16,
    height: 48,
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    height: 48,
    paddingHorizontal: 8,
  },
});

export default SearchInputField;
