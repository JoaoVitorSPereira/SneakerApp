import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import AddButton from '../../components/AddButton';
import Cart from '../../components/Cart';
import Header from '../../components/Header';
import ImageSwiper from '../../components/ImageSwiper';
import SneakerDetail from '../../components/SneakerDetail';
import { useProducts } from '../../context/CartContext';
import { sneaker } from '../../data/data';

import * as S from './styles';

export default function Dashboard() {
  const [showCartModal, setShowCartModal] = useState(false);
  const [productsQuantity, setProductsQuantity] = useState(0);
  const [, addProductToCart] = useProducts();

  function handleCloseModal() {
    setShowCartModal(false);
  }

  function handleOpenModal() {
    setShowCartModal(true);
  }
  return (
    <S.Container>
      <Header onOpenModal={() => handleOpenModal()} />
      <ScrollView style={{ width: '100%' }}>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <S.CartModal
            visible={showCartModal}
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 2,
                height: 2,
              },
            }}
          >
            <Cart closeModal={() => handleCloseModal()} />
          </S.CartModal>
          <ImageSwiper />
          <SneakerDetail />
          <AddButton
            onAdd={() => setProductsQuantity(productsQuantity + 1)}
            onRemove={() =>
              setProductsQuantity(Math.max(productsQuantity - 1, 0))
            }
            quantity={productsQuantity}
          />
          <S.AddToCartButton
            onPress={() => addProductToCart(sneaker, productsQuantity)}
          >
            <S.Icon name='cart' />
            <S.AddToCartButtonText>Add to Cart</S.AddToCartButtonText>
          </S.AddToCartButton>
        </View>
      </ScrollView>
    </S.Container>
  );
}
