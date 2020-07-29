import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import Headline from '../../components/headline';
import Subheadline from '../../components/subheadline';
import {CartState} from '../../interfaces/states';
import CartItem from '../../components/cartItem';
import CtaButton from '../../components/ctaButton';

/**type CartScreenRouteProp = RouteProp<MainStackParamList, 'Cart'>;
type CartScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Cart'>;

type CartScreenProps = {
  route: CartScreenRouteProp;
  navigation: CartScreenNavigationProp;
};**/

const CartScreen = (): JSX.Element => {
  const cartState: CartState = useSelector((state) => state.cart as CartState);
  return (
    <SafeAreaView style={style.container}>
      <Headline text={'Warenkorb'} style={{fontSize: 36}} />
      <Subheadline
        text={`Du hast ${cartState.amount} Elemente im Warenkorb`}
        style={{paddingBottom: 24}}
      />
      <FlatList
        style={style.list}
        numColumns={1}
        keyExtractor={(item) => Math.random().toString(36).substring(7)}
        showsVerticalScrollIndicator={false}
        data={cartState.items}
        renderItem={(item) => (
          <CartItem
            title={item.item.title}
            uri={item.item.backdrop_path}
            price={item.item.popularity}
          />
        )}
        ListFooterComponent={() => (
          <View style={style.footer}>
            <Headline text={`Summe: ${cartState.price.toFixed(2)} $`} />
            <CtaButton text={'Bestellung abschicken'} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    marginTop: 8,
    marginBottom: 8,
    paddingBottom: 48,
  },
  footer: {
    flex: 1,
    marginTop: 24,
  },
});

export default CartScreen;