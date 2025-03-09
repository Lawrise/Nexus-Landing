import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import HoverPopover from "./HoverPopover";
import { ProductSubmenu } from "@/data";

const navItems = [
  {
    label: "Product",
    submenu: ProductSubmenu,
  },
  {
    label: "Pricing",
    link: "/princing",
  },
  {
    label: "Dowlonad",
    link: "/download",
  },
];

const Header: React.FC = () => {
  return (
    <div className="flex border-b border-gray-200 h-12 items-center justify-between px-4 text-md">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 bg-orange-300"></div>
          <p className="text-2xl font-bold">Nexus</p>
        </div>
        <div className="flex gap-2">
          {navItems.map((item) => {
            return (
              <HoverPopover key={item.label} title={item.label} submenu={item.submenu} />
            
            );
          })}
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="/login"
          className={`${buttonVariants({ variant: "ghost" })}`}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={`${buttonVariants({ variant: "default" })}`}
        >
          Get Nexus free
        </Link>
      </div>
    </div>
  );
};

export default Header;
