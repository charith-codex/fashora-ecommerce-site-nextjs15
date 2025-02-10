import { z } from 'zod';
import {
  insertProductsSchema,
  insertCartSchema,
  cartItemSchema,
  shippingAddressSchema,
  insertOrderSchema,
  insertOrderItemSchema,
  paymentResultSchema,
} from '@/lib/validators';

export type Product = z.infer<typeof insertProductsSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
export type OrderItem = z.infer<typeof insertOrderItemSchema>;
export type Order = z.infer<typeof insertOrderSchema> & {
  id: string;
  createdAt: Date;
  isPaid: Boolean;
  paidAt: Date | null;
  isDelivered: Boolean;
  deliveredAt: Date | null;
  orderItems: OrderItem[];
  user: { name: string; email: string };
};

export type PaymentResult = z.infer<typeof paymentResultSchema>;
