import axios from 'axios';
import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    apiKey: '85bcea9fc80f978ed17af89f7cab8f51',
    weatherData: null,
    time: null,
  },
  getters: {
    weatherData: state => state.weatherData
  },
  mutations: {
    getWeatherData(state, payload) {
      state.weatherData = payload
    }
  },
  actions: {
    async getWeatherData({
        commit,
        state,
      },
      cityName,
    ) {
      try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${state.apiKey}`);
        const weather = response.data[0];
        let {
          lat,
          lon,
          name
        } = weather;
        let weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${state.apiKey}&lang=ru`);
        let weatherInfo = weatherResponse.data
        let weatherObj = {
          ...weatherInfo,
          name: name
        };
        commit('getWeatherData', weatherObj);
      } catch (error) {
        console.error(error)
      }
    },
    setCityTime({
      commit,
      state,
    }, ) {

    }
  },
  modules: {}
})