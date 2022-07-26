<template>
  <div class="shengen pt-80">
    <ShoowcaseComponent showcaseText="Азия"
      bgImage="kunal-shinde--f0YLss50Bs-unsplash1.png"/>
      <div class="flex container">
        <div>
          <h1 class="text-black font-bold text-3xl">Азия</h1>
          <div class="flex flex-wrap shadow-lg mr-5 my-5 p-5">
            <CountryItem v-for="(country, index) in countries" :key="index" :countryName="country.countryName"/>
          </div>
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
  name: 'AsiaView',
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
        image:'',
        countryName: 'Виза в Гонконг'
      },
       {
        image:'',
        countryName: 'Виза в Индию'
      },
       {
        image:'',
        countryName: 'Виза в Китай'
      },
       {
        image:'',
        countryName: 'Виза в ОАЭ'
      },
       {
        image:'',
        countryName: 'Виза в Таиланд'
      },
       {
        image:'',
        countryName: 'Виза в Филлипины'
      },
       {
        image:'',
        countryName: 'Виза в Южную Корею'
      }
    ]
  }
}
}
</script>
