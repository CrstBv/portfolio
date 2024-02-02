import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-2xl h-16 flex items-center justify-between">
        <div>
            <button>
                <Link href="/">
                    Home
                </Link>
            </button>
        </div>
        <div className="flex w-64 justify-end gap-4">
          <button>
            <Link href="#about">About me</Link>
          </button>

          <button>
            <Link href="#projects">Projects</Link>
          </button>
          <button>
            <Link href="#contact">Contact</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
