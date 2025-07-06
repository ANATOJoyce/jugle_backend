// Renommez le fichier en : filterable-line-item-tax-line-props.interface.ts (notez les tirets)
export interface FilterableLineItemTaxLineProps {
  id?: string[];
  q?: string;
  rate?: {
    lt?: number;
    gt?: number;
  };
  code?: string;
  provider_id?: string;
  tax_rate_id?: string;
}