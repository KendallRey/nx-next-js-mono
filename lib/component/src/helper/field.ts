export const TEXT = {
  MAX: {
    NAME: 50,
    SHORT: 20,
    MEDIUM: 128,
    LONG: 256,
    ADDRESS: 255,
    DESCRIPTION: 2048,
  },
} as const;

const MONEY = {
  LIMIT: {
    MAX: 1000000,
    MIN: 0,
    MAX_DIGIT: 7,
  },
};

export const NUMBER = {
  MONEY,
  KEYS: {
    PREVENTS: ["e", "E", "+", "-"],
  },
} as const;
