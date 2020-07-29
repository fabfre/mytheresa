import React, {useRef, useState} from 'react';
import Headline from '../../components/headline';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {MainStackParamList} from '../../Navigators';
import {Dimensions, Animated, Image, TouchableOpacity, Text, View} from 'react-native';
import Subheadline from '../../components/subheadline';
import Item from '../../components/item';
import HorizontalList from '../../components/horizontalListElement';
import useStart from '../StartScreen/useStart';

interface State {}

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
  const [loading, genres, discoveries] = useStart();

  return (
    <View style={{flex: 1}}>
      <Animated.Image
        source={{uri: `https://image.tmdb.org/t/p/w342/${item.poster_path}`}}
        style={{
          position: 'absolute',
          width: '100%',
          height: yOffset.interpolate({
            inputRange: [-10, 0, 100, 101],
            outputRange: [height + 10, height, height - 50, height - 50],
          }),
        }}
      />
      <Animated.ScrollView
        onScroll={(e) => {
          yOffset.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <Animated.View
          style={{
            paddingTop: height,
            backgroundColor: 'black',
            opacity: yOffset.interpolate({
              inputRange: [-1, 0, height / 2, (height + 1) / 2],
              outputRange: [0, 0, 0.6, 0.6],
            }),
          }}
        />
        <View style={{flex: 1, minHeight: height, backgroundColor: '#fff', paddingBottom: 48}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
          >
            <View>
              <Headline text={item.title} style={{backgroundColor: 'white', marginTop: 10}} />
              <Subheadline text={'Ein einmaliges Angebot'} style={{marginTop: 4}} />
            </View>
            <Text style={{fontSize: 24, fontWeight: 'bold', paddingRight: 16}}>
              {item.popularity} $
            </Text>
          </View>
          <Image
            style={{
              marginTop: 24,
              alignSelf: 'center',
              width: width - 32,
              marginHorizontal: 16,
              height: 250,
            }}
            source={{uri: `https://image.tmdb.org/t/p/w300${item.backdrop_path}`}}
          />
          <TouchableOpacity>
            <View
              style={{
                marginTop: 16,
                flex: 1,
                marginHorizontal: 16,
                borderRadius: 24,
                height: 48,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{fontSize: 20, color: 'white'}}>Jetzt zum Warenkorb hinzufügen</Text>
            </View>
          </TouchableOpacity>
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

export default DetailScreen;
