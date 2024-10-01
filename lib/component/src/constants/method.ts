export const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  // PATCH: 'patch',
  DELETE: "delete",
} as const;

export type IMethod = (typeof METHOD)[keyof typeof METHOD];
