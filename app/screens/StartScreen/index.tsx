import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Headline from '../../components/headline';
import SearchInputField from '../../components/searchInputField';
import Category from '../../components/category';
import HorizontalList from '../../components/horizontalListElement';
import Item from '../../components/item';
import LargeItem from '../../components/largeItem';
import useStart from './useStart';
import {MainStackParamList} from '../../Navigators';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

type StartScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

type StartScreenProps = {
  navigation: StartScreenNavigationProp;
};

const StartScreen = (props: StartScreenProps) => {
  const [loading, genres, discoveries] = useStart();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={style.headlineContainer}>
          <Headline text={'Hallo Fabian'} style={{fontSize: 26}} />
          <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size={36} color={'#000'} />
          </TouchableOpacity>
        </View>
        <SearchInputField placeholderText={'Lieblingsprodukt suchen'} />
        <HorizontalList headline={'Kategorien'} subheadline={'Unsere besten Angebote'} more={true}>
          {genres.map((genre) => (
            <Category
              text={genre.name}
              key={genre.id}
              onPress={() => props.navigation.navigate('Category', {genre})}
            />
          ))}
        </HorizontalList>
        <HorizontalList
          headline={'Empfehlungen für dich'}
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
        <HorizontalList
          headline={'Von Experten ausgesucht'}
          subheadline={'Das könnte dir gefallen'}
          more={false}
        >
          {discoveries.slice(6, 12).map((discovery) => (
            <LargeItem
              key={discovery.id}
              title={discovery.title}
              imageUrl={discovery.poster_path}
              price={discovery.popularity}
              onPress={() => props.navigation.navigate('Detail', {item: discovery})}
            />
          ))}
        </HorizontalList>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headlineContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
});

export default StartScreen;
