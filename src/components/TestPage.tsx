import React, {useState} from 'react';
import * as RN from 'react-native';
import BottomHalf from '../containers/BottomHalf';

import withAnimatedHeader from '../HOCs/withAnimatedHeader';

const TestPage = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <RN.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }}>
      <RN.Button
        title="Открыть модалку"
        onPress={setVisibleModal.bind(null, true)}
      />

      <RN.Text style={{fontSize: 18, marginTop: 20}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
        tristique purus. Mauris hendrerit consectetur nunc, sit amet dictum mi
        fermentum quis. Pellentesque pharetra tempus erat vitae suscipit. Cras
        at justo eleifend, mollis nisl nec, semper turpis. Mauris ut sapien
        lectus. Quisque scelerisque bibendum risus, vel varius velit congue nec.
        Cras nec commodo mi, vitae rutrum dolor. Aenean a mi augue. Cras ut urna
        orci. Integer ut malesuada erat. Nunc mauris lorem, porttitor sed
        tincidunt quis, rhoncus eu purus. Sed venenatis auctor sapien, quis
        pulvinar dui mollis pellentesque. In non dui commodo, auctor dolor vel,
        egestas nulla. Sed pulvinar, lacus sit amet vehicula varius, libero
        ligula dapibus diam, id iaculis augue dolor vehicula leo. Nullam ipsum
        mauris, imperdiet sagittis aliquam a, euismod sed mi. Sed venenatis
        pellentesque lectus. Mauris suscipit euismod convallis. Pellentesque dui
        libero, consectetur non mauris viverra, convallis venenatis lectus.
        Morbi erat sapien, feugiat sit amet tellus sed, ultrices condimentum
        leo. Nam mattis dignissim erat non rhoncus. Donec gravida elit vel dui
        dictum, in elementum neque blandit. Donec blandit consectetur arcu, sed
        aliquet purus viverra mattis. Mauris sit amet lacus elementum, luctus
        ligula sit amet, egestas sapien. Nulla id odio id sapien tempor
        imperdiet vel et ligula. Duis nec auctor nibh. Aliquam eleifend felis
        nibh, nec aliquet erat varius iaculis. Nunc quis massa et purus laoreet
        fermentum. Aenean accumsan condimentum ante sed molestie. Sed auctor leo
        at libero blandit, in volutpat dui consequat. In eu aliquet enim, nec
        mollis ex. Curabitur sit amet velit magna. Curabitur fermentum risus ut
        est aliquet, at consectetur nunc consectetur. Sed vitae cursus nunc.
        Integer et laoreet erat. Phasellus convallis consequat neque, a eleifend
        nunc luctus in. Nulla sit amet commodo dolor.
      </RN.Text>

      <BottomHalf
        isVisible={visibleModal}
        onClose={setVisibleModal.bind(null, false)}>
        <RN.Text style={{paddingVertical: 15, fontSize: 18}}>
          Hello, world
        </RN.Text>
        <RN.View style={{height: 1, backgroundColor: '#c4c4c4'}} />

        <RN.Text style={{paddingVertical: 15, fontSize: 18}}>
          Hello, world
        </RN.Text>
        <RN.View style={{height: 1, backgroundColor: '#c4c4c4'}} />

        <RN.Text style={{paddingVertical: 15, fontSize: 18}}>
          Hello, world
        </RN.Text>
        <RN.View style={{height: 1, backgroundColor: '#c4c4c4'}} />

        <RN.Text style={{paddingVertical: 15, fontSize: 18}}>
          Hello, world
        </RN.Text>
        <RN.View style={{height: 1, backgroundColor: '#c4c4c4'}} />
      </BottomHalf>
    </RN.View>
  );
};

export default withAnimatedHeader(
  TestPage,
  '[4424]. Сделать дизайн и плюс ко всему сайт',
);
