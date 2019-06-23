<template>
  <div>
    <!--<h2>Alliance</h2>-->
    <!--<h3>Long Range Cannon</h3>-->
    <!--<p>Welcome to the alliance's LRC. Here you can construct the LRC, add the necessary minerals, and select a target-->
      <!--alliance. When a LRC is fired, it will fire off a certain amount of shots at the target alliance randomly-->
      <!--choosing their members, damaging 10% of each members buildings and military.</p>-->
    <!--<?php-->
<!--// Check if the alliance has an active LRC and its not finished-->
<!--if(empty($alliance['Lrc']['name']) && !($alliance['Lrc']['finished'])) {-->
  <!--// Allow them to create one if not-->
  <!--echo $this->Form->create('Lrc', array('role' => 'form', 'class' => 'horizontal-form'));-->
    <!--?>-->
    <!--<fieldset class="fieldset">-->
      <!--<legend>Create LRC</legend>-->

      <!--<?php-->
    <!--echo $this->Form->input('name', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => array('class' => 'sr-only', 'text' => 'LRC Name'),-->
      <!--'placeholder' => 'LRC Name'-->
      <!--));-->
      <!--echo $this->Form->end(array('label' => 'Create LRC', 'class' => 'btn btn-success'));-->

      <!--?>-->
    <!--</fieldset>-->
    <!--<?php-->
  <!--// otherwise allow them to add to the LRC when its still not finished-->
<!--} elseif ($alliance['Lrc']['name'] && !($alliance['Lrc']['finished'])) {-->
  <!--echo $this->Form->create('LrcAdd', array('role' => 'form', 'class' => 'horizontal-form'));-->
    <!--?>-->
    <!--<fieldset class="fieldset">-->
      <!--<legend><?php echo $alliance['Lrc']['name']; ?></legend>-->
      <!--<?php-->
    <!--echo $this->Form->input('money', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Cardisium: ' . number_format($alliance['Lrc']['money']) . '/1,000,000,000'-->
      <!--));-->
      <!--echo $this->Form->input('ciber', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Ciber: ' . number_format($alliance['Lrc']['Ciber']) . '/25,000'-->
      <!--));-->
      <!--echo $this->Form->input('sophitor', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Sophitor: ' . number_format($alliance['Lrc']['Sophitor']) . '/25,000'-->
      <!--));-->
      <!--echo $this->Form->input('positronium', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Positronium: ' . number_format($alliance['Lrc']['Positronium']) . '/25,000'-->
      <!--));-->
      <!--echo $this->Form->input('aldora', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Aldora: ' . number_format($alliance['Lrc']['Aldora']) . '/25,000'-->
      <!--));-->
      <!--echo $this->Form->input('ontigro', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Ontigro: ' . number_format($alliance['Lrc']['Ontigro']) . '/25,000'-->
      <!--));-->
      <!--echo $this->Form->input('nerwhil', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Nerwhil: ' . number_format($alliance['Lrc']['Nerwhil']) . '/25,000'-->
      <!--));-->
      <!--echo $this->Form->input('hitera', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Hitera: ' . number_format($alliance['Lrc']['Hitera']) . '/25,000'-->
      <!--));-->
      <!--echo $this->Form->input('antoria', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Antoria: ' . number_format($alliance['Lrc']['Antoria']) . '/25,000'-->
      <!--));-->

      <!--echo $this->Form->end(array('label' => 'Add minerals to LRC', 'class' => 'btn btn-success'));-->

      <!--?>-->
    <!--</fieldset>-->
    <!--<?php-->

  <!--// Check if LRC is done and they are a (co)leader and no target-->
<!--} elseif ($alliance['Lrc']['finished'] && $alliance['Lrc']['target_id'] == 0-->
  <!--&& ($player['UserGame']['id'] == $player['Alliance']['leader_id']-->
    <!--|| $player['UserGame']['id'] == $player['Alliance']['coleader_id']) ) {-->
  <!--?>-->
    <!--<fieldset class="alli_lrc_fieldset">-->
      <!--<legend>Launch <?php echo $alliance['Lrc']['name']; ?></legend>-->
      <!--<?php-->
    <!--echo $this->Form->create('LrcTarget', array('role' => 'form', 'class' => 'horizontal-form'));-->
      <!--echo $this->Form->input('target', array(-->
      <!--'class' => 'form-control', 'div' => 'form-group',-->
      <!--'label' => 'Target', 'options' => $targets-->
      <!--));-->
      <!--echo $this->Form->end(array('label' => 'Launch LRC', 'class' => 'btn btn-success'));-->

      <!--?>-->

    <!--</fieldset>-->
    <!--<?php-->
  <!--// LRC is finished but without a target-->
<!--} elseif ($alliance['Lrc']['finished'] && $alliance['Lrc']['target_id'] == 0) {-->
  <!--?>-->
    <!--<p>The LRC is waiting for a target to be selected. Please contact your (co)leader and have them select a target.</p>-->
    <!--<?php-->
<!--} elseif( $alliance['Lrc']['finished'] && $alliance['Lrc']['target_id'] != 0) {-->
  <!--?>-->
    <!--<p>The LRC is currently in the process of firing. Each shot that lands and hits a target will destroy 10% of-->
      <!--their army and buildings. The damage is decrease dependent on the number of impact shields the target has.</p>-->

    <!--<?php-->

<!--}-->
<!--?>-->
    <!--<?php-->
<!--echo $this->Html->link('Back to Base',-->
    <!--array('action' => 'index'),-->
    <!--array('class' => 'btn btn-primary')-->
    <!--);-->
    <!--?>-->




  </div>
</template>

<script>
  export default {
    name: "BaseLrc"
  }
</script>

<style lang="scss" scoped>

</style>