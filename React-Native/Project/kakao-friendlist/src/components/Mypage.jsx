import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MyPage = () => {
    return (
        <View style={styles.container}>
            <Text>My page</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  });