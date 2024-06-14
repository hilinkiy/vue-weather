<template>
  <div class="daily__card">
    <h4 class="card__title">{{card.dateIndex}}</h4>
    <p class="card__date">28 авг</p>
    <img src="../assets/images/wheater 1.svg" alt="" />
    <p class="card__degree">+18° <span>+15°</span></p>
    <p class="card__descr">Облачно</p>
  </div>
</template>

<script>
export default {
  data() {  
    return {
      card: this.card,
    };
  },
  props: {
    card: Object,
  },
};
</script>

<style>
.daily__card {
  border-radius: 10px;
  background: rgba(71, 147, 255, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 150px;
}

.card__title {
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.card__date {
  color: #939cb0;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 7px;
  margin-bottom: 12px;
}

.card__degree {
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  flex-direction: column;
  margin-top: 13px;
  margin-bottom: 6px;
}

.card__degree span {
  color: #939cb0;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.card__descr {
  color: #939cb0;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>