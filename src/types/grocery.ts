export interface GroceryType {
  id?: string;
  title?: string;
  amount?: number;
  addedToCart?: boolean;
}

export interface AddGroceryType {
  title: string;
  amount: number;
  addedToCart: boolean;
}
