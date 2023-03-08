export interface GroceryType {
  title?: string;
  amount?: number;
  addedToCart: boolean;
}

export interface AddGroceryType {
  title: string;
  amount: number;
  addedToCart: boolean;
}
