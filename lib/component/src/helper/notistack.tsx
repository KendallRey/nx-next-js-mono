"use client";

import { OptionsObject, SnackbarMessage, enqueueSnackbar, closeSnackbar } from "notistack";
import { Typography } from "@mui/material";
import React from "react";
import { HiCheckCircle, HiXCircle, HiXMark } from "react-icons/hi2";
import { formatToLabel } from "./component";

type ICustomSnackbar = OptionsObject & { title?: string; message?: SnackbarMessage };

const DEFAULT_PROPS: ICustomSnackbar = {
  variant: "success",
  autoHideDuration: 5000,
  anchorOrigin: { vertical: "top", horizontal: "right" },
};

const OVERRIDE_PROPS: ICustomSnackbar = {};

export const customEnqueueSnackbar = (props: ICustomSnackbar) => {
  const { message, variant, title, ...otherProps } = props;
  return enqueueSnackbar({
    ...DEFAULT_PROPS,
    ...props,
    ...OVERRIDE_PROPS,
  });
};

type IDisplaySnackbar = {
  status?: unknown;
  action: INotifMessageAction;
  message?: string;
  name?: symbol | number | string | null;
  variant?: "default" | "error" | "success" | "warning" | "info";
};

export const displaySnackbar = (props: IDisplaySnackbar) => {
  const { status, action, name, variant } = props;
  if (variant) {
    customEnqueueSnackbar({
      variant: variant,
      message: <NotifMessage item={name} action={action} />,
    });
    return;
  }
  if (variant || action) {
    customEnqueueSnackbar({
      variant: variant,
      message: <NotifMessage item={name} action={action} />,
    });
    return;
  }
  const _status = Boolean(status);
  if (!_status)
    customEnqueueSnackbar({
      variant: "error",
      message: <NotifMessage action={action} status="failed" />,
    });
  else
    customEnqueueSnackbar({
      variant: "success",
      message: <NotifMessage item={name} action={action} />,
    });
};

type INotifMessageAction = "create" | "update" | "delete" | "hide" | "unhide" | "upload" | "loading" | "wait";

type INotifMessage = {
  item?: symbol | number | string | null;
  action: INotifMessageAction;
  status?: "success" | "failed";
};

export const NotifMessage: React.FC<INotifMessage> = (props) => {
  const { item = "Record", action, status = "success" } = props;
  if (action === "wait") {
    return <div>Please wait...</div>;
  }
  if (status === "failed")
    return (
      <div>
        Failed to {action} <strong>{String(item)}</strong>.
      </div>
    );
  return (
    <div>
      {formatToLabel(action)} <strong>{String(item)}</strong> successful.
    </div>
  );
};
