import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { productsTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";

const Products = async () => {
  // chamar o banco de dados
  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      {/* Esquerda */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de produtos
          </span>
          <p className="text-xl font-semibold">Produtos</p>
        </div>
        <Button className="add-product gap-2">
          <PlusIcon size={20} />
          Novo Produto
        </Button>
      </div>
      {/* Direita */}
      <DataTable
        columns={productsTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default Products;
