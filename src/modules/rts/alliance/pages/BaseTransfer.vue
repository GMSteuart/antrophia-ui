<template>
  <div>
    <!--<div>-->
      <!--<h1>Alliance - Transfer Resources</h1>-->
      <!--<p>Transfer Cardisium and resources to your alliance members.</p>-->

      <!--<div class="action"></div>-->
      <!--<fieldset>-->
      <!--<legend>Transfer</legend>-->
      <!--<?php-->
      <!--echo $this->Form->create('Transfer', array('role' => 'form', 'class' => 'horizontal-form'));-->
      <!--?>-->

      <!--<?php-->
      <!--echo $this->Form->input('to_id', array(-->
      <!--'class' => '',-->
      <!--'div' => '',-->
      <!--'label' => 'Select Members:',-->
      <!--'multiple' => 'checkbox',-->
      <!--'options' => $members,-->
      <!--'hiddenField' => false,-->
      <!--//'type' => 'checkbox'-->
      <!--));-->
      <!--?>-->

      <!--<?php foreach($types as $type_name => $minerals): ?>-->
      <!--<table class="table table-condensed">-->
      <!--<caption><h4><?php echo $type_name; ?></h4></caption>-->
      <!--<thead>-->
      <!--<tr>-->
      <!--<th>Name</th>-->
      <!--<th>Current</th>-->
      <!--<th>Amount</th>-->
      <!--</tr>-->
      <!--</thead>-->
      <!--<tbody>-->
      <!--<?php-->
      <!--foreach($minerals as $mineral_name => $mineral): ?>-->
      <!--<tr>-->
      <!--<td><?php echo $mineral_name;?></td>-->
      <!--<td><?php echo number_format($player['Minerals'][$mineral_name]['amount']); ?></td>-->
      <!--<td>-->
      <!--<?php-->
      <!--echo $this->Form->input(null, array(-->
      <!--'label' => false,-->
      <!--'div' => null,-->
      <!--'class' => 'form-control',-->
      <!--'name' => "data[Transfer][minerals][" . $mineral_name . "][amount]",-->
      <!--'type' => 'text'-->
      <!--));-->

      <!--?>-->
      <!--</td>-->
      <!--</tr>-->
      <!--<?php endforeach; ?>-->
      <!--</tbody>-->
      <!--</table>-->
      <!--<?php endforeach; ?>-->

      <!--<?php-->
      <!--echo $this->Form->end(array('label' => 'Transfer Minerals', 'class' => 'btn'));-->
      <!--?>-->
      <!--</fieldset>-->


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
    name: "BaseTransfer"
  }
</script>

<style lang="scss" scoped>

</style>