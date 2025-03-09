import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    label: "Product",
    link: "/",
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
        <div className="flex gap-4 ml-auto">
          {navItems.map((item) => {
            return (
              <a key={item.label} href={item.link} className="text-md">
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white border-0">
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
		  <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="bg-white">Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

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
