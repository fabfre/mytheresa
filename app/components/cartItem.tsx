import {Image, Text, View} from 'react-native';
import React from 'react';

type CartItemProp = {
  uri: string;
  title: string;
  price: number;
};

const CartItem = (props: CartItemProp) => (
  <View style={{flex: 1, marginHorizontal: 16}}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        alignItems: 'center',
      }}
    >
      <Image
        style={{width: 120, height: 90}}
        source={{uri: `https://image.tmdb.org/t/p/w300${props.uri}`}}
      />
      <Text style={{}}>{props.title}</Text>
      <Text style={{fontWeight: 'bold'}}>{`${props.price} $`}</Text>
    </View>
  </View>
);

export default CartItem;
