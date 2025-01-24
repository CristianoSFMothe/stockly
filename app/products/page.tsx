import { DataTable } from "../_components/ui/data-table";
import { productsTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import AddProductButton from "./_components/add-product-button";

export const revalidate = 10;

const Products = async () => {
  // chamar o banco de dados
  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      {/* Esquerda */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            {/* <span>Random Number API: {randomNumber}</span> */}
            Gestão de produtos
          </span>
          <p className="text-xl font-semibold">Produtos</p>
        </div>
        <AddProductButton />
      </div>
      {/* Direita */}
      <DataTable columns={productsTableColumns} data={products} />
    </div>
  );
};

export default Products;
