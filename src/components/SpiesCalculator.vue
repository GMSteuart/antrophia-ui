<template>
  <div>
    <p v-if="error">{{ error }}</p>
    <p v-else>Estimated Train Time: {{ time }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'spies-calculator',
  data() {
    return {
      time: 0,
      error: false,
    };
  },
  mounted() {
    Array.from(document.getElementsByClassName('spy-train-input'))
      .forEach((el) => el.addEventListener('change', () => {
        const formData = new FormData(document.getElementById('spy-train-form'));
        axios.post('/spies/calc.json', formData)
          .then(({ data }) => {
            this.time = data.time;
            this.error = data.error;
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
