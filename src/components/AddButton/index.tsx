import React from 'react';

import * as S from './styles';

interface AddButtonProps {
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function AddButton({
  quantity,
  onAdd,
  onRemove,
}: AddButtonProps) {
  return (
    <S.Container>
      <S.Button onPress={onRemove}>
        <S.Icon name='minus' />
      </S.Button>
      <S.Number>{quantity}</S.Number>
      <S.Button onPress={onAdd}>
        <S.Icon name='plus' />
      </S.Button>
    </S.Container>
  );
}
