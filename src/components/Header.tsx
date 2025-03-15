"use client";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProductSubmenu, CommunitySubmenu } from "@/data";
import dynamic from "next/dynamic";

const HoverPopover = dynamic(() => import("./HoverPopover"), { ssr: false });

const navItems = [
  {
    label: "Product",
    submenu: ProductSubmenu,
  },
  {
    label: "Community Building",
    submenu: CommunitySubmenu,
  },
  {
    label: "Pricing",
    link: "/princing",
  },
  {
    label: "Download",
    link: "/download",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

const Header: React.FC = () => {
  return (
    <div className="flex border-b border-gray-200 h-12 items-center justify-between px-4 text-md">
      <div className="flex gap-4 items-center">
        <Link href="/" className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="30"
            zoomAndPan="magnify"
            viewBox="0 0 150 149.999998"
            height="30"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <g />
              <clipPath id="d550435fb2">
                <path
                  d="M 2.066406 2.066406 L 147.933594 2.066406 L 147.933594 147.933594 L 2.066406 147.933594 Z M 2.066406 2.066406 "
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="08eddb29a2">
                <path
                  d="M 8.816406 2.066406 L 141.183594 2.066406 C 144.914062 2.066406 147.933594 5.085938 147.933594 8.816406 L 147.933594 141.183594 C 147.933594 144.914062 144.914062 147.933594 141.183594 147.933594 L 8.816406 147.933594 C 5.085938 147.933594 2.066406 144.914062 2.066406 141.183594 L 2.066406 8.816406 C 2.066406 5.085938 5.085938 2.066406 8.816406 2.066406 Z M 8.816406 2.066406 "
                  clipRule="nonzero"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#d550435fb2)">
              <g clipPath="url(#08eddb29a2)">
                <path
                  fill="#000000"
                  d="M 2.066406 2.066406 L 147.933594 2.066406 L 147.933594 147.933594 L 2.066406 147.933594 Z M 2.066406 2.066406 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
            </g>
            <g fill="#ffffff" fillOpacity="1">
              <g transform="translate(20.643752, 101.999996)">
                <g>
                  <path d="M 56.140625 -53.390625 L 56.140625 0 L 43.703125 0 L 20.140625 -28.453125 L 20.140625 0 L 5.34375 0 L 5.34375 -53.390625 L 17.78125 -53.390625 L 41.34375 -24.9375 L 41.34375 -53.390625 Z M 56.140625 -53.390625 " />
                </g>
              </g>
            </g>
            <g fill="#ffffff" fillOpacity="1">
              <g transform="translate(82.123309, 101.999996)">
                <g>
                  <path d="M 30.890625 0 L 23.5 -10.828125 L 15.5625 0 L -0.15625 0 L 15.5625 -20.671875 L 0.3125 -41.34375 L 16.625 -41.34375 L 23.953125 -30.890625 L 31.578125 -41.34375 L 46.90625 -41.34375 L 31.65625 -21.203125 L 47.453125 0 Z M 30.890625 0 " />
                </g>
              </g>
            </g>
          </svg>
          <p className="text-2xl font-bold">Nexus</p>
        </Link>
        <div className="flex gap-2">
          {navItems.map((item) => {
            return (
              <HoverPopover
                key={item.label}
                title={item.label}
                submenu={item.submenu}
              />
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
