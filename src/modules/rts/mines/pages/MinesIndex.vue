<template>
  <div>
    <!--<div>-->
      <!--<fieldset>-->
        <!--<legend>Mines</legend>-->
        <!--<p>Mining allows you obtain minerals cheaper than what the market or shops could possibly offer.-->
          <!--Each race has 5 minerals they can mine.-->
          <!--Use these minerals to your advantage by speeding up your barracks training,-->
          <!--building scanners to help with exploring, and adding to the alliance Long Range Cannon-->
          <!--to attack other alliance. Set your mining percentages below:-->
        <!--</p>-->
        <!--<?php-->
    <!--echo $this->Form->create('UserMine', array(-->
        <!--'url' => '/mines/update',-->
        <!--'id' => 'mine-form',-->
        <!--'role' => 'form', 'role' => 'form',-->
        <!--'class' => 'horizontal-form'-->
        <!--));-->
        <!--?>-->

        <!--<?php foreach($mines as $mine): ?>-->
        <!--<div class="col-sm-4">-->
          <!--<b title="<?php echo $mine['Mineral']['info']; ?> "><?php echo $mine['Mineral']['name']; ?></b><br />-->
          <!--Market Cost: <?php echo number_format($mine['Mineral']['cost']); ?><br />-->
          <!--Amount left: <?php echo number_format($mine['Mines']['amount']); ?><br /><br />-->
          <!--<?php-->
        <!--echo $this->Form->input($mine['Mines']['mineral_id'], array(-->
          <!--'value' => $mine['Mines']['pct'],-->
          <!--'id' => $mine['Mineral']['name'] . '_input',-->
          <!--'type' => 'text',-->
          <!--'label' => ''-->
          <!--));-->
          <!--?>-->
        <!--</div>-->
        <!--<?php endforeach; ?>-->
        <!--<?php echo $this->Form->end(['label' => 'Update Mines']); ?>-->
      <!--</fieldset>-->
    <!--</div>-->

  </div>
</template>

<script>
  export default {
    name: "MinesIndex"
  }
</script>

<style lang="scss" scoped>

</style>