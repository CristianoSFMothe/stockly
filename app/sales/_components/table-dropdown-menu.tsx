import { deleteSale } from "@/app/_actions/sale/delete-sale";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import {
  ClipboardCopyIcon,
  EditIcon,
  MoreHorizontalIcon,
  TrashIcon,
} from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import UpsertSheetContent from "./upsert-sheet-content";
import { useState } from "react";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { ProductDto } from "@/app/_data-access/product/get-products";
import { SaleDto } from "@/app/_data-access/sale/get-sales";

interface SaleTableDropdownMenuProps {
  sale: Pick<SaleDto, "id" | "saleProduct">;
  productOptions: ComboboxOption[];
  products: ProductDto[];
}
const SaleTableDropdownMenu = ({
  sale,
  products,
  productOptions,
}: SaleTableDropdownMenuProps) => {
  const [upsertSheetIsOpen, setUpsertSheetIsOpen] = useState(false);

  const { execute } = useAction(deleteSale, {
    onSuccess: () => {
      toast.success("Venda deletada com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao deletar a venda!");
    },
  });

  const handleCopyToClipboardClick = () => {
    navigator.clipboard.writeText(sale.id);

    toast.success("ID copiado para a área de transferência com sucesso.");
  };

  const handlerConfirmaDeleteClick = () => execute({ id: sale.id });

  return (
    <Sheet open={upsertSheetIsOpen} onOpenChange={setUpsertSheetIsOpen}>
      <AlertDialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreHorizontalIcon size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="gap-1.5"
              data-testid="copy-id"
              onClick={handleCopyToClipboardClick}
            >
              <ClipboardCopyIcon size={16} />
              Copiar ID
            </DropdownMenuItem>

            <SheetTrigger asChild>
              <DropdownMenuItem className="gap-1.5" data-testid="delete">
                <EditIcon size={16} />
                Editar
              </DropdownMenuItem>
            </SheetTrigger>

            <AlertDialogTrigger asChild>
              <DropdownMenuItem className="gap-1.5" data-testid="delete">
                <TrashIcon size={16} />
                Deletar
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Você tem certeza que deseja deletar?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Você está prestes a excluir esta venda. Esta ação não poderá ser
              desfeita. Deseja continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-testid="btn-cancel">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handlerConfirmaDeleteClick}
              data-testid="btn-delete"
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <UpsertSheetContent
        saleId={sale.id}
        productOptions={productOptions}
        products={products}
        setSheetIsOpen={setUpsertSheetIsOpen}
        defaultSelectProduct={sale.saleProduct.map((saleProduct) => ({
          id: saleProduct.productId,
          quantity: saleProduct.quantity,
          name: saleProduct.productName,
          price: saleProduct.unitPrice,
        }))}
      />
    </Sheet>
  );
};

export default SaleTableDropdownMenu;
