<template>
  <div class="container main__content">
    <div class="left__card">
      <div class="left__card__mainInfo">
        <p class="left__card__temperature">
          {{ Math.floor(weatherData.current.temp - this.celcium) }}°
          <span>Сегодня</span>
        </p>
        <img src="../assets/images/sun.svg" alt="" />
      </div>
      <div class="left__card__subInfo">
        <p class="subInfo__date">Время: {{ hours }}:{{ minutes }}</p>
        <p class="subInfo__city">Город: {{ weatherData.name }}</p>
      </div>
    </div>
    <div class="right__card">
      <div class="right__card-imgs">
        <div class="right__card-img">
          <img src="../assets/images/temp (1).svg" alt="" />
        </div>
        <div class="right__card-img">
          <img src="../assets/images/pressure.svg" alt="" />
        </div>
        <div class="right__card-img">
          <img src="../assets/images/precipitation.svg" alt="" />
        </div>
        <div class="right__card-img">
          <img src="../assets/images/wind.svg" alt="" />
        </div>
      </div>
      <div class="right__card-titles">
        <p class="right__card-title">Температура</p>
        <p class="right__card-title">Давление</p>
        <p class="right__card-title">Осадки</p>
        <p class="right__card-title">Ветер</p>
      </div>
      <div class="right__card-descrs">
        <p class="right__card-descr">
          {{ Math.floor(weatherData.current.temp - this.celcium) }}° - ощущается
          как {{ Math.floor(weatherData.current.feels_like - this.celcium) }}°
        </p>
        <p class="right__card-descr">
          {{ weatherData.current.pressure }} мм ртутного столба - нормальное
        </p>
        <p class="right__card-descr">{{ weatherData.current.humidity }}%</p>
        <p class="right__card-descr">
          {{ weatherData.current.wind_speed }} м/с {{windDirection}} - легкий ветер
        </p>
      </div>
      <img src="../assets/images/image 1 (2).png" class="continent" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      celcium: 273.15,
      minutes: null,
      hours: null,
    };
  },
  computed: {
    ...mapGetters(["weatherData"]),
    windDirection() {
      if (
        this.weatherData.current.wind_deg == 0 ||
        this.weatherData.current.wind_deg == 360
      ) {
        return "Северный";
      } else if (this.weatherData.current.wind_deg == 90) {
        return "Восточный";
      } else if (this.weatherData.current.wind_deg == 180) {
        return "Южный";
      } else if (this.weatherData.current.wind_deg == 270) {
        return "Западный";
      } else if (
        this.weatherData.current.wind_deg > 0 &&
        this.weatherData.current.wind_deg < 90
      ) {
        return "Северо-Восток";
      } else if (
        this.weatherData.current.wind_deg > 90 &&
        this.weatherData.current.wind_deg < 180
      ) {
        return "Юго-Восток";
      } else if (
        this.weatherData.current.wind_deg > 180 &&
        this.weatherData.current.wind_deg < 270
      ) {
        return "Юго-Запад";
      } else if (
        this.weatherData.current.wind_deg > 270 &&
        this.weatherData.current.wind_deg < 360
      ) {
        return "Северо-Запад";
      }
    },
  },
  methods: {
    getTime() {
      this.hours =
        new Date().getHours() < 10
          ? "0" + new Date().getHours()
          : new Date().getHours();
      this.minutes =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      setInterval(() => {
        this.hours =
          new Date().getHours() < 10
            ? "0" + new Date().getHours()
            : new Date().getHours();
        this.minutes =
          new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes()
            : new Date().getMinutes();
      }, 1000);
    },
  },
  mounted() {
    this.getTime();
  },
  created() {
    const codeData = this.weatherData.current.dt;
    const currentTime = new Date(codeData * 1000);
    this.time = currentTime.toLocaleTimeString();
  },
};
</script>

<style>
.main {
  padding: 40px 0;
}

.left__card {
  border-radius: 20px;
  background: #fff;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  padding: 20px;
  width: 400px;
  height: 320px;
}

.main__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left__card__mainInfo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left__card__temperature {
  color: #4793ff;
  font-family: "Montserrat";
  font-size: 96px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.left__card__temperature span {
  color: #000;
  font-family: "Montserrat";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.subInfo__date {
  color: #939cb0;
  font-family: "Montserrat";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.subInfo__city {
  color: #939cb0;
  font-family: "Montserrat";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.left__card__subInfo {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}

.right__card {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 320px;
  width: 750px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  padding: 40px 30px;
  position: relative;
}

.continent {
  position: absolute;
  top: 0;
  right: 0;
  user-select: none;
}

.right__card-descr {
  color: #000;
  font-family: "Montserrat";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  z-index: 1;
}

.right__card-title {
  color: #939cb0;
  font-family: "Montserrat";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  z-index: 1;
}

.right__card-img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 38px;
  height: 38px;
  background: #fff;
  filter: drop-shadow(1px 4px 10px rgba(71, 147, 255, 0.2));
  border-radius: 50%;
  padding: 7px;
}

.right__card-img img {
  width: 100%;
  max-width: 25px;
  user-select: none;
}

.right__card-titles {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.right__card-imgs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.right__card-descrs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
}
</style>