import { COLOR } from "./color";

export const BASE_INPUT = {
  STYLE: {
    overflow: "hidden",
    borderRadius: 4,
    border: "1px solid",
    borderColor: COLOR.NEUTRAL[400],
  },
  HOVER_STYLE: {
    backgroundColor: "transparent",
    boxShadow: `${COLOR.NEUTRAL[500]} 0 0 0 4px`,
  },
  FOCUS_STYLE: {
    backgroundColor: "transparent",
    boxShadow: `${COLOR.PRIMARY[200]} 0 0 0 4px`,
    borderColor: COLOR.PRIMARY[200],
  },
  ERROR_NOT_FOCUS_STYLE: {
    color: `${COLOR.ERROR[500]} !important`,
    borderColor: COLOR.ERROR[500],
  },
  DISABLED_STYLE: {
    backgroundColor: COLOR.NEUTRAL[200],
  },
  SELECT_STYLE: {
    padding: "14px 12px",
  },
} as const;

export const HELPER_TEXT = {
  STYLE: {
    margin: 0,
    fontSize: "0.875rem",
    letterSpacing: "0.00938em",
  },
} as const;

export const INPUT_LABEL = {
  STYLE: {
    color: COLOR.NEUTRAL[400],
  },
} as const;
