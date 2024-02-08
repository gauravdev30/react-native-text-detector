import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const WrapLoading = ({ loading, children }) => {
  return loading ? <ActivityIndicator size="large" color="#0000ff" /> : <View>{children}</View>;
};

export default WrapLoading;
