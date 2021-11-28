import React from 'react';

import * as S from './styles';

import SneakerOne from '../../../assets/images/sneaker1.png';
import SneakerTwo from '../../../assets/images/sneaker2.png';
import SneakerThree from '../../../assets/images/sneaker3.png';
import SneakerFour from '../../../assets/images/sneaker4.png';

const ImageSwiper: React.FC = () => {
  return (
    <S.Container>
      <S.PhotoSwiper
        nextButton={
          <S.Icon name='chevron-forward' style={{ marginRight: 10 }} />
        }
        prevButton={<S.Icon name='chevron-back' style={{ marginLeft: 10 }} />}
      >
        <S.Photo source={SneakerOne} />
        <S.Photo source={SneakerTwo} />
        <S.Photo source={SneakerThree} />
        <S.Photo source={SneakerFour} />
      </S.PhotoSwiper>
    </S.Container>
  );
};

export default ImageSwiper;
