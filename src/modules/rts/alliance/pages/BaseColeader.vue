<template>
  <div>
    <!--<div>-->
      <!--<h1>Alliance - Assign Coleader</h1>-->
      <!--<p>Select your Coleader carefully as they gain the privileges to boot members and withdraw and transfer money-->
        <!--from the alliance bank.</p>-->

      <!--<?php if(empty($members)): ?>-->
      <!--<p>You do not have enough members to assign a coleader! Look to expand your alliance to assign one.</p>-->
      <!--<?php else: ?>-->
      <!--<fieldset>-->
        <!--<legend>Assign Coleader</legend>-->
        <!--<?php-->
      <!--if(!empty($alliance['Coleader']['id'])) {?>-->
        <!--<b>Current Coleader:</b> <?php echo $alliance['Coleader']['alias']; ?>-->
        <!--<br />-->
        <!--<br />-->

        <!--<?php-->
        <!--// Output a transfer form-->
        <!--echo $this->Form->create('Assign', array('role' => 'form', 'class' => 'horizontal-form'));-->
        <!--echo $this->Form->input('coleader_id', array(-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'label' => 'Transfer Coleader to:',-->
        <!--'type' => 'select', 'options' => $members-->
        <!--));-->
        <!--echo $this->Form->end(array('label' => 'Transfer Coleader', 'class' => 'btn btn-success'));-->
        <!--} else {-->

        <!--// Output an assign form-->
        <!--echo $this->Form->create('Assign', array('role' => 'form', 'class' => 'horizontal-form'));-->
        <!--echo $this->Form->input('coleader_id', array(-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'label' => 'Assign Coleader to:',-->
        <!--'type' => 'select', 'options' => $members-->
        <!--));-->
        <!--echo $this->Form->end(array('label' => 'Assign Coleader', 'class' => 'btn btn-success'));-->

        <!--}-->
        <!--?>-->
      <!--</fieldset>-->
      <!--<?php endif; ?>-->

      <!--<?php-->
  <!--if(isset($alliance['Coleader']['id'])) {-->
    <!--echo $this->Html->link('Remove Coleader',-->
      <!--array('action' => 'coleader', 'remove'),-->
      <!--array('class' => 'btn btn-danger'),-->
      <!--'Are you sure you want to remove ' . $alliance['Coleader']['alias'] . ' as a Coleader?'-->
      <!--);-->
      <!--}-->
      <!--?>-->
      <!--<h5></h5>-->
    <!--</div>-->
    <!--<?php-->
<!--echo $this->Html->link('Back to Base',-->
    <!--array('action' => 'index'),-->
    <!--array('class' => 'btn btn-primary')-->
    <!--);-->
    <!--?>-->



  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "BaseColeader"
  }
</script>

<style lang="scss" scoped>

</style>