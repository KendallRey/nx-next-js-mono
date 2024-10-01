type RCE<T> = React.ChangeEvent<T>;

type IOrdering = Record<string, any> & {
  order?: "asc" | "desc" | false;
  orderBy?: string;
};
