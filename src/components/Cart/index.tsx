import React from 'react';

import * as S from './styles';

import SneakerFour from '../../../assets/images/sneaker4.png';
import { TouchableOpacityProps } from 'react-native';
import { useProducts } from '../../context/CartContext';
import { sneaker } from '../../data/data';

interface CartItemProps extends TouchableOpacityProps {
  closeModal: () => void;
  amount: number;
}

export default function Cart({ closeModal }: CartItemProps) {
  const [products, , removeProductFromCart] = useProducts();
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.CartTitle>Cart</S.CartTitle>
      </S.TitleWrapper>
      {products.length === 0 ? (
        <S.NoProduct>No Product in Cart.</S.NoProduct>
      ) : null}
      {products.map((product) => (
        <S.ProductWrapper key={product.id}>
          <S.ProductPhoto source={SneakerFour} />
          <S.TitlePriceWrapper>
            <S.ProductTitle>{product.name}</S.ProductTitle>
            <S.ProductPriceMultiplierWrapper>
              <S.ProductPrice>${product.price}</S.ProductPrice>
              <S.ProductMultiplier>x {product.quantity}</S.ProductMultiplier>
              <S.ProductTotal>
                ${product.price * product.quantity}
              </S.ProductTotal>
            </S.ProductPriceMultiplierWrapper>
          </S.TitlePriceWrapper>
          <S.IconButton onPress={() => removeProductFromCart(sneaker)}>
            <S.Icon name='trash' />
          </S.IconButton>
        </S.ProductWrapper>
      ))}
      <S.Button onPress={closeModal}>
        <S.ButtonText>
          {products.length === 0 ? 'Go Back' : 'Checkout'}
        </S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
