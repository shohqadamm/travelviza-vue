<template>
  <div class="w-full bg h-full pt-64 mb-10">
    <div class="container flex">
      <div class="">
        <h1 class="font-extrabold text-white text-5xl">
          Давно мечтали побывать в любимой стране, но были проблемы с визой?
        </h1>
        <p class="text-white my-10">
          Оформляй визу любого типа на нашем сайте и получай удовольствие,
          будучи в любой точке мира!
        </p>
        <p class="bg-yellow-300 p-4 shadow-2xl shadow-yellow-300 inline-block font-extrabold text-xl">Заказать визу</p>
      </div>
      <div class="w-4/5">
        <SliderComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SliderComponent from "@/components/SliderNoNavButtonComponent.vue";

export default {
  name: "HomeShowcase",
  components: {
    SliderComponent,
  },
};
</script>

<style>
.bg {
  background-image: url(@/assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
</style>