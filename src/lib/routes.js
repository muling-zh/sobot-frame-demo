export const routes = [
  { path: "/member", label: "会员信息" },
  { path: "/order-list", label: "历史订单" },
  { path: "/goodlist", label: "推荐商品" },
  { path: "/customcard", label: "定制卡片" },
];

export function normalizePath(pathname) {
  return pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
}

export function resolvePath(pathname) {
  const normalized = normalizePath(pathname);
  return routes.some((item) => item.path === normalized) ? normalized : "/member";
}
