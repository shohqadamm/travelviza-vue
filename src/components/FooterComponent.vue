<template>
  <div class="footer">
    <div class="footer-top bg-yellow-400">
      <div class="container mx-auto">
        <ul class="header-list flex items-center px-8 py-3 justify-between">
           <li class="header-list-item">
            <router-link class="{isActive: active}" to="/">Главная</router-link>
          </li>
          <li class="header-list-item"><router-link to="/shengen">Шенген</router-link></li>
          <li class="header-list-item"><router-link to="/europe">Европа</router-link></li>
          <li class="header-list-item"><router-link to="/africa">Африка</router-link></li>
          <li class="header-list-item"><router-link to="/amerika">Америка</router-link></li>
          <li class="header-list-item"><router-link to="/asia">Азия</router-link></li>
          <li class="header-list-item"><router-link to="/news">Новости</router-link></li>
          <li class="header-list-item"><router-link to="/contacts">Контакты</router-link></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom flex justify-between px-5 py-16">
      <!-- <div class="container"></div> -->
      <div class="contacts flex flex-col">
        <div class="contacts-address flex align-middle mb-2">
          <img src="../assets/images/location.png" alt="" />
          <p>Минск, ул. Матусевича, д. 72, офис 243</p>
        </div>

        <div class="contacts-worktime flex align-middle">
          <img src="../assets/images/wall-clock.png" alt="" />
          <p>Пн-пт с 9 до 18</p>
        </div>
        <div class="contacts-worktime flex items-center">
          <img src="../assets/images/phone-call.png" alt="" />
          <div class="flex direction-column flex-col">
            <p>+375 (293) 581-558</p>
            <p>+375 (333) 665-858</p>
          </div>
        </div>
      </div>
      <div class="socials">
        <div class="flex items-center">
          <img src="../assets/images/MaskGroup.png" alt="" />
          <a href="mailto:info@travelviza.by" class="font-bold text-lg ml-2"
            >info@travelviza.by</a
          >
        </div>
        <div class="social-links flex justify-between">
          <a href="#"
            ><img src="../assets/images/vk-social-logotype.png" alt=""
          /></a>
          <a href="#"><img src="../assets/images/instagram.png" alt="" /></a>
          <a href="#"
            ><img src="../assets/images/facebook-circular-logo.png" alt=""
          /></a>
        </div>
      </div>
      <div class="footer-p">
        <p class="text-sm text-right text-white">
          © 2021 TRAVELVIZA.BY <br />
          Агентство визовой поддержки
        </p>
        <div
          class="
            p-5
            bg-white
            inline-block
            float-right
            mt-5
            rounded-2xl
            cursor-pointer
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background: url(../assets/images/michael-baccin-sN4nCLXGiu8-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>