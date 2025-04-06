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
              className="w-auto h-10 sm:h-8 lg:h-10 lg:ml-10"
              src="images/logo_text_green.webp"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {siteConfig.navItems.map((item) => (
            item.itemsDropdown ? (
              <NavbarItem
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              >
              <Dropdown 
                isOpen={isDropdownOpen}
                className="rounded-none mt-3 bg-white/80 dark:bg-[#222]/85 backdrop-blur-2xl shadow-md dark:shadow-lg border-gray-200 dark:border-gray-400/20"
              >
                <DropdownTrigger>
                  <Link
                    className="lg:mr-10 mr-10 sm:mr-4 font-bold text-lg transition-colors hover:text-primary"
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label={item.label}
                  items={item.itemsDropdown}
                >
                  {item.itemsDropdown.map((dropdownItem) => (
                    <DropdownItem key={dropdownItem.href} href={dropdownItem.href}>
                      {dropdownItem.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              </NavbarItem>
              
            ) : (
              <NavbarItem key={item.href}>
                <Link
                  className="lg:mr-10 mr-10 sm:mr-4 font-bold text-lg transition-colors hover:text-primary"
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            )
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
        <NavbarItem className="mt-5 ml-48">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {item.itemsDropdown ? (
                <div className="relative">
                <Link
                  className="text-lg transition-colors"
                  color="foreground"
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const menu = e.currentTarget.nextElementSibling;
                    if (menu) {
                      menu.classList.toggle('hidden');
                    }
                  }}
                >
                  {item.label}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </Link>
                <div className="hidden mt-2 w-full">
                  {item.itemsDropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.href}
                      className="block px-6 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      href={dropdownItem.href}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              </div>
              ) : (
                <Link
                  className="w-full"
                  color="foreground"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
        <NavbarItem>
          <Button
            as={Link}
            className="font-black mt-4 ml-4 text-xs bg-trinup-dark text-white dark:bg-trinup-light dark:text-trinup-dark"
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
