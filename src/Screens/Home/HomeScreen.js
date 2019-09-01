/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './HomeStyle';

export default class Home extends Component {
  componentDidMount = () => {
    this.props.getUser();
  };

  render() {
    const {results = []} = this.props.user;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {results.length
            ? results.map(item => {
                return <Text key={item.name.first}>{item.name.first}</Text>;
              })
            : 'loading .....'}
        </Text>
      </View>
    );
  }
}
