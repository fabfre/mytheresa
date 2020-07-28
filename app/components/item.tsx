import React from 'react';
import {StyleProp, StyleSheet, Image, Text, TouchableOpacity, ViewStyle, View} from 'react-native';

type ItemProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  imageUrl: string;
  price: number;
};

const Item = (props: ItemProps) => (
  <TouchableOpacity style={[style.container, props.style]}>
    <Image style={style.image} source={{uri: `https://image.tmdb.org/t/p/w300${props.imageUrl}`}} />
    <View style={{paddingHorizontal: 4}}>
      <Text style={style.priceStyle}>{props.price} $</Text>
      <Text style={style.titleStyle}>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 4,
    justifyContent: 'center',
    width: 200,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    paddingBottom: 8,
  },
  image: {width: 200, height: 120},
  priceStyle: {fontSize: 16, fontWeight: '600', marginTop: 2},
  titleStyle: {fontSize: 18, fontWeight: '300', marginTop: 4},
});

export default Item;
