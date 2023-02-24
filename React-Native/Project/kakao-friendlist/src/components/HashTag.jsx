import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HashTag = () => {
    return (
        <View style={styles.container}>
            <Text>HashTag</Text>
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