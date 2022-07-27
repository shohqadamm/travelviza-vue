<template>
  <div class="shengen pt-80">
    <ShoowcaseComponent showcaseText="Африка"
      bgImage="kunal-shinde--f0YLss50Bs-unsplash1.png"/>
      <div class="flex container">
        <div>
          <h1 class="text-black font-bold text-3xl">Африка</h1>
          <div class="flex flex-wrap shadow-lg mr-5 my-5 p-5">
            <CountryItem v-for="(country, index) in countries" :key="index" :countryName="country.countryName" :image="country.image" />
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
  name: 'AfriceView',
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
        image:'africa/algeria-150x1501.png',
        countryName: 'Виза в Алжир'
      },
       {
        image:'africa/Egypt-150x1501.png',
        countryName: 'Виза в Египет'
      },
       {
        image:'africa/marocco-150x1501.png',
        countryName: 'Виза в Марокко'
      },
       {
        image:'africa/uar-150x1501.png',
        countryName: 'Виза в ЮАР'
      }
    ]
  }
}
}
</script>
