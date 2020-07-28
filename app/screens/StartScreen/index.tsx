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
import Subheadline from '../../components/subheadline';
import Category from '../../components/category';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

interface State {}
interface Props {}

const StartScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Headline text={'Hallo Fabian'} style={{fontSize: 26}} />
        <SearchInputField placeholderText={'Lieblingsprodukt suchen'} />
        <View>
          <Subheadline text={'Unsere besten Angebote'} style={{marginTop: 24}} />
          <Headline text={'Kategorien'} />
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 12, marginTop: 16, alignItems: 'center'}}
          >
            <Category />
            <Category />
            <Category />
            <View style={{width: 50, paddingRight: 8, alignItems: 'flex-end'}}>
              <TouchableOpacity>
                <Icon name="angle-right" size={60} color={'#000'} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
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
