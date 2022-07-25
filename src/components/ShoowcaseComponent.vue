<template>
    <div class="flex items-center justify-center w-full h-64 overflow-hidden">
        <img :src="require(`../assets/images/${bgImage}`)" alt="image" class="w-full h-fit">
        <h1 class="text-white text-5xl font-extrabold absolute z-20">{{showcaseText}}</h1>
    </div>    
</template>

<script>
export default {
    name: "ShowcaseComponent",
    props: {
        showcaseText: String,
        bgImage: String
    }
}
</script>

<style scoped>

</style>