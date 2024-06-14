<template>
  <main class="main">
    <div class="container main__wrapper">
      <MainContent />
      <MainContentDaily :cards="cards" />
    </div>
  </main>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import MainContentDaily from "@/components/MainContentDaily.vue";

export default {
  data() {
    return {
      cards: {
        id: 0,
        date: "28 авг",
        dateIndex: "Сегодня",
        degree: "+18°",
        degreeFeel: "+15°",
        descr: "Облачно",
      },
    };
  },
  components: {
    MainContent,
    MainContentDaily,
  },
};
</script>

<style>
.main__wrapper {
  display: flex;
  flex-direction: column;
}
</style>