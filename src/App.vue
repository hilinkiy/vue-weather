<template>
  <div class="wrapper" v-if="weatherData">
    <Header />
    <Main />
  </div>
  <div class="loading__wrapper" v-else>
    <div class="loading__wrapper-item"></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Main,
  },
  methods: {
    ...mapActions(["getWeatherData"]),
  },
  computed: {
    ...mapGetters(["weatherData"]),
  },
  created() {
    setTimeout(() => {
      this.getWeatherData("Tashkent");
    }, 2000);
  },
};
</script>
 <style lang="scss">
.loading__wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &-item {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid grey;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      top: -10px;
      left: -10px;
      position: absolute;
      border: 10px solid transparent;
      border-top-color: blue;
      border-radius: 50%;
      animation: 1s loading ease infinite;
    }
  }
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>