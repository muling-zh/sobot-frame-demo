<script>
  import "../styles/order-list.css";

  const orderArrays = [
    {
      id: 1,
      orderStatus: "待付款",
      statusCustom: "自定义状态",
      createTime: "2023-08-09 14:40:06",
      orderCode: "BZ1993050216362",
      orderUrl: "https://www.taobao.com/",
      totalFee: "3432.50",
      goodsCount: 2,
      goods: "索尼IMX890旗舰同款主摄 100W超...",
      picurl:
        "https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg",
    },
    {
      id: 2,
      orderStatus: "已签收",
      statusCustom: "自定义状态",
      createTime: "2023-04-09 12:20:43",
      orderCode: "HX198909389201",
      orderUrl: "https://www.taobao.com/",
      totalFee: "2332.50",
      goodsCount: 3,
      goods: "OnePlus王牌兔新款游戏旗舰智能5...",
      picurl:
        "https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/11c316b8dd70484ab77d4b7ae968bf75.jpg",
    },
  ];

  const orderArrayTruth = {
    orderStatus: 1,
    statusCustom: "自定义状态",
    createTime: +new Date(),
    orderCode: "BZ9208920350923",
    orderUrl: "https://www.taobao.com/",
    totalFee: "343250",
    goodsCount: 2,
    goods: [
      {
        name: "索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机",
        pictureUrl:
          "https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/11c316b8dd70484ab77d4b7ae968bf75.jpg",
      },
      {
        name: "OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后",
        pictureUrl:
          "https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg",
      },
    ],
  };

  const orderArrayTruth2 = {
    order_status: 1,
    create_time: +new Date(),
    order_code: "BZ9208920350923",
    order_url: "https://www.taobao.com/",
    goods_count: 2,
    total_fee: 343250,
    goods: [
      {
        name: "索尼IMX890旗舰同款主摄 100W超级闪充 5000mAh大电池 大内存5G手机",
        pictureUrl:
          "https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/11c316b8dd70484ab77d4b7ae968bf75.jpg",
      },
      {
        name: "OnePlus王牌兔新款游戏旗舰智能5G手机满血版骁龙8+处理器享OPPO官方售后",
        pictureUrl:
          "https://img3.sobot.com/chatres/b77e9e46bdc34890b91dab906f7114e2/msg/20230810/fc57ac9b20d4df35a77e0d6aa160efcc/2d4e66981589426480d2df2a6f9a7e75.jpg",
      },
    ],
  };

  function sendHandler() {
    window.parent.postMessage(
      {
        cid: "",
        uid: "",
        msgType: 25,
        miniPage: JSON.stringify(orderArrayTruth),
      },
      "*",
    );
  }

  function createTicketHandler() {
    window.parent.postMessage(
      {
        type: "createOrder",
        params: orderArrayTruth2,
      },
      "*",
    );
  }
</script>

<div class="orderArea">
  <p class="h4">历史订单：</p>
  {#each orderArrays as orderArray (orderArray.orderCode)}
    <div class="order_wide">
      <div class="card_ele">
        <a href={orderArray.orderUrl} target="_blank" rel="noreferrer" class="card_elea">
          <p class="card_title"><span class="orderkey">订单编号：</span><span class="ordernum">{orderArray.orderCode}</span></p>
          <p class="card_title mb5"><span class="orderkey">{orderArray.goods}等{orderArray.goodsCount}件商品</span></p>
        </a>
        <div class="area">
          <img src={orderArray.picurl} class="card_picture" alt="" />
          <div class="desc_area">
            <p><span class="orderkey">{orderArray.goodsCount}件商品，合计：</span><span class="orderstatus">{orderArray.totalFee}元</span></p>
            <p><span class="orderkey">订单状态：</span><span class="orderstatus">{orderArray.orderStatus}</span></p>
            <p><span class="orderkey">下单时间：</span><span class="ordertime">{orderArray.createTime}</span></p>
          </div>
        </div>
      </div>
      <button type="button" class="send" on:click={createTicketHandler}>创建工单</button>
      <button type="button" class="send" on:click={sendHandler}>发送</button>
    </div>
  {/each}
  <p><span class="moreorder"><a href="https://www.taobao.com" target="_blank" rel="noreferrer">更多历史订单...</a></span></p>
</div>
