"use client";

import { IconButton } from "@mui/material";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import MuiMenu from "./Menu";

type IActionMenu = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  icon?: ReactNode;
  iconButton?: ReactNode;
};

const ActionMenu = (props: IActionMenu) => {
  const { children, icon, open, setOpen, iconButton } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const _open = useMemo(() => Boolean(anchorEl || open), [anchorEl, open]);

  const handleOpen = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(e.currentTarget);
      if (setOpen) setOpen(true);
    },
    [setAnchorEl, setOpen],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <div onClick={handleOpen}>
        {iconButton ? (
          iconButton
        ) : (
          <IconButton
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            data-testid="action-menu"
          >
            {icon || <HiEllipsisVertical width={20} />}
          </IconButton>
        )}
      </div>
      <MuiMenu
        anchorEl={anchorEl}
        open={_open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        disableScrollLock
      >
        {children}
      </MuiMenu>
    </>
  );
};

export default ActionMenu;
