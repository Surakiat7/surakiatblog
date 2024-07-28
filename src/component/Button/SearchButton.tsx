"use client";

import React from "react";
import { Navbar, Input } from "@nextui-org/react";
import { SearchIcon } from "../Button/SearchIcon";

const SearchButton = () => {
  return (
    <Input
      classNames={{
        base: "sm:max-w-full max-w-[14rem] h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Type to search the blog"
      size="sm"
      startContent={<SearchIcon size={18} />}
      type="search"
    />
  );
};

export default SearchButton;
