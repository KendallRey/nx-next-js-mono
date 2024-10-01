"use client";

import React, { useCallback } from "react";
import MuiFab from "../fab/Fab";
import MuiBox from "../box/Box";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PageActionBar = () => {
  const onScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const onScrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <MuiBox className="fixed flex flex-col gap-2 bottom-[25px] right-[25px]">
      <MuiFab size="small" color="primary" onClick={onScrollToTop}>
        <BiChevronUp fontSize={32} />
      </MuiFab>
      <MuiFab size="small" color="primary" onClick={onScrollToBottom}>
        <BiChevronDown fontSize={32} />
      </MuiFab>
    </MuiBox>
  );
};

export default PageActionBar;
