<template>
  <div class="home">
    <HomeShowcaseComponent/>
    <BookComponent />
    <div class="my-5 container mx-auto">
      <h1 class="text-3xl mb-3 font-extrabold text-center">Наши достоинства</h1>
      <div class="flex justify-center">
        <BasicCard
          header="Уверенно"
          desc="Вы можете получить поддержку в любое время суток"
          img="clock.png"
        />
        <BasicCard
          header="Быстро"
          desc="Оформляем визу в теченни трёх рабочих дней"
          img="shield.png"
        />
        <BasicCard
          header="Качественно"
          desc="Учитываем Ваши пожелания и воплощаем их в виде готовых решений"
          img="support.png"
        />
      </div>
    </div>
    <ShoowcaseComponent
      showcaseText="НАИБОЛЕЕ ПОПУЛЯРНЫЕ ЗАКАЗЫ"
      bgImage="photo-1526669818594-45653e3556941.png"
    />
    <div class="flex flex-wrap container gap-5 my-10 justify-center" >
      <AdvancedCard v-for="(topBook, index) in topBooks" :key="index" :image="topBook.image" :discount="topBook.discount" :cost="topBook.cost" />
    </div>
    
      <!-- <AdvancedCard image="2758481.png" discount="topBook.discount" cost="topBook.cost" /> -->
    <ShoowcaseComponent
      showcaseText="ОТЗЫВЫ НАШИХ КЛИЕНТОВ"
      bgImage="photo-1547264463-492e19b545ba.png"
    />
    <div class="container">
      <SliderNavButton />
    </div>
  </div>
</template>

<script>
import BookComponent from "@/components/BookComponent.vue";
import BasicCard from "@/components/BasicCard.vue";
import ShoowcaseComponent from "@/components/ShoowcaseComponent.vue";
import AdvancedCard from "../components/AdvancedCard.vue";
import SliderNavButton from "@/components/SliderNavButton.vue";
import HomeShowcaseComponent from "@/components/HomeShowcaseComponent.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    BookComponent,
    BasicCard,
    ShoowcaseComponent,
    AdvancedCard,
    SliderNavButton,
    HomeShowcaseComponent
},
data(){
 return {
    topBooks: [
      {
        cost: "60 BYN",
        discount: "84 BYN",
        image: "2758481.png",
      },
      {
        cost: "60 BYN",
        discount: "84 BYN",
        image: "2758481.png",
      },
      {
        cost: "60 BYN",
        discount: "84 BYN",
        image: "2758481.png",
      },
      {
        cost: "60 BYN",
        discount: "84 BYN",
        image: "2758481.png",
      },
      {
        cost: "60 BYN",
        discount: "84 BYN",
        image: "2758481.png",
      },
      {
        cost: "60 BYN",
        discount: "84 BYN",
        image: "2758481.png",
      },
      {
        cost: "60 BYN",
        discount: "84 BYN",
        image: "2758481.png",
      },
      {
        cost: "60 BYN",
        discount: "84 BYN",
        image: "2758481.png",
      },
    ]
  }
}
};
</script>
