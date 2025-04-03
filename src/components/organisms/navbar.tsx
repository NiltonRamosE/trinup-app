import { useState, useEffect } from "react";
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
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ThemeSwitch } from "@/components/atoms/theme-switch";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarUI
      className={`fixed top-0 left-0 right-0 z-50 pt-4 transition-all duration-200 border-b ${
        hasScrolled
          ? "bg-white/80 dark:bg-[#222]/85 backdrop-blur-2xl shadow-md dark:shadow-lg border-gray-200 dark:border-gray-400/20"
          : "bg-transparent dark:bg-transparent backdrop-blur-0 border-transparent"
      }`}
      style={{
        backdropFilter: hasScrolled ? "blur(20px)" : "none",
      }}
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
            className="font-bold text-inherit flex items-center gap-2 dark:text-white transition-colors duration-200"
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
        {siteConfig.navItems.map((item) =>
          item.label === "Calculadora IMC" || item.label === "Ingesta de Agua" ? null : (
            <NavbarItem key={item.href}>
              <Link
                className="lg:mr-10 mr-10 sm:mr-4 font-bold text-lg transition-colors duration-200 hover:text-[#1D9A4F] dark:text-white"
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          )
        )}

        {/* Desplegable de herramientas de salud */}
        <NavbarItem
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Dropdown isOpen={isDropdownOpen}>
            <DropdownTrigger>
              <Link
                className="lg:mr-10 mr-10 sm:mr-4 font-bold text-lg transition-colors duration-200 hover:text-[#1D9A4F] dark:text-white cursor-pointer"
                color="foreground"
              >
                Herramientas de salud
              </Link>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Herramientas de salud"
              className="dark:bg-[#222] bg-white"
            >
              <DropdownItem key="/calculadoraIMC">
                <Link href="/calculadoraIMC" className="dark:text-white text-black">
                  Calculadora IMC
                </Link>
              </DropdownItem>
              <DropdownItem key="/calculadoraIA">
                <Link href="/calculadoraIA" className="dark:text-white text-black">
                  Ingesta de Agua
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

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

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) =>
            item.label === "Calculadora IMC" || item.label === "Ingesta de Agua" ? (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full dark:text-white text-black"
                  color="foreground"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ) : null
          )}
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
}
