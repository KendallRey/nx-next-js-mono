"use client";

import MuiTextField from "@/components/text-field/TextField";
import { useAppDebounce } from "@/hooks/useDebouce";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { TEXT } from "../helper/field";
import { useCallOnce } from "../hooks/useCallOnce";

type ISearch = {
  label?: string;
  name?: string;
};

const DEFAULT_KEY = "q";

const Search: React.FC<ISearch> = (props) => {
  const { label, name } = props;

  const router = useRouter();
  const searchParams = useSearchParams(); // Get current search params
  const [searchValue, setSearchValue] = useState<string>(searchParams.get(name ?? DEFAULT_KEY) || "");

  const updateSearchParams = useCallback(
    (query: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (query) {
        params.set(name ?? DEFAULT_KEY, query); // Set the query parameter
      } else {
        params.delete(name ?? DEFAULT_KEY); // Remove the parameter if the query is empty
      }

      // Replace the URL without reloading the page
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams, name],
  );

  // Sync the input with the URL params when query param changes
  const syncURLParams = useCallback(() => {
    if (searchParams.get(name ?? DEFAULT_KEY) !== searchValue) {
      setSearchValue(searchParams.get(name ?? DEFAULT_KEY) || "");
    }
  }, [searchParams, name, searchValue]);

  useCallOnce(syncURLParams);

  const [deSearch] = useAppDebounce(searchValue);

  useEffect(() => {
    updateSearchParams(deSearch);
  }, [deSearch, updateSearchParams]);

  // Handle text field change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchValue(value);
  };

  return (
    <MuiTextField
      label={label || "Search"}
      name={name || label}
      value={searchValue}
      onChange={handleChange}
      fullWidth
      maxLength={TEXT.MAX.LONG}
    />
  );
};

export default Search;
