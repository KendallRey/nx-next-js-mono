/**
 * Wrapper for Form
 * @typeParam T - Form type
 */
export type IReduxFormState<T> = {
  error?: Partial<Record<keyof T, string>>;
} & Partial<T>;

export type IFormState<T> = Partial<Record<keyof T, unknown>>;

export type IFormKeysRelation<T> = Partial<Record<keyof T, (keyof T)[]>>;
