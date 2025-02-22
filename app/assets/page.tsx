import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import { WalletList } from "../components/WalletList";
import { getAssets, getMyWallet } from "../queries/queries";
import { AssetsSync } from "../components/AssetsSync";
import { TableAssetRow } from "./TableAssetRow";

export default async function AssetsListPage({searchParams}: {searchParams: Promise<{wallet_id: string}>}) {
 
  const { wallet_id } = await searchParams;

  if (!wallet_id) {
    return <WalletList />;
  }

  const wallet = await getMyWallet(wallet_id);

  if (!wallet) {  
    return <WalletList />;
  }

  const assets = await getAssets();
  console.log("🚀 ~ AssetsListPage ~ assets:", assets)

  return (
    <div className="flex flex-col space-y-5">
      <article className="format">
        <h1>Ativos</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-h-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {assets.map((asset, key) => (
              <TableAssetRow asset={asset} key={key} walletId={wallet_id} />
            ))}
          </TableBody>
        </Table>
      </div>
      <AssetsSync assetsSymbols={assets.map(asset => asset.symbol)} />
    </div>
  );
}
