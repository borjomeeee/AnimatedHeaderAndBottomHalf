import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import * as RN from 'react-native';

const TestPage = () => {
  const navigation = useNavigation();

  const [titleHeight, setTitleHeight] = useState(0);
  const [headerIsOpened, setHeaderISOpened] = useState(false);

  const [animatedFontSize] = useState(new RN.Animated.Value(1));
  const [headerHeight] = useState(new RN.Animated.Value(0));

  const onLayoutTitle = (event: any) => {
    const {height, y} = event.nativeEvent.layout;

    setTitleHeight(height + y);
  };

  const onShowHeader = () => {
    RN.Animated.timing(headerHeight, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const onCloseHeader = () => {
    RN.Animated.timing(headerHeight, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    navigation.setOptions({
      title: '[4424]. Сделать дизайн и плюс ко всему сайт',
      headerStyle: {
        elevation: 0,
        borderBottomWidth: headerHeight,

        // borderBottomColor: headerHeight.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: ['#fff', '#000']
        // })
      },
      headerTitleContainerStyle: {
        opacity: headerHeight,
      },
      headerRightContainerStyle: {
        opacity: headerHeight,
      },
      header: undefined,
    });
  }, []);

  const handleScroll = (event: any) => {
    const {y} = event.nativeEvent.contentOffset;

    if (y >= titleHeight && !headerIsOpened) {
      onShowHeader();
      setHeaderISOpened(true);
    } else if (y < titleHeight && headerIsOpened) {
      onCloseHeader();
      setHeaderISOpened(false);
    }

    if (!headerIsOpened) {
      const value =
        (titleHeight - y) / titleHeight < 0
          ? 0
          : (titleHeight - y) / titleHeight;

      animatedFontSize.setValue(value);
    }
  };

  return (
    <RN.View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <RN.View
        style={{
          flex: 1,
        }}>
        <RN.ScrollView
          style={{backgroundColor: '#fff', padding: 20}}
          onScroll={handleScroll}>
          <RN.View onLayout={onLayoutTitle}>
            <RN.Animated.Text
              style={{
                opacity: animatedFontSize,
                fontSize: animatedFontSize.interpolate({
                  inputRange: [0, 1],
                  outputRange: [24, 30],
                }),
                fontWeight: 'bold',
              }}>
              [4424]. Сделать дизайн и плюс ко всему сайт
            </RN.Animated.Text>
          </RN.View>
          <RN.View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <RN.Text style={{fontSize: 18}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              tristique purus. Mauris hendrerit consectetur nunc, sit amet
              dictum mi fermentum quis. Pellentesque pharetra tempus erat vitae
              suscipit. Cras at justo eleifend, mollis nisl nec, semper turpis.
              Mauris ut sapien lectus. Quisque scelerisque bibendum risus, vel
              varius velit congue nec. Cras nec commodo mi, vitae rutrum dolor.
              Aenean a mi augue. Cras ut urna orci. Integer ut malesuada erat.
              Nunc mauris lorem, porttitor sed tincidunt quis, rhoncus eu purus.
              Sed venenatis auctor sapien, quis pulvinar dui mollis
              pellentesque. In non dui commodo, auctor dolor vel, egestas nulla.
              Sed pulvinar, lacus sit amet vehicula varius, libero ligula
              dapibus diam, id iaculis augue dolor vehicula leo. Nullam ipsum
              mauris, imperdiet sagittis aliquam a, euismod sed mi. Sed
              venenatis pellentesque lectus. Mauris suscipit euismod convallis.
              Pellentesque dui libero, consectetur non mauris viverra, convallis
              venenatis lectus. Morbi erat sapien, feugiat sit amet tellus sed,
              ultrices condimentum leo. Nam mattis dignissim erat non rhoncus.
              Donec gravida elit vel dui dictum, in elementum neque blandit.
              Donec blandit consectetur arcu, sed aliquet purus viverra mattis.
              Mauris sit amet lacus elementum, luctus ligula sit amet, egestas
              sapien. Nulla id odio id sapien tempor imperdiet vel et ligula.
              Duis nec auctor nibh. Aliquam eleifend felis nibh, nec aliquet
              erat varius iaculis. Nunc quis massa et purus laoreet fermentum.
              Aenean accumsan condimentum ante sed molestie. Sed auctor leo at
              libero blandit, in volutpat dui consequat. In eu aliquet enim, nec
              mollis ex. Curabitur sit amet velit magna. Curabitur fermentum
              risus ut est aliquet, at consectetur nunc consectetur. Sed vitae
              cursus nunc. Integer et laoreet erat. Phasellus convallis
              consequat neque, a eleifend nunc luctus in. Nulla sit amet commodo
              dolor.
            </RN.Text>
          </RN.View>
        </RN.ScrollView>
      </RN.View>
    </RN.View>
  );
};

export default TestPage;
