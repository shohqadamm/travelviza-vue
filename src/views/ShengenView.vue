<template>
  <div class="shengen pt-80">
    <ShoowcaseComponent showcaseText="ШЕНГЕН"
      bgImage="kunal-shinde--f0YLss50Bs-unsplash1.png"/>
      <div class="flex container">
        <h1 class="text-black font-bold text-3xl">Шенген</h1>
        <div class="flex flex-wrap shadow-lg mx-3 my-5 p-5">
          <CountryItem v-for="(country, index) in countries" :key="index" :countryName="country.countryName"/>
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
        image:'',
        countryName: 'Виза в Латвию'
      },
       {
        image:'',
        countryName: 'Виза в Чехию'
      },
       {
        image:'',
        countryName: 'Виза в Эстонию'
      },
       {
        image:'',
        countryName: 'Виза в Финляндию'
      },
       {
        image:'',
        countryName: 'Виза в Италия'
      },
       {
        image:'',
        countryName: 'Виза в Польшу'
      },
       {
        image:'',
        countryName: 'Виза в Испанию'
      },
       {
        image:'',
        countryName: 'Виза в Грецию'
      },
       {
        image:'',
        countryName: 'Виза в Венгрию'
      },
       {
        image:'',
        countryName: 'Виза в Францию'
      }
    ]
  }
}
}
</script>
