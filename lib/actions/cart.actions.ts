'use server';

import { CartItem } from '@/types';

export async function addItemToCart(data: CartItem) {
  return {
    success: true,
    message: 'Item added to the cart',
  };
}
