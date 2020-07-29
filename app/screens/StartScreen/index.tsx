import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Headline from '../../components/headline';
import SearchInputField from '../../components/searchInputField';
import Category from '../../components/category';
import HorizontalList from '../../components/horizontalListElement';
import Item from '../../components/item';
import LargeItem from '../../components/largeItem';
import useStart from './useStart';

interface State {}
interface Props {}

const StartScreen = () => {
  const [loading, genres, discoveries] = useStart();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Headline text={'Hallo Fabian'} style={{fontSize: 26}} />
        <SearchInputField placeholderText={'Lieblingsprodukt suchen'} />
        <HorizontalList headline={'Kategorien'} subheadline={'Unsere besten Angebote'} more={true}>
          {genres.map((genre) => (
            <Category text={genre.name} key={genre.id} />
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
            />
          ))}
        </HorizontalList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StartScreen;
