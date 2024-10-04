import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Manohar Kumar <span className="text-accentg">.</span>
          </h1>
        </Link>

        {/* Computer Nav */}
        <div className="hidden xl:flex items-center gap-8 font-semibold">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">Mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
