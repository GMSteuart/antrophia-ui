<template>
  <div>
    <!--<div>-->
      <!--<h2>Spy Center</h2>-->
      <!--<p>Here you can train spies and send them out to gain information about your opponents empire.-->
        <!--Each spy center allows you to train 1 spy. The more spies you have trained, the more accurate your reports-->
        <!--become, and more types of reports become available. Remember, theres a chance that spies will not return-->
        <!--from their mission.-->
      <!--</p>-->

      <!--<p>-->
        <!--<?php-->
    <!--echo $this->Html->link('View Reports',-->
        <!--array('action' => 'view'),-->
        <!--array('class' => 'btn btn-success')-->
        <!--);-->
        <!--?>-->
      <!--</p>-->


      <!--<p>-->
        <!--<?php echo number_format($player['UserGame']['spies']); ?>-->
        <!--/ <?php echo number_format($player['Buildings']['Spy Stations']['amount']); ?> Spies-->
      <!--</p>-->
    <!--</div>-->
    <!--<div>-->
      <!--<?php-->
  <!--// Check to see if they are already training-->
  <!--if(isset($player['Spy'])) {-->
    <!--?>-->
      <!--<p><b>Your spies are currently being trained!-->
        <!--You will have to wait until they done before you can train more.-->
        <!--They will be done in about-->
        <!--<?php-->
        <!--echo $this->Time->timeAgoInWords(-->
        <!--$player['Spy']['end'],-->
        <!--array(-->
        <!--'end' => '+1day'-->
        <!--)-->
        <!--);-->

        <!--?>-->
      <!--</b></p>-->
      <!--<?php-->
    <!--//Output button to stop train-->
    <!--echo $this->Html->link('Cancel Train',-->
      <!--array('action' => 'cancel'),-->
      <!--array('class' => 'btn btn-danger'),-->
      <!--'Are you sure you want to cancel your spy training?'-->
      <!--);-->
      <!--echo '<br /><br />';-->
      <!--} else {-->
      <!--?>-->
      <!--<fieldset>-->
        <!--<legend>Train</legend>-->
        <!--<spies-calculator></spies-calculator>-->
        <!--<?php-->
      <!--echo $this->Form->create('Spy', array('url' => ['controller' => 'spies', 'action' => 'train'], 'id' => 'spy-train-form', 'role' => 'form', 'class' => 'horizontal-form'));-->
        <!--echo $this->Form->input('amount', array(-->
        <!--'label' => 'Amount',-->
        <!--'div' => 'form-group',-->
        <!--'class' => 'spy-train-input'-->
        <!--));-->

        <!--echo $this->Form->end(array('label' => 'Train Spies', 'class' => 'btn btn-success'));-->
        <!--?>-->
      <!--</fieldset>-->
      <!--<?php } ?>-->
    <!--</div>-->
    <!--<div>-->
      <!--<?php-->
  <!--// Check they have spies to send-->
  <!--if($player['UserGame']['spies'] > 0) { ?>-->
      <!--<fieldset>-->
        <!--<legend>Send</legend>-->
        <!--<?php-->
      <!--echo $this->Form->create('SpyReports', array(-->
        <!--'url' => array('controller' => 'spies', 'action' => 'send'),-->
        <!--'id' => 'SpyForm', 'role' => 'form',-->
        <!--'class' => 'horizontal-form'-->
        <!--));-->
        <!--echo $this->Form->input('amount', array(-->
        <!--'label' => 'Amount',-->
        <!--'class' => 'form-control',-->
        <!--'div' => 'form-group'-->
        <!--));-->
        <!--echo $this->Form->input('target_id', array(-->
        <!--'class' => 'form-control',-->
        <!--'div' => 'form-group',-->
        <!--'label' => 'Target',-->
        <!--'type' => 'select', 'options' => $targets-->
        <!--));-->
        <!--echo $this->Form->input('type_id', array(-->
        <!--'class' => 'form-control',-->
        <!--'div' => 'form-group',-->
        <!--'label' => 'Type (Spies Needed):',-->
        <!--'type' => 'select', 'options' => $types-->
        <!--));-->
        <!--echo $this->Form->end(array('label' => 'Send Spies', 'class' => 'btn btn-success'));-->

        <!--?>-->

      <!--</fieldset>-->
      <!--<?php-->
  <!--}-->
  <!--?>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "SpiesIndex"
  }
</script>

<style lang="scss" scoped>

</style>