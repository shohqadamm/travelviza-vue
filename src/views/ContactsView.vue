<template>
  <div class="contacts pt-96">
    <div class="flex container mx-auto justify-between">
      <div class="w-full">
        <h1 class="text-black font-bold text-3xl">Контакты</h1>
        <div class="flex flex-wrap shadow-lg mr-5 my-5 p-5">
          <h1 class="text-black font-bold text-3xl">Информация про нас:</h1>
          <div class="flex w-10/12 m-auto justify-between mt-5">
            <div class="contacts flex flex-col justify-between">
                <div class="contacts-address flex align-middle mb-2">
                  <img src="../assets/images/location.png" alt="" />
                  <p>Адрес: Минск, ул. Матусевича,
д. 72, офис 243 (вход в центр страхования)</p>
                </div>

                <div class="contacts-worktime flex align-middle">
                  <img src="../assets/images/wall-clock.png" alt="" />
                  <p>email: info@travelviza.by</p>
                </div>
                
              <div class="contacts-phones flex items-center">
                <img src="../assets/images/phone-call.png" alt="" />
                <div class="flex gap-10">
                  <p class="font-bold">+375 (293) 581-558</p>
                  <p class="font-bold">+375 (333) 665-858</p>
                </div>
              </div>
            </div>
            <div>
              <img src="../assets/images/contact.jpg" alt="" />
            </div>
          </div>

          <iframe class="w-10/12 m-auto mt-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.0873758788211!2d27.448858963846504!3d53.918321093400834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc4d7c9be3f0b%3A0x115437ad2bc25cb8!2z0L7RhNC40YEgMjQzLCB2dWxpY2EgTWF0dXNpZXZpxI1hIDcyLCBNaW5zayAyMjAwNTUsIEJlbGFydXM!5e0!3m2!1sen!2s!4v1666166378097!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <NewsCardVue class="w-2/5" />
    </div>
    <BookComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsCardVue from "@/components/NewsCard.vue";
import BookComponent from '@/components/BookComponent.vue'

export default {
  name: "HomeView",
  components: {
    NewsCardVue,
    BookComponent
  },
};
</script>
