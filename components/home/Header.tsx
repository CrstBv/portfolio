import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl h-16 flex items-center justify-between">
        <div className="flex w-24 items-start">
          <Button variant="link">
            <Link href="/" >
                    Home
                </Link>
          </Button>
            
        </div>
        <nav className="flex w-64 justify-end gap-4 ">
          <Link href="#about" className="cursor-pointer hover:text-teal-400">
          Sobre mi
          </Link>
          <a href="#projects" className="cursor-pointer hover:text-teal-400">
            Proyectos
          </a>
          <a href="#contact" className="cursor-pointer hover:text-teal-400">
          Contacto
          </a>
        </nav>
        <div >
          <Button asChild className="h-8 rounded-xl">
            <Link href={"https://github.com/CrstBv"}>
              <Image
              src={"/assets/icons/github.svg"}
              width={20}
              height={20}
              alt="social"
              />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
