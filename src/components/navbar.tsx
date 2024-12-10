import { useState } from "react";
import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarUI
      className="bg-background/70 backdrop-blur-md fixed top-0 left-0 right-0 z-50"
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            className="font-bold text-inherit flex items-center gap-2"
            color="foreground"
            href="/"
          >
            <img
              alt="TrinUp Logo"
              className="h-8 w-auto"
              src="/logo_text_black.png"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className="font-medium transition-colors hover:text-primary"
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Button
            as={Link}
            className="font-medium"
            color="primary"
            href="/login"
            variant="flat"
          >
            Iniciar Sesión
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NavbarUI>
  );
};
