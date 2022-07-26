<template>
<div>
  <header-vue/>
  <!-- <ShoowcaseComponentVue showcaseText="НАИБОЛЕЕ ПОПУЛЯРНЫЕ ЗАКАЗЫ" bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
  <ShoowcaseComponentVue showcaseText="Hello" bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
  <ShoowcaseComponentVue showcaseText="Hello" bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" /> -->
 <router-view></router-view>
 <footer-component-vue/>
</div>
</template>

<script>
import './index.css'

import HeaderVue from './components/HeaderComponent.vue'
import FooterComponentVue from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterComponentVue
  },
  data(){
    // salom : 'asdf'
  }
}
</script>

<style>
 .router-link-exact-active {
   text-decoration: underline;
   font-weight: 900;
 }
</style>
