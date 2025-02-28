"use client";

import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import UpsertSheetContent from "./upsert-sheet-content";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { Product } from "@prisma/client";
import { useState } from "react";

interface CpsertSaleButtonProps {
  products: Product[];
  productOptions: ComboboxOption[];
}

const CpsertSaleButton = (props: CpsertSaleButtonProps) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);

  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <Button data-testid="btn-new-sales">Nova Venda</Button>
      </SheetTrigger>
      <UpsertSheetContent setSheetIsOpen={setSheetIsOpen} {...props} />
    </Sheet>
  );
};

export default CpsertSaleButton;
