import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import { WalletList } from "./components/WalletList";
import { getMyWallet } from "./queries/queries";
import { AssetsSync } from "./components/AssetsSync";
import { TableWalletAssetRow } from "./TableWalletAssetRow";

export default async function MyWalletListPage({searchParams}: {searchParams: Promise<{wallet_id: string}>}) {
 
  const { wallet_id } = await searchParams;

  if (!wallet_id) {
    return <WalletList />;
  }

  const wallet = await getMyWallet(wallet_id);

  if (!wallet) {  
    return <WalletList />;
  }

  return (
    <div className="flex flex-col space-y-5">
      <article className="format">
        <h1>Minha Carteira</h1>
      </article>
      <div className="overflow-x-auto w-full">
        <Table className="w-full max-h-full table-fixed">
          <TableHead>
            <TableHeadCell>Ativo</TableHeadCell>
            <TableHeadCell>Cotação</TableHeadCell>
            <TableHeadCell>Quantidade</TableHeadCell>
            <TableHeadCell>Comprar/Vender</TableHeadCell>
          </TableHead>
          <TableBody>
            {wallet.assets.map((walletAsset, key) => (
              <TableWalletAssetRow walletAsset={walletAsset} key={key} walletId={wallet_id} />
            ))}
          </TableBody>
        </Table>
      </div>
      <AssetsSync assetsSymbols={wallet.assets.map(walletAsset => walletAsset.asset.symbol)} />
    </div>
  );
}
