import { Ionicons } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => getStatusBarHeight() + theme.responsive.value(70)}px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  flex-direction: row;
`;

export const IconLogoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Icon = styled(Ionicons)`
  font-size: ${({ theme }) => theme.responsive.value(30)}px;
  margin-right: ${({ theme }) => theme.responsive.value(10)}px;
  margin-top: ${({ theme }) => theme.responsive.value(5)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(25)}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const CartPhotoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const AvatarPhoto = styled(Image)`
  ${({ theme }) => css`
    width: ${theme.responsive.value(35)}px;
    height: ${theme.responsive.value(35)}px;
  `}
`;

export const Button = styled(TouchableOpacity)``;

export const ProductNumberBox = styled.View`
  background-color: ${({ theme }) => theme.colors.primary.orange};
  align-items: center;
  width: ${({ theme }) => theme.responsive.value(20)}px;
  height: ${({ theme }) => theme.responsive.value(15)}px;
  border-radius: 6px;
  position: absolute;
  z-index: 2;
  right: 5px;
`;

export const ProductNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(12)}px;
    font-family: ${theme.fonts.bold};
  `}
`;
