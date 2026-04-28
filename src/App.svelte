<script>
  import MemberPage from "./pages/MemberPage.svelte";
  import OrderListPage from "./pages/OrderListPage.svelte";
  import GoodListPage from "./pages/GoodListPage.svelte";
  import CustomCardPage from "./pages/CustomCardPage.svelte";

  const items = [
    { key: "member", label: "会员信息" },
    { key: "order-list", label: "历史订单" },
    { key: "goodlist", label: "商品列表" },
    { key: "customcard", label: "自定义卡片" },
  ];

  const validKeys = new Set(items.map((tab) => tab.key));

  function resolveActiveKey(key) {
    return validKeys.has(key) ? key : "member";
  }
  let activeKey = resolveActiveKey("member");

  function onTabChange(key) {
    if (key === activeKey) return;
    activeKey = resolveActiveKey(key);
  }
</script>

<main class="app-shell">
  <header class="top-tabs">
    {#each items as item (item.key)}
      <button
        type="button"
        class="tab-btn"
        class:active={activeKey === item.key}
        onclick={() => onTabChange(item.key)}
      >
        {item.label}
      </button>
    {/each}
  </header>

  <section class="page-body">
    {#if activeKey === "member"}
      <MemberPage />
    {:else if activeKey === "order-list"}
      <OrderListPage />
    {:else if activeKey === "goodlist"}
      <GoodListPage />
    {:else if activeKey === "customcard"}
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
