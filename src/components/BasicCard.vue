<template>
  <div class="text-center flex flex-col jutify-center mx-12 w-1/6">
    <img :src="require(`../assets/images/${img}`)" alt="image">
    <h1 class="font-bold">{{header}}</h1>
    <p class="">{{desc}}</p>
  </div>
</template>

<script>
export default {
    name:"basicCard",
props:{img: String, header: String, desc: String}
}
</script>

<style>

</style>