import { Expose, Type } from 'class-transformer';

export class CartShippingMethodDTO {
  @Expose()
  id: string; // ID du ShippingMethod

  @Expose()
  name: string;

  @Expose()
  amount: number;

  @Expose()
  cart_id: string; // ID du panier

  @Expose()
  description?: Record<string, any>;

  @Expose()
  metadata?: Record<string, any>;

  @Expose()
  is_tax_inclusive: boolean;

  @Expose()
  shipping_option_id?: string;

  @Expose()
  created_at: Date;

  @Expose()
  updated_at: Date;
}
