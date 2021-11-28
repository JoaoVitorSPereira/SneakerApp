import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  height: ${({ theme }) => theme.responsive.value(250)}px;
`;

export const PhotoSwiper = styled(Swiper).attrs({
  showsButtons: true,
  showsPagination: false,
})`
  justify-content: center;
`;

export const Photo = styled(Image)`
  width: 100%;
  height: ${({ theme }) => theme.responsive.value(250)}px;
`;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.neutral.black};
  background-color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.responsive.value(25)}px;
`;
