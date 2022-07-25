<template>
  <div class="w-1/5">
        <div>
            <img :src="require(`../assets/images/${image}`)" class="w-full" alt="">
        </div>
      <div class="flex">
        <div class="w-1/2">
          <p class="text-red-500 line-through font-bold text-xl">{{discount}}</p>
          <p class="text-right font-bold text-2xl">{{cost}}</p>
        </div>
        <p style="background-color: #84E439" class="p-2 text-center text-xl cursor-pointer w-1/2">Подробнее</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AdvancedCard',
    props:{
        image: String,
        discount: String,
        cost: String
    }
};
</script>

<style>
</style>