import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, ReactNode, Ref, forwardRef, useCallback, useState } from "react";
import MuiButton from "../button/Button";
import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";
import { confirmUnsavedChanges } from "../hooks/useUnsavedChangesPrompt";
import MuiIconButton from "../icon-button/IconButton";
import { HiXMark } from "react-icons/hi2";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type IMuiDialog = {
  title: string;
  children?: ReactNode;
  open: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
  closeText?: string;
  confirmText?: string;
  variant?: "form" | "default" | "confirm" | "delete";
  maxWidth?: false | Breakpoint | undefined;
  fullscreen?: boolean;
  fullWidth?: boolean;
  disableConfirm?: boolean;
  promptUnsaved?: boolean;
  hideActions?: boolean;
} & DialogProps;

const MuiDialog: React.FC<IMuiDialog> = (props) => {
  const {
    title,
    children,
    open,
    onClose,
    onConfirm,
    closeText,
    confirmText,
    variant = "default",
    maxWidth,
    fullWidth,
    disableConfirm,
    promptUnsaved,
    hideActions,
    ...otherProps
  } = props;

  const handleOnClose = useCallback(async () => {
    if (promptUnsaved) {
      const isConfirm = await confirmUnsavedChanges();
      if (!isConfirm) return;
    }
    if (onClose) onClose();
  }, [promptUnsaved, onClose]);

  const theme = useTheme();
  const fullscreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleOnClose}
      fullScreen={variant === "form" ? fullscreen : false}
      maxWidth={variant === "confirm" ? "xs" : maxWidth}
      fullWidth={fullWidth}
      keepMounted={false}
      {...otherProps}
    >
      <DialogTitle>{title}</DialogTitle>
      <MuiIconButton
        aria-label="close"
        onClick={handleOnClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <HiXMark />
      </MuiIconButton>
      <DialogContent>
        <div className="p-4">{children}</div>
      </DialogContent>
      {hideActions === true ? (
        <></>
      ) : (
        <DialogActions>
          <MuiButton onClick={handleOnClose}>{closeText ?? "Close"}</MuiButton>
          <MuiButton
            variant="contained"
            onClick={onConfirm}
            color={variant === "delete" ? "error" : "primary"}
            disabled={disableConfirm}
          >
            {confirmText ?? "Confirm"}
          </MuiButton>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default MuiDialog;
