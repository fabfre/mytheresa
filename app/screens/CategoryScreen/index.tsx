import React, {useState} from 'react';
import {FlatList, Dimensions, ListRenderItemInfo} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useCategory from './useCategory';
import {Discovery} from '../../interfaces/database';
import LargeItem from '../../components/largeItem';
import Headline from '../../components/headline';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {MainStackParamList} from '../../Navigators';
import Subheadline from '../../components/subheadline';

type CategoryScreenRouteProp = RouteProp<MainStackParamList, 'Category'>;
type CategoryScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Category'>;

type CategoryScreenProps = {
  route: CategoryScreenRouteProp;
  navigation: CategoryScreenNavigationProp;
};

const deviceWidth = Dimensions.get('screen').width;

const CategoryScreen = (props: CategoryScreenProps): JSX.Element => {
  const genre = props.route.params.genre;
  const [page, setPage] = useState<number>(1);
  const [loading, discoveries] = useCategory(page, genre);

  const renderLargeItem = (discovery: ListRenderItemInfo<Discovery>) => (
    <LargeItem
      width={(deviceWidth - 48) / 2}
      title={discovery.item.title}
      imageUrl={discovery.item.poster_path}
      price={discovery.item.popularity}
      style={{marginHorizontal: 8}}
      onPress={() => props.navigation.navigate('Detail', {item: discovery.item})}
    />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Headline text={genre.name} style={{fontSize: 36}} />
      <Subheadline
        text={`Die besten ${genre.name} Filme, nur für dich`}
        style={{marginTop: 0, marginBottom: 16}}
      />
      <FlatList
        style={{marginHorizontal: 8}}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={discoveries}
        renderItem={renderLargeItem}
        onEndReached={() => setPage(page + 1)}
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;
