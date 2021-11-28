import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import AvatarPic from '../../../assets/images/avatar.png';
import { useProducts } from '../../context/CartContext';

import * as S from './styles';

interface HeaderProps extends TouchableOpacityProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const navigation = useNavigation();
  const [products] = useProducts();
  return (
    <S.Container>
      <S.IconLogoWrapper>
        <S.Button onPress={() => navigation.openDrawer()}>
          <S.Icon name='menu' />
        </S.Button>
        <S.Title>sneakers</S.Title>
      </S.IconLogoWrapper>
      <S.CartPhotoWrapper>
        <S.Button onPress={onOpenModal}>
          <S.ProductNumberBox>
            <S.ProductNumber>{products.length}</S.ProductNumber>
          </S.ProductNumberBox>
          <S.Icon name='ios-cart-outline' />
        </S.Button>
        <S.AvatarPhoto source={AvatarPic} />
      </S.CartPhotoWrapper>
    </S.Container>
  );
}
