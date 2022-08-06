
<!-- $route.params.id -->
<template>
  <div class="pt-80">
    <div v-for="(c, index) in countries" :key="index">
      <div v-if="$route.params.id == c.contryName.toLowerCase()">
        <ShoowcaseComponentVue
          :showcaseText="'Visa to ' + c.contryName"
          bgImage="kunal-shinde--f0YLss50Bs-unsplash1.png"
        />
      </div>
    </div>
    <TopCountriesCarousel />
    <div>
      <h1 class="text-3xl">{{ countries[0].countryName }}</h1>
      <img :src="countries[0].image1" alt="" />
    </div>
    <div class="container">
      <div v-for="(country, index) in countries" :key="index">
        <div v-if="$route.params.id == country.contryName.toLowerCase()">
          <div class="flex container mx-auto justify-between">
            <div class="w-full">
              <h1 class="text-black font-bold text-3xl">Visa to {{country.contryName}}</h1>
              <div class="shadow-lg mr-5 my-5 p-5">
              <div class="flex mt-2">


                <div>
                  <img :src="require(`../assets/images/${country.image1}`)" alt="">
                </div>
                <div class="ml-3">
                  <h1 class="text-xl font-bold">
                    {{country.heading1}}
                  </h1>
                  <p>Подача личная</p>
                  <div>
                    <p><span class="underline"> Срок пребывания: </span>{{country.stayTime1}}</p>
                    <p><span class="underline"> Срок получения: </span>{{country.getVisaTime1}}</p>
                    <p>{{country.isFor1}}</p>
                  </div>
                </div>
              </div>

                 <div class="flex mt-4 text-right">
               
                <div class="mr-3">
                  <h1 class="text-xl font-bold">
                    {{country.heading2}}
                  </h1>
                  <p>Подача личная</p>
                  <div>
                    <p><span class="underline"> Срок пребывания: </span>{{country.stayTime2}}</p>
                    <p><span class="underline"> Срок получения: </span>{{country.getVisaTime2}}</p>
                    <p>{{country.isFor2}}</p>
                  </div>
                </div>
                 <div>
                  <img :src="require(`../assets/images/${country.image2}`)" alt="">
                </div>
              </div>
                <h1 class="text-3xl font-bold text-center mt-6">Мы знаем как сэкономить Ваше время и деньги!</h1>
              </div>
            </div>
            <NewsCardVue class="w-2/5" />
          </div>
          <div class="container">
            <BookComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoowcaseComponentVue from "@/components/ShoowcaseComponent.vue";
import TopCountriesCarousel from "@/components/TopCountriesCarousel.vue";
import NewsCardVue from "@/components/NewsCard.vue";
export default {
  name: "CountryView",
  components: {
    ShoowcaseComponentVue,
    TopCountriesCarousel,
    NewsCardVue
  },
  data() {
    return {
      countries: [
        {
          contryName: "USA",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },
          {
          contryName: "Canada",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "Algeriya",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "Egypt",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "Morocco",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "UAR",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "China",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "Hongkong",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "India",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "Philippines",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "SouthKorea",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "thailand",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "UAE",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "Bulgarian",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },   {
          contryName: "Cyprus",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },
         {
          contryName: "UK",
          image1: "latvia/22-Klaipeda_Old_Town1.jpg",
          image2: "latvia/Lithuania_main1.jpg",
          heading1: 'Мультивиза туристическая 3-12 месяцев Стоимость 60 BYN',
          heading2: 'Мультивиза деловая 6-24 месяцев Стоимость 225 BYN',
          stayTime1:'30-90 дней',
          stayTime2:'6-24 месяца',
          getVisaTime1: 'от 8 дней',
          getVisaTime2: '2-3 недели',
          isFor1:'(Студенты, пенсионеры, ИП, безработные уточняйте в офисе)', 
          isFor2:'(Пенсионеры, студенты, ИП, безработные уточняйте в офисе)' 
        },
      ],
    };
  },
};
</script>

<style>
</style>