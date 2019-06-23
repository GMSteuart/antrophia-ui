<template>
  <div>
    <p>Total Cost: {{ cost | numberFormat }} cardisium</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'shops-calculator',
  data() {
    return {
      cost: 0,
    };
  },
  mounted() {
    Array.from(document.getElementsByClassName('shop-input'))
      .forEach((el) => el.addEventListener('change', () => {
        const formData = new FormData(document.getElementById('shop-form'));
        axios.post('/shops/calc.json', formData)
          .then(({ data }) => {
            this.cost = data.cost;
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
