"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/platform-capital-logo.png"
            alt="Platform Capital"
            className="w-24"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={`transition-colors hover:text-foreground/80 ${
              pathName === "/" ? "text-primary" : ""
            }`}>
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80">
            About
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="p-0 text-inherit">
                Investments
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/investments/verticals">Investment Verticals</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/investments/portfolio">Portfolio</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/team"
            className="transition-colors hover:text-foreground/80">
            Team
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="p-0 text-inherit">
                Initiatives
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/unicorn-group">Unicorn Group</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/diatom-impact">Diatom Impact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/events"
            className="transition-colors hover:text-foreground/80">
            Events
          </Link>
          <Link
            href="/press"
            className="transition-colors hover:text-foreground/80">
            Press
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}>
          <Menu className="h-8 w-8" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/images/platform-capital-logo.png"
                  alt="Platform Capital"
                  className="w-24"
                />
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-8 w-8" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="grid gap-2 p-4 text-lg bg-white border-t">
              <Link
                href="/about"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                Home
              </Link>
              <Link
                href="/about"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                About
              </Link>
              <Link
                href="/investments/verticals"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                Investment Verticals
              </Link>
              <Link
                href="/investments/portfolio"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                Portfolio
              </Link>
              <Link
                href="/team"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                Our Team
              </Link>
              <Link
                href="/unicorn-group"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                Unicorn Group
              </Link>
              <Link
                href="/diatom-impact"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                Diatom Impact
              </Link>
              <Link
                href="/events"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                Events
              </Link>
              <Link
                href="/press"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                Press
              </Link>
              <Link
                href="/contact"
                className="py-2 hover:text-primary"
                onClick={toggleMenu}>
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
