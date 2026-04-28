<script>
  import "../styles/card-ele.css";

  const products = [
    {
      id: 1,
      title: "OPPO Find N2 5g 折叠屏旗舰手机数码手机官方旗舰店正品大屏智能oppofindn折叠屏手机",
      url: "https://www.taobao.com/",
      description: "折叠屏旗舰手机数码手机官方旗舰店正品大屏智能oppofindn折叠屏手机",
      label: "6999元",
      thumbnail:
        "https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/11c316b8dd70484ab77d4b7ae968bf75.jpg",
    },
    {
      id: 2,
      title: "【新品上市】OPPO K11 索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机",
      url: "https://www.taobao.com/",
      description: "索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机",
      label: "7999元",
      thumbnail:
        "https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg",
    },
    {
      id: 3,
      title: "【享6期免息】OPPO一加 Ace 2 OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后",
      url: "https://www.taobao.com/",
      description: "OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后",
      label: "1999元",
      thumbnail:
        "https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/72f227cdecd1448fa9ddc0455f4af7e6.jpg",
    },
  ];

  function sendHandler(product) {
    window.parent.postMessage(
      {
        cid: "",
        uid: "",
        msgType: 24,
        miniPage: JSON.stringify(product),
      },
      "*",
    );
  }
</script>

<div>
  <p class="h4">推荐商品：</p>
  {#each products as product (product.id)}
    <div class="card_wide">
      <div class="card_ele">
        <a href={product.url} target="_blank" rel="noreferrer" class="card_elea">
          <p class="card_title">{product.title}</p>
        </a>
        <div class="area">
          <img src={product.thumbnail} class="card_picture" alt="" />
          <div class="desc_area">
            <p class="card_desc">{product.description}</p>
            <p class="card_note">{product.label}</p>
            <button type="button" class="send" on:click={() => sendHandler(product)}>发送</button>
          </div>
        </div>
      </div>
    </div>
  {/each}
  <p><span class="moreorder"><a href="https://www.taobao.com" target="_blank" rel="noreferrer">更多商品推荐...</a></span></p>
</div>
