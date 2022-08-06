<template>
  <div>
    <aglie class="bg-white drop-shadow-2xl my-12 text-center mx-auto w-3/5" >
      <div class="slider my-5 mb-8" v-for="(feedback, index) in feedbacks" :key="index">
        <img
          :src="require(`../assets/images/${feedback.image}`)" 
          class="rounded-full mx-auto my-5"
          alt="image"
        />
        <h1 class="font-bold text-xl">{{feedback.name}}</h1>
        <p class="py-5 px-36">
            {{feedback.feedbackDesc}}
        </p>
      </div>
            <!-- <template prevButton="prevButton">a</template> -->
            <!-- <template nextButton="nextButton">a</template> -->
    </aglie>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  components: { aglie: VueAgile },
  data(){
    return {
        feedbacks: [
            {
                image: 'pochemu-devushka-ne-cenit-01.png',
                name: 'Мария Иванова',
                feedbackDesc:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iusto
          similique modi vel expedita, voluptas inventore incidunt facilis minus
          vero dicta magnam reprehenderit illo nulla accusamus animi tempora
          ratione doloremque.`
            },
                  {
                image: 'pochemu-devushka-ne-cenit-01.png',
                name: 'Мария Иванова',
                feedbackDesc:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iusto
          similique modi vel expedita, voluptas inventore incidunt facilis minus
          vero dicta magnam reprehenderit illo nulla accusamus animi tempora
          ratione doloremque.`
            },
                  {
                image: 'pochemu-devushka-ne-cenit-01.png',
                name: 'Мария Иванова',
                feedbackDesc:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iusto
          similique modi vel expedita, voluptas inventore incidunt facilis minus
          vero dicta magnam reprehenderit illo nulla accusamus animi tempora
          ratione doloremque.`
            },
                  {
                image: 'pochemu-devushka-ne-cenit-01.png',
                name: 'Мария Иванова',
                feedbackDesc:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iusto
          similique modi vel expedita, voluptas inventore incidunt facilis minus
          vero dicta magnam reprehenderit illo nulla accusamus animi tempora
          ratione doloremque.`
            },
                  {
                image: 'pochemu-devushka-ne-cenit-01.png',
                name: 'Мария Иванова',
                feedbackDesc:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iusto
          similique modi vel expedita, voluptas inventore incidunt facilis minus
          vero dicta magnam reprehenderit illo nulla accusamus animi tempora
          ratione doloremque.`
            },
                  {
                image: 'pochemu-devushka-ne-cenit-01.png',
                name: 'Мария Иванова',
                feedbackDesc:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iusto
          similique modi vel expedita, voluptas inventore incidunt facilis minus
          vero dicta magnam reprehenderit illo nulla accusamus animi tempora
          ratione doloremque.`
            },
                  {
                image: 'pochemu-devushka-ne-cenit-01.png',
                name: 'Мария Иванова',
                feedbackDesc:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iusto
          similique modi vel expedita, voluptas inventore incidunt facilis minus
          vero dicta magnam reprehenderit illo nulla accusamus animi tempora
          ratione doloremque.`
            }
        ]
    }
  }
};
</script>

<style>
.agile__nav-button {
  background: transparent;
  border: none;
  color:rgb(255, 0, 0);
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}
.agile__nav-button:hover {
  opacity: 1;
  color: rgb(0, 0, 0);
}
.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #84E439;  
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #84E439;
}

.slide {
  display: block;
  height: 500px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
</style>