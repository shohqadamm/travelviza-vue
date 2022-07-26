<template>
  <div class="py-3">
    <div class="flex">
    
      <div>
        <h1 class="text-2xl font-bold text-black">{{newsHeading}}</h1>
        <p class="my-3">
            {{newsText}}
        </p>
        <div class="flex justify-between">
            <p>{{newsDate}}</p>
            <p class="text-yellow-400">{{newsMore}}</p>
        </div>
      </div>
      </div> 
    </div>
</template>

<script>
export default {
name:"NewsCardItem",
props:{
  newsHeading: String,
    newsText: String,
    newsDate: String,
    newsMore: String,
    newsImg: String,
}
}
</script>

<style>

</style>