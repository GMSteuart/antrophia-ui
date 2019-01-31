<template>
  <div>
    <h3>Factories</h3>
    <p>
      Your factories help with three different things,
      <ol>
        <li>increasing the speed of constructing buildings</li>
        <li>manufacturing scanners to help with explores</li>
        <li>manufacturing missiles to launch at other players</li>
      </ol>
      The sum of your factory percentages must be no greater than 100%.
    </p>
    <p>You can update the percentages below:</p>
    <factories-form></factories-form>
  </div>
</template>

<script>
import FactoriesForm from '../components/FactoriesForm';

export default {
  name: 'FactoriesIndex',
  components: {
    FactoriesForm,
  },
};
</script>

<style lang="scss" scoped>
</style>
