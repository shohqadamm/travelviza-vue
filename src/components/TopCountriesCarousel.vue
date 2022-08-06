<template>
  <div>
    <aglie
      class="bg-white drop-shadow-2xl my-12 text-center mx-auto w-3/5"
      :dots="false"
    >
      <div
        class="slider my-5 mb-8"
        v-for="(country, index) in topCountries"
        :key="index"
      >
        <img
          :src="require(`../assets/images/${country.image}`)"
          class="rounded-full mx-auto my-5 w-1/5"
          alt="image"
        />
        <h1 class="font-bold text-xl">{{ country.name }}</h1>
      </div>
  </aglie>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile';
export default {
    components:{aglie:VueAgile},
    data() {
    return {
      topCountries: [
        {
          image: "america/canadapng.png",
          name: "Canada",
        },
        {
          image: "america/USA_Flag_Map.svg.png",
          name: "Canada",
        },
        {
          image: "asia/China-150x1501.png",
          name: "Canada",
        },
        {
          image: "asia/Thailand-150x1501.png",
          name: "Canada",
        },
        {
          image: "europe/UK-150x1501.png",
          name: "Canada",
        },
        {
          image: "africa/uar-150x1501.png",
          name: "Canada",
        },
        {
          image: "africa/Egypt-150x1501.png",
          name: "Canada",
        },
      ],
    };
  },
};
</script>

<style>
.agile__nav-button {
  background: transparent;
  border: none;
  color: rgb(255, 0, 0);
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}
.agile__nav-button:hover {
  opacity: 1;
  color: rgb(0, 0, 0);
}
.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #84e439;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #84e439;
}

.slide {
  display: block;
  height: 500px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
</style>