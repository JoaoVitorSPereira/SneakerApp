import React from 'react';

import * as S from './styles';

const SneakerDetail: React.FC = () => {
  return (
    <S.Container>
      <S.CompanyTitle>SNEAKER COMPANY</S.CompanyTitle>
      <S.Title>Fall Limited Edition Sneakers</S.Title>
      <S.Details>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </S.Details>
      <S.PriceWrapper>
        <S.PriceDiscountWrapper>
          <S.Price>$125.00</S.Price>
          <S.DiscountBox>
            <S.DiscountNumber>50%</S.DiscountNumber>
          </S.DiscountBox>
        </S.PriceDiscountWrapper>
        <S.LastPrice>$250.00</S.LastPrice>
      </S.PriceWrapper>
    </S.Container>
  );
};

export default SneakerDetail;
