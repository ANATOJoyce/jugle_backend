// cart-address.dto.ts
import { Expose } from 'class-transformer';

export class CartAddressDTO {
  @Expose()
  id: string;

  @Expose()
  company: string;

  @Expose()
  first_name: string;

  @Expose()
  last_name: string;

  @Expose()
  address_1: string;

  @Expose()
  address_2: string;

  @Expose()
  city: string;

  @Expose()
  country_code: string;

  @Expose()
  province: string;

  @Expose()
  postal_code: string;

  @Expose()
  phone: string;

  @Expose()
  metadata: Record<string, any>;
}
