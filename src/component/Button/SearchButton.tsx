import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from "@nextui-org/react";
import { SearchIcon } from "../Button/SearchIcon";

interface SearchButtonProps {
  onSearch: (query: string) => void;
}

const SearchButton = ({ onSearch }: SearchButtonProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    onSearch(query);
  };

  useEffect(() => {
    onSearch(query);
  }, [query]);

  const handleClearClick = () => {
    setQuery("");
    onSearch("");
  };

  const preventZoom = () => {
    document.body.style.touchAction = "none";
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=1"
      );
    }
  };

  const allowZoom = () => {
    document.body.style.touchAction = "auto";
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute("content", "width=device-width, initial-scale=1");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        ref={inputRef}
        classNames={{
          base: "sm:max-w-full max-w-[14rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Search blog"
        size="sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        startContent={<SearchIcon size={18} />}
        type="search"
        onFocus={preventZoom}
        onBlur={allowZoom}
      />
      <Button
        isIconOnly
        className="bg-gradient-to-br from-[#4EDFE7] to-[#00597B]"
        aria-label="Search"
        onClick={handleSearchClick}
      >
        <SearchIcon size={18} />
      </Button>
      {query && (
        <Button
          isIconOnly
          className="bg-red-500"
          aria-label="Clear"
          onClick={handleClearClick}
        >
          <span className="text-white">✕</span>
        </Button>
      )}
    </div>
  );
};

export default SearchButton;
