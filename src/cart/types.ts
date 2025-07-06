import { Document } from 'mongoose';

export interface BaseShippingMethod {
  id: string;
  name: string;
  description?: Record<string, any>;
  amount: number;
  is_tax_inclusive: boolean;
  shipping_option_id?: string;
  metadata?: Record<string, any>;
}

export interface BaseShippingMethodTaxLine {
  id: string;
  code: string;
  rate: number;
  description?: string;
  provider_id?: string;
  tax_rate_id?: string;
  metadata?: Record<string, any>;
}

export interface BaseShippingMethodAdjustment {
  id: string;
  description?: string;
  code?: string;
  amount: number;
  provider_id?: string;
  metadata?: Record<string, any>;
  promotion_id?: string;
  shipping_method: string;
  deleted_at?: Date | null;
}

export type ShippingMethodDocument = BaseShippingMethod & Document;
export type ShippingMethodTaxLineDocument = BaseShippingMethodTaxLine & Document;
export type ShippingMethodAdjustmentDocument = BaseShippingMethodAdjustment & Document;