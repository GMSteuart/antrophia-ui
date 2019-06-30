<template>
  <div>
    <!--<div>-->
      <!--<h1>Alliance - Relations</h1>-->
      <!--<p>Alliance relationships are crucial to war. When two alliances have declared peace with each other, neither-->
        <!--alliance's member may declare an attack on each other. When two alliance's have declared war with each other,-->
        <!--each members can attack up to double their power. Neutral relationships have no effect one way or the other.-->
        <!--Here is a current report of your alliance's relationship with other alliances:</p>-->

      <!--<table class="table">-->
        <!--<caption><h4>Alliance Relations</h4></caption>-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th>Alliance Name</th>-->
          <!--<th>You Want</th>-->
          <!--<th>They Want</th>-->
          <!--<th>Confirmed</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<?php-->
    <!--// Iterate through all of the alliances-->
    <!--foreach($alliances as $id => $name) {-->
        <!--?>-->
        <!--<tr>-->
          <!--<td><?php echo $this->Html->link($name, array('controller' => 'alliances', 'action' => 'view', $id)); ?></td>-->
          <!--<?php if (isset($alliance['InitiatedRelations'][$id])): ?>-->
          <!--<td><?php echo $relations_types[$alliance['InitiatedRelations'][$id]['alliance_relation_type_id']]; ?></td>-->
          <!--<td><?php echo $relations_types[$alliance['InitiatedRelations'][$id]['target_relation_type_id']]; ?></td>-->
          <!--<td><?php echo ($alliance['InitiatedRelations'][$id]['locked_relation_type_id'] ?  $relations_types[$alliance['InitiatedRelations'][$id]['locked_relation_type_id']] : '&#x2717;'); ?></td>-->

          <!--<?php elseif (isset($alliance['RequestedRelations'][$id])): ?>-->
          <!--<td><?php echo $relations_types[$alliance['RequestedRelations'][$id]['target_relation_type_id']]; ?></td>-->
          <!--<td><?php echo $relations_types[$alliance['RequestedRelations'][$id]['alliance_relation_type_id']]; ?></td>-->
          <!--<td><?php echo ($alliance['RequestedRelations'][$id]['locked_relation_type_id'] ? $relations_types[$alliance['RequestedRelations'][$id]['locked_relation_type_id']] : '&#x2717;'); ?></td>-->

          <!--<?php else: ?>-->
          <!--<td>n/a</td>-->
          <!--<td>n/a</td>-->
          <!--<td>n/a</td>-->
          <!--<?php endif; ?>-->
        <!--</tr>-->
        <!--<?php-->
    <!--}-->


    <!--?>-->
        <!--</tbody>-->
      <!--</table>-->
    <!--</div>-->

    <!--<div>-->
      <!--<?php-->
  <!--// Test whether they are a (co)leader-->
  <!--if($player['UserGame']['id'] == $alliance['Alliance']['leader_id']-->
    <!--|| $player['UserGame']['id'] == $alliance['Alliance']['coleader_id']):-->
    <!--?>-->

      <!--<fieldset>-->
        <!--<legend>Update Relations</legend>-->
        <!--<?php-->
      <!--echo $this->Form->create('Relations', array('role' => 'form', 'class' => 'horizontal-form'));-->
        <!--echo $this->Form->input('target_id', array(-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'label' => 'Select Alliance',-->
        <!--'type' => 'select', 'options' => $alliances)-->
        <!--);-->
        <!--echo $this->form->label(NULL, 'Relation Type:');-->
        <!--echo $this->Form->input('type', array(-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'label' => 'Declare',-->
        <!--'type' => 'select',-->
        <!--'options' => $relations_types-->
        <!--));-->
        <!--echo $this->Form->end(array('label' => 'Update Relations', 'class' => 'btn btn-success'));-->

        <!--?>-->
      <!--</fieldset>-->
      <!--<?php endif; ?>-->
      <!--<br />-->
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
    name: "BaseRelations"
  }
</script>

<style lang="scss" scoped>

</style>