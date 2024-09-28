<template>
  <!-- Status Section -->
  <div
    class="flex flex-col gap-2 p-3 mt-2 h-full w-[250px] overflow-hidden justify-between font-mono bg-gray-700 rounded">

    <div class="flex flex-col justify-between h-full">
      <ul class="text-sm space-y-4 w-full p-2 ">

        <li class="flex justify-between">
          <div class="underline">Balance</div>
          <div>{{ balance }} <span>USDT</span></div>
        </li>

        <li class="flex justify-between">
          <div class="underline">Equity</div>
          <div>{{ equity }} <span>USDT</span></div>
        </li>

        <li class="flex justify-between">
          <div class="underline">Unrealized_PnL</div>
          <div>{{ unProfit }} <span>USDT</span></div>
        </li>

        <li class="flex justify-between">
          <div class="underline">Daily_Profit(USDT)</div>
          <div>{{ dailyProfit }} <span>USDT</span></div>
        </li>

        <li class="flex justify-between">
          <div class="underline">Daily_Profit(%)</div>
          <div>{{ dailyProfitPercent }} <span>%</span></div>
        </li>

      </ul>
    </div>
  </div>




</template>

<script>
export default {
  props: {
    balance: {
      type: Number,
      required: true
    },
    equity: {
      type: Number,
      required: true
    },
    unProfit: {
      type: Number,
      required: true
    },
    dailyProfit: {
      type: Number,
      required: true
    },
    dailyProfitPercent: {
      type: Number,
      required: true
    }
  }
};
</script>
