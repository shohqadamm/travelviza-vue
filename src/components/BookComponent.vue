<template>
  <div class="flex container mx-auto mb-7 mt-16 relative rounded-lg px-5 bg-sky-800 py-10">
    <div>
      <h1 class="font-extrabold text-white text-4xl mb-10">
        Закажите любую услугу, и мы с Вами свяжемся в течении 30 минут!
      </h1>
      <form class="flex items-center gap-9">
        <div class="input flex items-center bg-white p-2 text-xl">
          <img src="../assets/images/carbon_user-avatar-filled-alt.png" alt="">
            <input class="outline-0 p-2" type="text" name="name" id="name" placeholder="Ваше имя">
        </div>
        <div class="input flex items-center bg-white p-2 text-xl">
          <img src="../assets/images/el_phone-alt.png" alt="">
            <input class="outline-0 p-2" type="text" name="name" id="name" placeholder="Номер телефона">
        </div>
        <button type="submit" class="bg-orange-400 p-4 drop-shadow-md inline-block">
            <h3 class="text-white font-bold text-xl">Заказать звонок</h3>
        </button>
      </form>
    </div>
    <div class="relative w-96">
        <img class="absolute bottom-0 -right-10 w-full"  src="../assets/images/girl-on-beach-sitting-on-chaise-longue-under-palm-tree-with-cocktail-in-her-hands-and-looks-at-sea_262909-104-removebg-preview.png" alt="girl on the beach">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>