type ID = number | string;

type IApiProps = {
  params?: IApiParams;
  skip?: boolean;
  ignore?: string[];
  defaultParams?: IApiParams;
  overrideParams?: IApiParams;
};

type IApiPostProps<T = Record<string, any>> = {
  payload: T;
};

type IApiPutProps<T = Record<string, any>> = {
  id: ID;
  payload: T;
};

type IApiParams = Record<string, any>;

type IOrdering = Record<string, any> & {
  order?: "asc" | "desc" | false;
  orderBy?: string;
};

type IApiSuccessResponse<T> = {
  status: "ok";
  code: number;
  data: T;
  error?: null;
};

type IApiErrorResponse<T> = {
  status: null;
  code: number;
  error: string;
  data?: T;
};

type IApiResponse<T, U = Record<string, any>> = IApiSuccessResponse<T> | IApiErrorResponse<T>;

type IList<T> = {
  count: number;
  results: T[];
};
