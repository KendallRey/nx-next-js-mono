export const MONEY = {
  SIGN: "₱",
  LOCALE: "fil-PH",
  CURRENCY: "PHP",
  LIMIT: {
    MAX: 1000000,
    MIN: 1,
    MAX_DIGIT: 7,
  },
} as const;

export const FIELDS = {
  EMPTY: "---",
  EMPTY_IMPORTANT: "N/A",
} as const;

/**
 * Constants for Dates.
 * @remarks
 * This uses MomentJS formats
 */

export const DATE = {
  FORMAT: {
    /**
     * @sample `Jun 16, 2024 10:44 PM`.
     */
    FULL: "lll",
  },
} as const;

export const MODEL = {
  STRING: {
    LIMIT: {
      MIN: 3,
      MAX: 32,
    },
  },
  COUNT: {
    LIMIT: {
      MIN: 1,
      MAX: 1000000,
    },
  },
} as const;
