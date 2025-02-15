"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

interface SidebarButtonProps {
  children: React.ReactNode;
  href: string;
  "data-testid"?: string;
}

const SidebarButton = ({
  href,
  children,
  "data-testid": testId,
}: SidebarButtonProps) => {
  const pathname = usePathname();

  return (
    <Button
      variant={pathname === href ? "secondary" : "ghost"}
      className="justify-start gap-2"
      asChild
      data-testid={testId}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default SidebarButton;
