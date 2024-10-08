import React, { useState, useEffect } from 'react';
import { Input, Button } from '@nextui-org/react';
import { SearchIcon } from '../Icon/SearchIcon';
import { SearchButtonProps } from '@/types';

const SearchButton = ({ onSearch }: SearchButtonProps) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onSearch(query);
  }, [query]);

  const handleClearClick = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        classNames={{
          base: 'sm:max-w-full max-w-[14rem] h-10',
          mainWrapper: 'h-full',
          input: 'text-small',
          inputWrapper:
            'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
        }}
        placeholder="Search blog"
        size="sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        startContent={<SearchIcon size={18} />}
        type="search"
      />
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
