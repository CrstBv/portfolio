import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl h-16 flex items-center justify-between">
        <div className="flex w-24 items-start">
          <Button variant="link">
            <Link href="/" >
                    {t("HomeLink.title")}
                </Link>
          </Button>
            
        </div>
        <nav className="flex w-64 justify-end gap-4 ">
          <Link href="#about" className="cursor-pointer hover:text-teal-400">
          {t("about-section.title")}
          </Link>
          <a href="#projects" className="cursor-pointer hover:text-teal-400">
            {t("projects-section.title")}
          </a>
          <a href="#contact" className="cursor-pointer hover:text-teal-400">
          {t("contact-section.title")}
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
