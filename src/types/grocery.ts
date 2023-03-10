export interface GroceryType {
  id?: string;
  grocery?: string;
  amount?: number;
  addedToCart?: boolean;
}

export interface AddGroceryType {
  grocery: string;
  amount: number;
  addedToCart: boolean;
}
