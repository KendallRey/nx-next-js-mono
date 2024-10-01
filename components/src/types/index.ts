export type RCE<T> = React.ChangeEvent<T>;

export type IOrdering = Record<string, any> & {
  order?: "asc" | "desc" | false;
  orderBy?: string;
};

export type ILayout = Readonly<{
  children: React.ReactNode;
}>;

export type IRoute = {
  name: string;
  href: string;
  icon?: React.ReactNode;
}
