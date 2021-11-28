import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  ${({ theme }) => css`
    height: ${theme.responsive.value(250)}px;
    top: ${theme.responsive.value(90)}px;
    left: ${theme.responsive.value(18)}px;
    background-color: ${theme.colors.neutral.white};
  `}
  border-radius: 10px;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  ${({ theme }) => css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.neutral.grayish_blue};
  `}
  padding: 20px 20px;
  width: 100%;
`;

export const CartTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.responsive.value(18)}px;
  `}
`;

export const ProductWrapper = styled.View`
  ${({ theme }) => css``}
  padding: 30px 20px;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const ProductPhoto = styled(Image)`
  ${({ theme }) => css`
    width: ${theme.responsive.value(50)}px;
    height: ${theme.responsive.value(50)}px;
  `}
  border-radius: 8px;
`;

export const TitlePriceWrapper = styled.View`
  ${({ theme }) => css``}
  margin-left: 15px;
`;

export const ProductTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.responsive.value(15)}px;
    color: ${theme.colors.neutral.grayish_blue};
  `}
  margin-bottom: 5px;
`;

export const ProductPriceMultiplierWrapper = styled.View`
  ${({ theme }) => css``}
  flex-direction: row;
`;

export const ProductPrice = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.responsive.value(15)}px;
    color: ${theme.colors.neutral.grayish_blue};
  `}
  margin-right: 5px;
`;

export const ProductMultiplier = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.responsive.value(15)}px;
    color: ${theme.colors.neutral.grayish_blue};
  `}
  margin-right: 5px;
`;

export const ProductTotal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.responsive.value(15)}px;
    color: ${theme.colors.neutral.very_dark_blue};
  `}
`;

export const IconButton = styled(TouchableOpacity)`
  position: absolute;
  right: 20px;
`;

export const Icon = styled(Ionicons)`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(18)}px;
    color: ${theme.colors.neutral.grayish_blue};
  `}
`;

export const Button = styled(TouchableOpacity)`
  width: 90%;
  height: ${({ theme }) => theme.responsive.value(55)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.orange};
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.responsive.value(15)}px;
    color: ${theme.colors.neutral.white};
  `}
`;

export const NoProduct = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.responsive.value(27)}px;
    color: ${theme.colors.neutral.grayish_blue};
    margin-bottom: ${theme.responsive.value(30)}px;
    margin-top: ${theme.responsive.value(50)}px;
  `}
`;
