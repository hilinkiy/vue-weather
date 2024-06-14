<template>
  <header class="header">
    <div class="nav">
      <div class="container nav__content">
        <a href="#" class="nav__logo">
          <img src="@/assets/images/logo.svg" alt="" /> <span>vue weather</span>
        </a>
        <div class="nav__search">
          <button class="nav__search-btn">
            <img src="@/assets/images/theme.svg" alt="" />
          </button>
          <label for="">
            <input
              type="text"
              class="nav__input"
              placeholder="Выбрать город"
              v-model="searchController"
              @keydown.enter="setWeather"
            />
            <button class="nav__search-theme">
              <img
                src="@/assets/images/close.webp"
                alt=""
                v-if="searchController"
                @click="searchController = ''"
              />
            </button>
          </label>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchController: "",
    };
  },

  methods: {
    setWeather() {
      this.$store.dispatch('getWeatherData', this.searchController)
    },
  },
};
</script>

<style>
.nav {
  padding: 20px 0;
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav__logo span {
  color: #4793ff;
  font-family: "Montserrat";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.nav__search label {
  position: relative;
}

.nav__search label img {
  position: absolute;
  width: 20px;
  top: 50%;
  transform: translate(50%, -50%);
  right: 20px;
}

.nav__search label button {
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
}

.nav__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__input {
  border: none;
  outline: none;
  color: #000;
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 10px;
  background: rgba(71, 147, 255, 0.2);
  padding: 9px 20px;
}

.nav__input::placeholder {
  color: #000;
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.nav__search {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav__search-btn {
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
}

.nav__search-btn:active {
  transform: scale(0.9);
}
</style>