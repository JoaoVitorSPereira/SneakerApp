import { IProduct } from './IProduct';

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICartContext {
  products: ICartItem[];
  setProducts: (products: ICartItem[]) => void;
}
