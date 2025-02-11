import { deleteProduct } from "@/app/_actions/delete-product";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { toast } from "sonner";

interface IDeleteProductDialogProps {
  productId: string;
}

const DeleteProductDialogContent = ({
  productId,
}: IDeleteProductDialogProps) => {
  const handleContinueClick = async () => {
    try {
      await deleteProduct({ id: productId });

      toast.success("Produto excluído com sucesso!");
    } catch (error) {
      console.error(error);

      toast.error("Ocorreu um erro ao excluir o produto!");
    }
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Você tem certeza que deseja deletar?
        </AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a excluir este produto. Esta ação não poderá ser
          desfeita. Deseja continuar?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel data-testid="btn-cancel">Cancelar</AlertDialogCancel>
        <AlertDialogAction
          onClick={handleContinueClick}
          data-testid="btn-delete"
          className="bg-red-600 text-white hover:bg-red-700"
        >
          Continuar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteProductDialogContent;
