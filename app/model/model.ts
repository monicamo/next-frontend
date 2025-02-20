export type Asset = {
  _id: string;
  name: string;
  symbol: string;
  price: number;
  image_url: string;
};

export type WalletAsset = {
  _id: string;
  asset: Asset;
  shares: number;
};

export type Wallet = {
  _id: string;
  assets: WalletAsset[];
};

export type Order = {
  _id: string; 
  asset: Asset;
  shares: number;
  partial: number
  price: number;
  type: OrderType;
  status: OrderStatus;
};

export enum OrderType {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum OrderStatus {
  OPEN = 'OPEN',
  PENDING = 'PENDING',
  PARTIAL = 'PARTIAL',
  CLOSED = 'CLOSED',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
}