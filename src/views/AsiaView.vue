<template>
  <div class="shengen pt-80">
    <ShoowcaseComponent showcaseText="Азия"
      bgImage="kunal-shinde--f0YLss50Bs-unsplash1.png"/>
      <TopCountriesCarousel/>
      <div class="flex container mx-auto justify-between">
        <div class="w-full">
          <h1 class="text-black font-bold text-3xl">Азия</h1>
          <div class="flex flex-wrap shadow-lg mr-5 my-5 p-5">
            <CountryItem v-for="(country, index) in countries" :key="index" :countryName="country.countryName" :image="country.image" />
          </div>
        </div>
      <NewsCard class="w-2/5"/>
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
import TopCountriesCarousel from '@/components/TopCountriesCarousel.vue';
// @ is an alias to /src

export default {
  name: 'AsiaView',
  components: {
    ShoowcaseComponent,
    NewsCard,
    CountryItem,
    BookComponent,
    TopCountriesCarousel
},
data(){
  return{
    countries:[
      {
        image:'asia/Hong_Kong-150x1501.png',
        countryName: 'Виза в Гонконг'
      },
       {
        image:'asia/India-150x1501.png',
        countryName: 'Виза в Индию'
      },
       {
        image:'asia/China-150x1501.png',
        countryName: 'Виза в Китай'
      },
       {
        image:'asia/UAEmirates-150x1501.png',
        countryName: 'Виза в ОАЭ'
      },
       {
        image:'asia/Thailand-150x1501.png',
        countryName: 'Виза в Таиланд'
      },
       {
        image:'asia/Philippines-150x1501.png',
        countryName: 'Виза в Филлипины'
      },
       {
        image:'asia/South_Korea-150x1501.png',
        countryName: 'Виза в Южную Корею'
      }
    ]
  }
}
}
</script>
