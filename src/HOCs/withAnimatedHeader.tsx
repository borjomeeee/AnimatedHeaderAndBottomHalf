import React, {useEffect, useState} from 'react';
import * as RN from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';

const withAnimatedHeader = (
  WrappedComponent: React.FC,
  title: string,
) => () => {
  const navigation = useNavigation();

  const [canGoBack] = useState(navigation.canGoBack());
  const [titleHeight, setTitleHeight] = useState(0);
  const [headerIsOpened, setHeaderISOpened] = useState(false);

  const [animatedFontSize] = useState(new RN.Animated.Value(1));

  const [animatedHeaderHeight] = useState(new RN.Animated.Value(0));
  const [animatedHeaderS] = useState(new RN.Animated.Value(0));

  const onToggleShowHeader = () => {
    RN.Animated.parallel([
      RN.Animated.timing(animatedHeaderHeight, {
        toValue: +!headerIsOpened,
        duration: 200,
        useNativeDriver: false,
      }),
      RN.Animated.timing(animatedHeaderS, {
        toValue: +!headerIsOpened,
        duration: 10,
        useNativeDriver: false,
      }),
    ]).start();

    setHeaderISOpened((show) => !show);
  };

  const onLayoutTitle = (event: any) => {
    const {height, y} = event.nativeEvent.layout;

    setTitleHeight(height + y);
  };

  const handleScroll = (event: any) => {
    const {y} = event.nativeEvent.contentOffset;

    const mainTitleNeedHide = y >= titleHeight && !headerIsOpened;
    const mainTitleNeedShow = y < titleHeight && headerIsOpened;

    if (mainTitleNeedHide || mainTitleNeedShow) {
      onToggleShowHeader();
    }

    // Change main title font-size
    if (!headerIsOpened) {
      const value =
        (titleHeight - y) / titleHeight < 0
          ? 0
          : (titleHeight - y) / titleHeight;

      animatedFontSize.setValue(value);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: title,
      headerStyle: {
        elevation: 0,
        borderBottomWidth: animatedHeaderS,
        backgroundColor: canGoBack
          ? '#fff'
          : animatedHeaderS.interpolate({
              inputRange: [0, 0.999999999999, 1],
              outputRange: ['transparent', 'transparent', 'white'],
            }),
      },
      headerTitleContainerStyle: {
        opacity: animatedHeaderHeight,
        backgroundColor: '#fff',
      },
      headerRightContainerStyle: {
        opacity: animatedHeaderHeight,
      },
    });
  }, []);

  return (
    <RN.View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: canGoBack ? 0 : -60,
      }}>
      <RN.ScrollView onScroll={handleScroll} style={{paddingHorizontal: 20}}>
        <Header
          title={title}
          canGoBack={canGoBack}
          onLayout={onLayoutTitle}
          fontSize={animatedFontSize}
        />
        <WrappedComponent />
      </RN.ScrollView>
    </RN.View>
  );
};

export default withAnimatedHeader;
