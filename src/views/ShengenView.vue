<template>
  <div class="shengen pt-80">
    <ShoowcaseComponent showcaseText="ШЕНГЕН"
      bgImage="kunal-shinde--f0YLss50Bs-unsplash1.png"/>
      <div class="flex container">
        <h1 class="text-black font-bold text-3xl">Шенген</h1>
        <div class="flex flex-wrap shadow-lg mx-3 my-5 p-5">
          <CountryItem v-for="(country, index) in countries" :key="index" :countryName="country.countryName" :image="country.image" />
        </div>
      <NewsCard/>
 </div>
 <div class="container">
  <BookComponent/>
 </div>
  </div>
</template>

<script>
import ShoowcaseComponent from '@/components/ShoowcaseComponent.vue';
import NewsCard from '@/components/NewsCard.vue';
import CountryItem from '@/components/CountryItem.vue';
import BookComponent from '@/components/BookComponent.vue';
// @ is an alias to /src

export default {
  name: 'ShengenView',
  components: {
    ShoowcaseComponent,
    NewsCard,
    CountryItem,
    BookComponent
},
data(){
  return{
    countries:[
      {
        image:'latvia/Latvia-150x150.png',
        countryName: 'Виза в Латвию'
      },
       {
        image:'latvia/czech_republic-150x1501.png',
        countryName: 'Виза в Чехию'
      },
       {
        image:'latvia/Estonia-150x1501.png',
        countryName: 'Виза в Эстонию'
      },
       {
        image:'latvia/Finland-150x1501.png',
        countryName: 'Виза в Финляндию'
      },
       {
        image:'latvia/Italy-150x1501.png',
        countryName: 'Виза в Италия'
      },
       {
        image:'latvia/poland-150x1501.jpg',
        countryName: 'Виза в Польшу'
      },
       {
        image:'latvia/espania-150x1501.png',
        countryName: 'Виза в Испанию'
      },
       {
        image:'latvia/greece-150x1501.png',
        countryName: 'Виза в Грецию'
      },
       {
        image:'latvia/Hungary-150x1501.png',
        countryName: 'Виза в Венгрию'
      },
       {
        image:'latvia/Finland-150x1501.png',
        countryName: 'Виза в Францию'
      }
    ]
  }
}
}
</script>
