import { Asset, AssetDaily, Order, Wallet } from "../model/model";

export async function getAssets(): Promise<Asset[]> {
  const response = await fetch(`http://localhost:3000/assets`);
  return response.json();
}


export async function getMyWalletXXX(walletId: string): Promise<Wallet> {
  const response = await fetch(`http://localhost:3000/wallets/${walletId}`);
  
  return response.json();
}

export async function getMyWallet(walletId: string): Promise<Wallet> {
  console.log("🚀 ~ getMyWallet ~ walletId:", walletId)
  const response = await fetch(`http://localhost:3000/wallets/${walletId}`);

  console.log("🚀 ~ getMyWallet ~ response:", response)
  if (!response.ok) {
    throw new Error("Wallet not found");
  }

  return response.json();
}

export async function getOrders(walletId: string): Promise<Order[]> {
  const response = await fetch(
    `http://localhost:3000/orders?walletId=${walletId}`
  );
  return response.json();
}


export async function getAssetDailies(
  assetSymbol: string
): Promise<AssetDaily[]> {
  const response = await fetch(
    `http://localhost:3000/assets/${assetSymbol}/dailies`
  );
  return response.json();
}