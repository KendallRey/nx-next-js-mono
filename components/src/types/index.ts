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
};

export type IApiProps = {
  params?: IApiParams;
  skip?: boolean;
  ignore?: string[];
  defaultParams?: IApiParams;
  overrideParams?: IApiParams;
};

export type IApiParams = Record<string, any>;

export type IApiSuccessResponse<T> = {
  status: "ok";
  code: number;
  data: T;
  error?: null;
};

export type IApiErrorResponse<T> = {
  status: null;
  code: number;
  error: string;
  data?: T;
};

export type IApiResponse<T, U = Record<string, any>> = IApiSuccessResponse<T> | IApiErrorResponse<T>;

export type IList<T> = {
  count: number;
  results: T[];
};

export type ID = number | string;

export type IApiPostProps<T = Record<string, any>> = {
  payload: T;
};

export type IApiPutProps<T = Record<string, any>> = {
  id: ID;
  payload: T;
};

export type IWithID = { id: ID };

// #region Next JS

export type INextPage = {
  params?: Record<string, unknown>;
  searchParams?: { q?: string } & Record<string, unknown>;
};

// #endregion

export type IQueryParams = {
  page?: number;
};
export type IFilters = Record<string, any> & IQueryParams;
export type ISearchParams = IFilters & IOrdering;