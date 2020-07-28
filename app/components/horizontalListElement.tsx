import React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Subheadline from './subheadline';
import Headline from './headline';
import Category from './category';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

type ListProps = {
  children: JSX.Element[];
  more: boolean;
  subheadline: string;
  headline: string;
  style?: StyleProp<ViewStyle>;
};

const HorizontalList = (props: ListProps) => (
  <View>
    <Subheadline text={props.subheadline} style={{marginTop: 24}} />
    <Headline text={props.headline} />
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.contentContainer}
      >
        {props.children}
        {props.more && (
          <View style={style.moreIndicator}>
            <TouchableOpacity>
              <Icon name="angle-right" size={60} color={'#000'} />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  </View>
);

const style = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  moreIndicator: {
    width: 50,
    paddingRight: 8,
    alignItems: 'flex-end',
  },
});

export default HorizontalList;
