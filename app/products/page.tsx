import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { productsTableColumns } from "./_components/table-columns";

const Products = async () => {
  const products = await db.product.findMany({});
  // chamar o banco de dados
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
      <DataTable columns={productsTableColumns} data={products} />
    </div>
  );
};

export default Products;
