import { LayoutDashboard, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <div className="w-[272px] bg-white">
      {/* Image */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">STOCKLY</h1>
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/" data-testid="btn-dashboard">
          <LayoutDashboard size={20} />
          Dashboard
        </SidebarButton>

        <SidebarButton href="/products" data-testid="btn-product">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales" data-testid="btn-sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
