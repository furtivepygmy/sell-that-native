import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default ({ left, right, text, pressed }) => {
  return (
    <TouchableWithoutFeedback onPress={pressed}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 8,
          alignItems: 'center'
        }}
      >
        {left && (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Ionicons name="ios-arrow-round-back" color="#555" size={20} />
          </View>
        )}
        <View
          style={{
            flex: 10,
            alignItems: left ? 'flex-start' : 'flex-end',
            paddingBottom: 2
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#555'
            }}
          >
            {text}
          </Text>
        </View>
        {right && (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Ionicons name="ios-arrow-round-forward" color="#555" size={20} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
