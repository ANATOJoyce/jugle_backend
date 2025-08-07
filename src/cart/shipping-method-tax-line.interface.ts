import { Types } from "mongoose";

// Définition des types dans shipping-method-tax-line.interface.ts
export interface ShippingMethodTaxLine extends Document {
  id: string;
  description?: string;
  code: string;
  rate: number;
  provider_id?: string;
  tax_rate_id?: string;
  metadata?: Record<string, any>;
  shipping_method: Types.ObjectId ;
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface CreateShippingMethodTaxLineDTO {
  taux: number;
  code_taxe: string;
  shipping_method_id: string;
  metadata?: Record<string, any>;
}  