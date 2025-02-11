import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Product } from "@prisma/client";
import {
  ClipboardCopyIcon,
  EditIcon,
  MoreHorizontalIcon,
  TrashIcon,
} from "lucide-react";
import { useState } from "react";
import UpsertProductDialogContent from "./upsert-dialog-content";
import DeleteProductDialogContent from "./delete-dialog-content";

interface IProductTableDropdownMenuProps {
  product: Product;
}

const ProductTableDropdownMenu = ({
  product,
}: IProductTableDropdownMenuProps) => {
  const [editDialogOpen, setDialogOpen] = useState(false);

  return (
    <AlertDialog>
      <Dialog open={editDialogOpen} onOpenChange={setDialogOpen}>
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
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              <ClipboardCopyIcon size={16} />
              Copiar ID
            </DropdownMenuItem>
            <DialogTrigger asChild>
              <DropdownMenuItem className="gap-1.5" data-testid="delete">
                <EditIcon size={16} />
                Editar
              </DropdownMenuItem>
            </DialogTrigger>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem className="gap-1.5" data-testid="delete">
                <TrashIcon size={16} />
                Deletar
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <UpsertProductDialogContent
          defaultValues={{
            id: product.id,
            name: product.name,
            price: Number(product.price),
            stock: product.stock,
          }}
          onSuccess={() => setDialogOpen(false)}
        />
        <DeleteProductDialogContent productId={product.id} />
      </Dialog>
    </AlertDialog>
  );
};

export default ProductTableDropdownMenu;
