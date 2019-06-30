<template>
  <div>
    <p>Estimated Barracks Finish: {{ time }}</p>
    <p>Total Cost: {{ cost | numberFormat }} cardisium</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'barracks-calculator',
  data() {
    return {
      cost: 0,
      time: 0,
    };
  },
  mounted() {
    Array.from(document.getElementsByClassName('barracks-amount'))
      .forEach((el) => el.addEventListener('change', () => {
        const formData = new FormData(document.getElementById('barracks-form'));
        axios.post('/barracks/calc.json', formData)
          .then(({ data }) => {
            this.cost = data.cost;
            this.time = data.time;
          })
      }));
  },
  filters: {
    numberFormat(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>
