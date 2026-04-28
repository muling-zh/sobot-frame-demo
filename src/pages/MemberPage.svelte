<script>
  import { onMount } from "svelte";
  import "../styles/member.css";

  const userobj = {
    memNum: "XB000301",
    integral: "34159.26",
    memType: "普通会员",
    registTime: "5年",
    customeramount: "1099元",
    balance: "2300元",
    birth: "1993/05/02",
    status: "正常",
    overTime: "2025/07/21",
    buyTimes: "32次",
  };

  let receivedMessages = [];
  let originFilter = "";
  let currentUrl = "";
  let urlParams = {};
  $: normalizedOriginFilter = originFilter.trim().toLowerCase();
  $: filteredMessages = receivedMessages.filter((item) =>
    normalizedOriginFilter
      ? String(item.origin || "").toLowerCase().includes(normalizedOriginFilter)
      : true
  );

  onMount(() => {
    currentUrl = window.location.href;
    urlParams = Object.fromEntries(new URLSearchParams(window.location.search).entries());

    const handleMessage = (event) => {
      receivedMessages = [
        ...receivedMessages,
        {
          receivedAt: new Date().toISOString(),
          origin: event.origin || "unknown",
          data: event.data,
        },
      ];
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  });
</script>

<div class="userArea">
  <p class="h4">会员信息：</p>
  <div class="userPlist">
    <p class="p4"><span class="bold">会员编号</span> : <span class="userValue">{userobj.memNum}</span></p>
    <p class="p4"><span class="bold">会员等级</span> : <span class="userValue org">{userobj.memType}</span></p>
    <p class="p4"><span class="bold">会员生日</span> : <span class="userValue">{userobj.birth}</span></p>
    <p class="p4"><span class="bold">注册时间</span> : <span class="userValue">{userobj.registTime}</span></p>
    <p class="p4"><span class="bold">消费总额</span> : <span class="userValue">{userobj.customeramount}</span></p>
  </div>
  <div class="userPlist userPlist2">
    <p class="p4"><span class="bold">卡内余额</span> : <span class="userValue">{userobj.balance}</span></p>
    <p class="p4"><span class="bold">卡片状态</span> : <span class="userValue">{userobj.status}</span></p>
    <p class="p4"><span class="bold">会员积分</span> : <span class="userValue">{userobj.integral}</span></p>
    <p class="p4"><span class="bold">过期时间</span> : <span class="userValue">{userobj.registTime}</span></p>
    <p class="p4"><span class="bold">购次</span> : <span class="userValue">{userobj.buyTimes}</span></p>
    <p class="p4"><span class="more"><a href="https://www.taobao.com" target="_blank" rel="noreferrer">查看更多...</a></span></p>
  </div>
  <p class="h4">URL 信息：</p>
  <p class="p4"><span class="bold">当前地址</span> : {currentUrl}</p>
  {#if Object.keys(urlParams).length === 0}
    <p class="p4">当前 URL 没有 query 参数</p>
  {:else}
    <pre>{JSON.stringify(urlParams, null, 2)}</pre>
  {/if}
  <p class="h4" style="margin-top: 20px;">postMessage 信息：</p>
  <p class="p4">
    <span class="bold">来源过滤</span> :
    <input
      type="text"
      bind:value={originFilter}
      placeholder="请输入来源关键字，例如 localhost"
      style="margin-left: 8px; padding: 4px 8px; width: 320px; max-width: 100%;"
    />
  </p>
  {#if receivedMessages.length === 0}
    <p class="p4">暂无收到的消息</p>
  {:else if filteredMessages.length === 0}
    <p class="p4">没有匹配当前来源过滤条件的消息</p>
  {:else}
    {#each filteredMessages as item, index}
      <div class="p4">
        <p><span class="bold">序号</span> : {index + 1}</p>
        <p><span class="bold">接收时间</span> : {item.receivedAt}</p>
        <p><span class="bold">来源</span> : {item.origin}</p>
        <pre>{JSON.stringify(item.data, null, 2)}</pre>
      </div>
    {/each}
  {/if}
</div>
