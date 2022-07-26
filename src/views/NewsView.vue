<template>
  <div class="news pt-96">
    <div class="container">
      <h1 class="text-3xl font-bold">Новости</h1>
      <div class="flex p-20 gap-5 shadow-2xl my-5">
        <div class="rounded-3xl bg-slate-400 w-10/12">
          <!-- <img
            src="../assets/images/girl-on-beach-sitting-on-chaise-longue-under-palm-tree-with-cocktail-in-her-hands-and-looks-at-sea_262909-104-removebg-preview.png"
            alt=""
          /> -->
        </div>
        <div class="">
          <NewsCardItem
            newsImg="kunal-shinde--f0YLss50Bs-unsplash1.png"
      
            newsHeading="Безвизовый режим между Беларусью и Китаем стартует 10 августа"
            newsText="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
  nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
  amet sint. Velit officia consequat duis enim velit mollit. 
  
   Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
  deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
  enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim
  mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
  consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
  amet."
            newsDate="Июнь, 2020"
          />
        </div>
      </div>

      <BookComponent/>
    </div>
  </div>
</template>

<script>
import NewsCardItem from "@/components/NewsCardItem.vue";
import BookComponent from "@/components/BookComponent.vue";
// @ is an alias to /src

export default {
  name: "NewsView",
  components: {
    NewsCardItem,
    BookComponent
},
};
</script>
