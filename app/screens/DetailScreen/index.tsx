import React, {useRef, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import Headline from '../../components/headline';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {MainStackParamList} from '../../Navigators';
import {Dimensions, Animated, Image, Text, View, StyleSheet} from 'react-native';
import Subheadline from '../../components/subheadline';
import Item from '../../components/item';
import HorizontalList from '../../components/horizontalListElement';
import useStart from '../StartScreen/useStart';
import CtaButton from '../../components/ctaButton';
import {addCartItem} from '../../logic/cart/actions';

type DetailScreenRouteProp = RouteProp<MainStackParamList, 'Detail'>;
type DetailScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Detail'>;

type CategoryScreenProps = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

const height: number = Dimensions.get('screen').height * 0.6;
const width: number = Dimensions.get('screen').width;

const DetailScreen = (props: CategoryScreenProps): JSX.Element => {
  const item = props.route.params.item;
  const yOffset = useRef(new Animated.Value(0)).current;
  const [loading, _, discoveries] = useStart();
  const dispatch = useDispatch();

  const addToCart = () => dispatch(addCartItem(item));

  return (
    <View style={{flex: 1}}>
      <Animated.Image
        source={{uri: `https://image.tmdb.org/t/p/w342/${item.poster_path}`}}
        style={[
          style.header,
          {
            height: yOffset.interpolate({
              inputRange: [-10, 0, 200, 201],
              outputRange: [height + 10, height, height - 150, height - 150],
            }),
          },
        ]}
      />
      <Animated.ScrollView
        onScroll={(e) => {
          yOffset.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <Animated.View
          style={{
            paddingTop: height,
            backgroundColor: '#000',
            opacity: yOffset.interpolate({
              inputRange: [-1, 0, height / 2, (height + 1) / 2],
              outputRange: [0, 0, 0.6, 0.6],
            }),
          }}
        />
        <View style={style.content}>
          <View style={style.contentDetail}>
            <View>
              <Headline text={item.title} style={{marginTop: 10}} />
              <Subheadline text={'Ein einmaliges Angebot'} style={{marginTop: 4}} />
            </View>
            <Text style={style.price}>{item.popularity} $</Text>
          </View>
          <Image
            style={style.detailImage}
            source={{uri: `https://image.tmdb.org/t/p/w300${item.backdrop_path}`}}
          />
          <CtaButton
            text={'Zum Warenkorb hinzufügen'}
            onPress={addToCart}
            style={{marginTop: 24}}
          />
          <HorizontalList
            headline={'Das könnte dir auch gefallen'}
            subheadline={'Nur für dich ausgewählt'}
            more={false}
          >
            {discoveries.slice(0, 6).map((discovery) => (
              <Item
                key={discovery.id}
                title={discovery.title}
                imageUrl={discovery.backdrop_path}
                price={discovery.popularity}
                onPress={() => props.navigation.navigate('Detail', {item: discovery})}
              />
            ))}
          </HorizontalList>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    position: 'absolute',
    width: '100%',
  },
  content: {
    flex: 1,
    minHeight: height,
    backgroundColor: '#fff',
    paddingBottom: 48,
  },
  contentDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 16,
  },
  detailImage: {
    marginTop: 24,
    alignSelf: 'center',
    width: width - 32,
    marginHorizontal: 16,
    height: 250,
  },
});

export default DetailScreen;
