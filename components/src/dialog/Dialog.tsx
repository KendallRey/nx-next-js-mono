import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, ReactNode, Ref, forwardRef, useCallback, useState } from "react";
import MuiButton from "../button/Button";
import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";
import { confirmUnsavedChanges } from "@/hooks/useUnsavedChangesPrompt";

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
      <DialogContent>
        <div className="p-4">{children}</div>
      </DialogContent>
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
    </Dialog>
  );
};

export default MuiDialog;
