<template>
  <div class="w-full bg h-full pt-64">
    <div class="container">
      <div class="w-4/5">
        <h1 class="font-extrabold text-white text-5xl">
          Давно мечтали побывать в любимой стране, но были проблемы с визой?
        </h1>
        <p class="text-white">
          Оформляй визу любого типа на нашем сайте и получай удовольствие,
          будучи в любой точке мира!
        </p>
        <p>Заказать визу</p>
      </div>
      <div class="absolute right-5">
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