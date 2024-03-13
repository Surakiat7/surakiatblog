import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export default function NavbarElement({
  setIsSidebarOpen,
  isMenuOpen,
  setIsMenuOpen,
}: {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
    setIsSidebarOpen((prev) => !prev);
  };

  console.log(isMenuOpen, "isMenuOpen log");

  return (
    <Navbar
      isBordered={isMenuOpen}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={handleMenuToggle}
        />
        <p className="font-bold text-inherit hidden sm:block">
          ระบบบริหารจัดการงาน บช.ปส. Narcotics Suppression Bureau
        </p>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu className="text-center">
            <DropdownItem color="secondary">ข้อมูลส่วนตัว</DropdownItem>
            <DropdownItem color="secondary">เปลี่ยนรหัสผ่าน</DropdownItem>
            <DropdownItem color="danger">ออกจากระบบ</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
