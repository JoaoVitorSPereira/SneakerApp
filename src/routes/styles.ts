import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 50px 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(15)}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const Button = styled(TouchableOpacity)`
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Icon = styled(Ionicons)`
  font-size: ${({ theme }) => theme.responsive.value(20)}px;
`;
