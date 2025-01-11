import { z } from 'zod';
import { insertProductsSchema } from '@/lib/validators';

export type Product = z.infer<typeof insertProductsSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
