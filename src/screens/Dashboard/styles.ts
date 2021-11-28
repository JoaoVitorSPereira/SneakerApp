import { Ionicons } from '@expo/vector-icons';
import { Modal, TouchableOpacity } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const CartModal = styled(Modal).attrs({
  animationType: 'fade',
  transparent: true,
})``;

export const AddToCartButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  height: ${({ theme }) => theme.responsive.value(50)}px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: ${({ theme }) =>
    getBottomSpace() + theme.responsive.value(20)}px;
`;

export const Icon = styled(Ionicons)`
  font-size: ${({ theme }) => theme.responsive.value(20)}px;
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export const AddToCartButtonText = styled.Text`
  font-size: ${({ theme }) => theme.responsive.value(15)}px;
  color: ${({ theme }) => theme.colors.neutral.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
