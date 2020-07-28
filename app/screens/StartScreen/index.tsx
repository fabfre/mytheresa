import React, {Component} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Headline from '../../components/headline';
import SearchInputField from '../../components/searchInputField';
import Category from '../../components/category';
import HorizontalList from '../../components/horizontalListElement';

interface State {}
interface Props {}

const StartScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Headline text={'Hallo Fabian'} style={{fontSize: 26}} />
        <SearchInputField placeholderText={'Lieblingsprodukt suchen'} />
        <HorizontalList headline={'Kategorien'} subheadline={'Unsere besten Angebote'} more={true}>
          <Category />
          <Category />
          <Category />
        </HorizontalList>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    backgroundColor: '#fff',
  },
});

export default StartScreen;
