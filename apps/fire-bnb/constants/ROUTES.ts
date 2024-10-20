export const ROUTE_ID = ':id:';

// #region Rooms

const PRODUCT_VIEW_PAGE = {
  name: 'Room',
  href: `/product/${ROUTE_ID}`,
};

const PRODUCT_PAGE = {
  name: 'Rooms',
  href: '/product',
  VIEW: PRODUCT_VIEW_PAGE,
} as const;

// #endregion

export const ROUTES = {
  PRODUCT: PRODUCT_PAGE,
} as const;
