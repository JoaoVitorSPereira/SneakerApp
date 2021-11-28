import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.neutral.grayish_blue};
  margin-top: ${({ theme }) => theme.responsive.value(20)}px;
  border-radius: 10px;
`;

export const Button = styled(RectButton)``;

export const Icon = styled(FontAwesome)`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(17)}px;
  `}
`;

export const Number = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.neutral.very_dark_blue};
    font-size: ${theme.responsive.value(12)}px;
  `}
`;
