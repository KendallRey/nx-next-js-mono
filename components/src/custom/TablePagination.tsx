"use client";

import React, { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import MuiPagination from "../pagination/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

import MuiTypography from "../typography/Typograph";
import MuiIconButton from "../icon-button/IconButton";
import { parseToPage } from "../helper/component";
import { useCallOnce } from "../hooks/useCallOnce";
import MuiMenu from "../menu/Menu";
import MuiMenuItem from "../menu-item/MenuItem";
import MuiList, { MuiListItemButton, MuiListItemText } from "../list/List";
import { getIndexOf } from "../helper/array";
import { RCE } from "../types";
import { toSearchParams } from "../helper/api";
import API from "../constants/API";

type ITablePagination = {
  count: number;
  limit?: number;
  name?: string;
};

const LIMIT_OPTIONS = [10, 25, 50, 100];
const DEFAULT_KEY = "page";

const TablePagination: React.FC<ITablePagination> = (props) => {
  const { name, limit, count } = props;

  const router = useRouter();
  const searchParams = useSearchParams(); // Get current search params
  const [searchValue, setSearchValue] = useState<string>(searchParams.get(name ?? DEFAULT_KEY) || "1");

  const updateSearchParams = useCallback(
    (query: string | number, overrideName?: string, additionalParams?: Record<string, any>) => {
      const params = toSearchParams(searchParams, additionalParams);
      if (query) {
        params.set(overrideName || name || DEFAULT_KEY, String(query)); // Set the query parameter
      } else {
        params.delete(overrideName || name || DEFAULT_KEY); // Remove the parameter if the query is empty
      }

      // Replace the URL without reloading the page
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams, name],
  );

  useEffect(() => {
    // Sync the input with the URL params when query param changes
    if (searchParams.get(name ?? DEFAULT_KEY) !== searchValue) {
      setSearchValue(searchParams.get(name ?? DEFAULT_KEY) || "1");
    }
  }, [searchParams, name]);

  const syncPage = useCallback(() => {
    const page = parseToPage(searchParams.get("page"), 1000);
    setPage(page);
  }, [searchParams]);

  useCallOnce(syncPage);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setSearchValue(String(page));
    updateSearchParams(String(page));
  };

  const pageCount = React.useMemo(() => {
    const _tempLimit = limit !== undefined ? Number(limit) : API.PARAMS.DEFAULT.LIMIT;
    const _limit = isNaN(_tempLimit) ? API.PARAMS.DEFAULT.LIMIT : _tempLimit;
    if (!count) return;
    return Math.ceil(count / _limit);
  }, [limit, count]);

  const [page, setPage] = useState(1);

  const onChangePage = useCallback(
    (e: RCE<HTMLInputElement>) => {
      const { value } = e.target;
      const page = parseToPage(value, pageCount ?? 1000);
      setPage(page);
    },
    [setPage, pageCount],
  );

  const onSubmitGotoPage = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      updateSearchParams(page, "page");
    },
    [page, updateSearchParams],
  );

  // #region Limit

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [selectedIndex, setSelectedIndex] = useState(getIndexOf(LIMIT_OPTIONS, limit, 10));

  const onClickLimitOptionView = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const onClickLimitOption = useCallback(
    (event: React.MouseEvent<HTMLElement>, index: number) => {
      setSelectedIndex(index);
      updateSearchParams(LIMIT_OPTIONS[index], "limit", { page: 1 });
      setAnchorEl(null);
    },
    [updateSearchParams],
  );

  const onCloseLimit = useCallback(() => {
    setAnchorEl(null);
  }, []);

  // #endregion

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <MuiPagination onChange={handleChange} page={Number(searchValue)} count={pageCount} />
      <MuiTypography>Go to page:</MuiTypography>
      <form onSubmit={onSubmitGotoPage}>
        <input
          className="border border-1 px-2 border-gray-400 w-[100px] text-center rounded"
          onChange={onChangePage}
          value={page}
          min={1}
          max={1000}
          maxLength={3}
          type="number"
        />
        <MuiIconButton size="small" color="primary" type="submit">
          Go
        </MuiIconButton>
      </form>
      <MuiList>
        <MuiListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={onClickLimitOptionView}
          className="flex gap-2"
        >
          <MuiListItemText secondary={"Rows per page:"} />
          <MuiListItemText primary={LIMIT_OPTIONS[selectedIndex]} />
        </MuiListItemButton>
      </MuiList>
      <MuiMenu id="lock-menu" anchorEl={anchorEl} open={open} onClose={onCloseLimit}>
        {LIMIT_OPTIONS.map((option, i) => (
          <MuiMenuItem
            key={option}
            disabled={i === selectedIndex}
            selected={i === selectedIndex}
            onClick={(event) => onClickLimitOption(event, i)}
          >
            {option}
          </MuiMenuItem>
        ))}
      </MuiMenu>
    </div>
  );
};

export default TablePagination;
