<template>
  <div class="w-1/3">
    <!-- <img :src="require(`@/assets/images/${image}`)" alt="" /> -->
    <h1 class="font-bold text-xl text-center">{{countryName}}</h1>
  </div>
</template>

<script>
export default {
  name: "CountryItem",
  props:{
    // image: String,
    countryName: String,
  }
};
</script>

<style>
</style>