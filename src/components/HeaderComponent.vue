<template>
  <div class="header absolute w-full">
    <div class="container lg mx-auto py-3">
      <div class="header-top flex justify-between mb-4">
        <div class="logo">
          <h1 class="logo-text uppercase font-bold text-2xl">
            travelviza.by
          </h1>
          <img src="../assets/images/samolyot.png" alt="asdf">
          <p class="text-sm">Оформление виз любых типов</p>
        </div>
        <div class="contacts flex items-center">
          <div class="mr-2">
            <div class="contacts-address flex align-middle mb-2">
              <img src="../assets/images/location.png" alt="">
              <p>Минск, ул. Матусевича,
                  д. 72, офис 243</p>
            </div>
  
            <div class="contacts-worktime flex align-middle">
              <img src="../assets/images/wall-clock.png" alt="">
              <p>Пн-пт с 9 до 18</p>
            </div>
          </div>
           
           <div class="contacts-phones flex items-center">
            <img src="../assets/images/phone-call.png" alt="">
            <div class="flex direction-column flex-col">
              <p>+375 (293) 581-558</p>
              <p>+375 (333) 665-858</p>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom bg-white rounded-full drop-shadow-2xl">
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
          <li class="header-list-item search-input flex items-center pr-2 overflow-hidden border-black border-2 rounded-3xl">
            <input type="text" class="p-2 border-0 outline-none"/>
            <div class="search-input-icon">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HeaderComponent",
  props: {
    name: String,
  },
  isActive: true,
};
</script>

<style scoped>
/* .header-bottom {
  background: #fd4;
  border-radius: 30px;
}
.header-bottom .header-list {
  display: flex;
  justify-content: space-between;
  padding: 15px 50px;
}
.active {
  text-decoration: underline;
}

.search-input{
    display: flex;
    align-items: center;
    padding-right: 5px;
    background: #fff;
    border: 1px solid #222;
    border-radius: 30px;
    overflow: hidden;    
}
input{
    border: 0;
    outline: 0;
    padding: 10px;
}
.search-input-icon{
    width:20px;
    height:20px;
} */
</style>