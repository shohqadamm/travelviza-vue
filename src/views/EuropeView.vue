<template>
  <div class="shengen pt-80">
    <ShoowcaseComponent showcaseText="Европа"
      bgImage="kunal-shinde--f0YLss50Bs-unsplash1.png"/>
      <div class="flex container">
        <div>
          <h1 class="text-black font-bold text-3xl">Европа</h1>
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
  name: 'EuropeView',
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
        countryName: 'Виза в Болгарию'
      },
       {
        image:'',
        countryName: 'Виза в Кипр'
      },
       {
        image:'',
        countryName: 'Виза в Великобританию'
      }
    ]
  }
}
}
</script>
