import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 20px 20px;
`;

export const CompanyTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(10)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.primary.orange};
    margin-bottom: ${theme.responsive.value(10)}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.neutral.black};
    margin-bottom: ${theme.responsive.value(20)}px;
  `}
`;

export const Details = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(10)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral.grayish_blue};
    margin-bottom: ${theme.responsive.value(20)}px;
    line-height: 20px;
  `}
`;

export const PriceWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PriceDiscountWrapper = styled.View`
  flex-direction: row;
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.neutral.black};
    margin-right: 10px;
  `}
`;

export const DiscountBox = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary.pale_orange};
    width: ${theme.responsive.value(30)}px;
    height: ${theme.responsive.value(30)}px;
  `}
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const DiscountNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(13)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.primary.orange};
  `}
`;

export const LastPrice = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(13)}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.neutral.dark_grayish_blue};
    text-decoration: line-through;
  `}
`;
