import { ComboboxOption } from "../_components/ui/combobox";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";
import { getSales } from "../_data-access/sale/get-sales";
import CreateSaleButton from "./_components/create-sale-button";
import { salaTableColumns } from "./_components/table-columns";

const SalesPage = async () => {
  const sales = await getSales();

  const products = await getProducts();

  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de vendas
          </span>
          <p className="text-xl font-semibold">Venda</p>
        </div>
        <CreateSaleButton products={products} productOptions={productOptions} />
      </div>

      <DataTable columns={salaTableColumns} data={sales} />
    </div>
  );
};

export default SalesPage;
