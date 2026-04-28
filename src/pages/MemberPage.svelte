<script>
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
  <div class="clear"></div>
</div>
