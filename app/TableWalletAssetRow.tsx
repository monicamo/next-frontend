
'use client';

import { Button, TableCell, TableRow } from "flowbite-react";
import { AssetShow } from "./components/AssetShow";
import Link from "next/link";
import { WalletAsset } from "./model/model";
import { useAssetStore } from "./store";

export function TableWalletAssetRow(props: { walletAsset: WalletAsset, walletId: string; }) {
    const { walletAsset, walletId } = props;
    
    const assetFound = useAssetStore((state) => 
        state.assets.find((a) => a.symbol === walletAsset.asset.symbol)
    );

    const asset = assetFound || walletAsset.asset;
    
    return (
        <TableRow>
        <TableCell>
          <AssetShow asset={asset} />
        </TableCell>
        <TableCell>R$ {asset?.price}</TableCell>
        <TableCell>{walletAsset.shares}</TableCell>
        <TableCell>
          <Button color="light" as={Link} href={`/assets/${asset?.symbol}?wallet_id=${walletId}`}>Comprar/Vender</Button>
        </TableCell>
      </TableRow>
    );
}

 