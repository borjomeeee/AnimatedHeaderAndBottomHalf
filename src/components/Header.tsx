import React from 'react';
import * as RN from 'react-native';

interface IHeader {
  title: string;
  canGoBack: boolean;

  onLayout: (e: RN.LayoutChangeEvent) => void;
  fontSize: RN.Animated.Value;
}

const Header: React.FC<IHeader> = ({title, canGoBack, fontSize, onLayout}) => {
  return (
    <RN.View
      onLayout={onLayout}
      style={{
        paddingTop: canGoBack ? 0 : 30,
      }}>
      <RN.Animated.Text
        style={{
          opacity: fontSize,
          fontSize: fontSize.interpolate({
            inputRange: [0, 1],
            outputRange: [24, 30],
          }),
          fontWeight: 'bold',
        }}>
        {title}
      </RN.Animated.Text>
    </RN.View>
  );
};

export default Header;
