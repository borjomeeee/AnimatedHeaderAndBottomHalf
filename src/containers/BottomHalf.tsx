import React from 'react';
import * as RN from 'react-native';

import Modal from 'react-native-modal';

interface IBottomHalf {
  isVisible: boolean;
  onClose: () => void;
}

const BottomHalf: React.FC<IBottomHalf> = ({isVisible, onClose, children}) => {
  if (!isVisible) return <></>;

  return (
    <Modal
      testID={'modal'}
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      swipeDirection={['down']}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}>
      <RN.View
        style={{
          backgroundColor: '#fff',
          borderTopRightRadius: 7,
          borderTopLeftRadius: 7,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}>
        <RN.View
          style={{
            width: 50,
            height: 3,
            backgroundColor: '#d4d4d4',
            marginVertical: 15,
            alignSelf: 'center',
          }}
        />

        {children}
      </RN.View>
    </Modal>
  );
};

export default BottomHalf;
