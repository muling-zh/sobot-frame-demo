<script>
  import MemberPage from "./pages/MemberPage.svelte";
  import OrderListPage from "./pages/OrderListPage.svelte";
  import GoodListPage from "./pages/GoodListPage.svelte";
  import CustomCardPage from "./pages/CustomCardPage.svelte";

  const tabs = [
    { path: "/member", label: "会员信息" },
    { path: "/order-list", label: "历史订单" },
    { path: "/goodlist", label: "商品列表" },
    { path: "/customcard", label: "自定义卡片" },
  ];

  const validPaths = new Set(tabs.map((tab) => tab.path));

  function resolvePath(pathname) {
    return validPaths.has(pathname) ? pathname : "/member";
  }

  const initialPath = resolvePath(window.location.pathname);
  let currentPath = initialPath;

  if (window.location.pathname !== initialPath) {
    window.history.replaceState({}, "", initialPath);
  }

  function navigate(path) {
    if (path === currentPath) return;
    currentPath = path;
    window.history.pushState({}, "", path);
  }

  function onPopstate() {
    const resolved = resolvePath(window.location.pathname);
    currentPath = resolved;
    if (resolved !== window.location.pathname) {
      window.history.replaceState({}, "", resolved);
    }
  }
</script>

<svelte:window on:popstate={onPopstate} />

<main class="app-shell">
  <header class="top-tabs">
    {#each tabs as tab (tab.path)}
      <button
        type="button"
        class="tab-btn"
        class:active={currentPath === tab.path}
        on:click={() => navigate(tab.path)}
      >
        {tab.label}
      </button>
    {/each}
  </header>

  <section class="page-body">
    {#if currentPath === "/member"}
      <MemberPage />
    {:else if currentPath === "/order-list"}
      <OrderListPage />
    {:else if currentPath === "/goodlist"}
      <GoodListPage />
    {:else}
      <CustomCardPage />
    {/if}
  </section>
</main>

<style>
  .app-shell {
    min-height: 100vh;
    background: #f5f7fa;
    color: #1f2937;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .top-tabs {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    gap: 8px;
    padding: 12px;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
  }

  .tab-btn {
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
  }

  .tab-btn.active {
    color: #fff;
    background: #2563eb;
    border-color: #2563eb;
  }

  .page-body {
    max-width: 960px;
    margin: 0 auto;
    padding: 16px;
  }
</style>
