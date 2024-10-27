import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async ({ session }) => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2">
            <Image src={"/amul.png"} height={80} width={80} alt="Amul" />
          </Link>
          <MainNav data={categories} />
          <NavbarActions session={session} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
