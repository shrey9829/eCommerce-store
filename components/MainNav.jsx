"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MainNav = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route._id}`,
    label: route.name,
    active: pathname === `/category/${route._id}`,
  }));

  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-semibold transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-400"
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
