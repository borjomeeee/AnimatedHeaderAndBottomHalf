import {useNavigation} from '@react-navigation/native';
import React from 'react';
import * as RN from 'react-native';

const Page = () => {
  const navigation = useNavigation();

  const handleClick = () => navigation.navigate('TestPage');

  return (
    <RN.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <RN.TouchableOpacity
        onPress={handleClick}
        delayPressIn={0}>
          <RN.Text style={{fontWeight: 'bold', fontSize: 30, color: 'blue'}}>
            Hello, world!
          </RN.Text>
      </RN.TouchableOpacity>
    </RN.View>
  );
};

export default Page;
