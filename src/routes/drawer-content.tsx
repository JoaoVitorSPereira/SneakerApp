import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { RootDrawerParamList } from './app.routes';

export default function DrawerContent() {
  const navigation = useNavigation<RootDrawerParamList>();
  return (
    <S.Container>
      <S.Button
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
      >
        <S.Icon name='close' />
      </S.Button>
      <S.Button>
        <S.Title>Collections</S.Title>
      </S.Button>
      <S.Button>
        <S.Title>Men</S.Title>
      </S.Button>
      <S.Button>
        <S.Title>Women</S.Title>
      </S.Button>
      <S.Button>
        <S.Title>About</S.Title>
      </S.Button>
      <S.Button>
        <S.Title>Contact</S.Title>
      </S.Button>
    </S.Container>
  );
}
