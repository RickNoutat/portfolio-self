import Link from "next/link.js";
import { Button } from "./ui/button";

// components
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Rick <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex">
          <h1>sldjaslkdjasd</h1>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;