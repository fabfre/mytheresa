import React, {useState} from 'react';
import {FlatList, FlatListProps, ListRenderItemInfo} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useCategory from './useCategory';
import {Discovery} from '../../types/database';
import LargeItem from '../../components/largeItem';

interface State {}
interface Props {}

const CategoryScreen = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [loading, discoveries] = useCategory();

  const renderLargeItem = (discovery: ListRenderItemInfo<Discovery>) => (
    <LargeItem
      title={discovery.item.title}
      imageUrl={discovery.item.poster_path}
      price={discovery.item.popularity}
    />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList data={discoveries} renderItem={renderLargeItem}></FlatList>
    </SafeAreaView>
  );
};

export default CategoryScreen;