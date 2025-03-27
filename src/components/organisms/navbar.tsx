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

import { ThemeSwitch } from "@/components/atoms/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavbarUI
      className="fixed top-0 left-0 right-0 z-50 pt-4 transition-colors"
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
              className="w-auto lg:h-10 h-10 sm:h-8 lg:ml-10"
              src="images/logo_text_green.webp"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className="lg:mr-10 mr-10 sm:mr-4 font-bold text-lg transition-colors hover:text-primary"
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
            className="font-black text-xs bg-trinup-dark text-white dark:bg-trinup-light dark:text-trinup-dark"
            color="primary"
            href="/login"
            variant="flat"
          >
            Iniciar Sesión
          </Button>
        </NavbarItem>
        <NavbarItem className="ml-10">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="block sm:hidden" justify="end">
        <NavbarItem className="mt-5 ml-24">
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
        <NavbarItem>
          <Button
            as={Link}
            className="font-black text-xs bg-trinup-dark text-white dark:bg-trinup-light dark:text-trinup-dark"
            color="primary"
            href="/login"
            variant="flat"
          >
            Iniciar Sesión
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </NavbarUI>
  );
};
