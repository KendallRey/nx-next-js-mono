type RCE<T> = React.ChangeEvent<T>;

type IOrdering = Record<string, IValue> & {
  order?: "asc" | "desc" | false;
  orderBy?: string;
};
