<template>
    <div class="w-80 p-4 shadow-lg">
        <h1 class="text-black font-bold text-3xl">Новости:</h1>
                <NewsCardItem v-for="(item, index) in news" :key="index"  :newsText="item.newsText"  :newsDate="item.newsDate"   :newsMore="item.newsMore" class="border-b-2 border-black" />
    </div>
</template>

<script>
import NewsCardItem from "./NewsCardItem.vue";
export default {
    name: "NewsCard",
    data() {
        return {
            news: [
                {
                    newsText: `'Безвизовый режим между Беларусью и Китаем стартует 10 августа`,
                    newsDate: "Июнь, 2020",
                    newsMore: "Узнать больше"
                },
                {
                    newsText: `'Безвизовый режим между Беларусью и Китаем стартует 10 августа`,
                    newsDate: "Июнь, 2020",
                    newsMore: "Узнать больше"
                },
                {
                    newsText: `'Безвизовый режим между Беларусью и Китаем стартует 10 августа`,
                    newsDate: "Июнь, 2020",
                    newsMore: "Узнать больше"
                },
                {
                    newsText: `'Безвизовый режим между Беларусью и Китаем стартует 10 августа`,
                    newsDate: "Июнь, 2020",
                    newsMore: "Узнать больше"
                },
                {
                    newsText: `'Безвизовый режим между Беларусью и Китаем стартует 10 августа`,
                    newsDate: "Июнь, 2020",
                    newsMore: "Узнать больше"
                }
            ],
        };
    },
    components: { NewsCardItem }
};
</script>

<style>
</style>