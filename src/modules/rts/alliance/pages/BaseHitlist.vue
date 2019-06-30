<template>
  <div>
    <!--<div>-->
      <!--<h1>Alliance - Hitlist</h1>-->
      <!--<p>Looks like there wasn't just alliances grinding your gears. Here is a list of players your alliance has deemed unworthy of acceptance. Feel free to attack them when possible:</p>-->

      <!--<?php-->
  <!--if(empty($hitlist)) {-->
    <!--?>-->
      <!--<p>There doesn't seem to be any players on the alliance hitlist! If you are an alliance leader or coleader you may add them.</p>-->
      <!--<?php-->
  <!--} else { ?>-->


      <!--<table>-->
        <!--<caption>Hitlist</caption>-->
        <!--<thead>-->
        <!--<th>Name</th>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<?php-->
      <!--// Iterate through the hitlist-->
      <!--foreach($hitlist as $id => $name) {-->
        <!--?>-->
        <!--<tr>-->
          <!--<td><?php echo $name; ?></td>-->
        <!--</tr>-->
        <!--<?php-->
      <!--}-->
      <!--?>-->
        <!--</tbody>-->
      <!--</table>-->

      <!--<?php-->
  <!--}-->

  <!--// Test whether they are a (co)leader-->
  <!--if($player['UserGame']['id'] == $alliance['Alliance']['leader_id']-->
    <!--|| $player['UserGame']['id'] == $alliance['Alliance']['coleader_id']):-->
    <!--?>-->


      <!--<fieldset>-->
        <!--<legend>Add to Hitlist</legend>-->
        <!--<?php-->
      <!--echo $this->Form->create('Hitlist', array('url' => '/base/hitlist/add', 'role' => 'form', 'class' => 'horizontal-form'));-->
        <!--echo $this->Form->input('target_id', array(-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'label' => 'Player',-->
        <!--'type' => 'select', 'options' => $targets-->
        <!--));-->
        <!--echo $this->Form->end(array('label' => 'Add to Hitlist', 'class' => 'btn btn-success'));-->

        <!--?>-->
      <!--</fieldset>-->

      <!--<?php if(!empty($hitlist)): ?>-->
      <!--<fieldset>-->
        <!--<legend>Remove from Hitlist</legend>-->
        <!--<?php-->
      <!--echo $this->Form->create('Hitlist', array('url' => '/base/hitlist/remove', 'role' => 'form', 'class' => 'horizontal-form'));-->
        <!--echo $this->Form->input('target_id', array(-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'label' => 'Player',-->
        <!--'type' => 'select', 'options' => $hitlist-->
        <!--));-->
        <!--echo $this->Form->end(array('label' => 'Remove from Hitlist', 'class' => 'btn btn-warning'));-->

        <!--?>-->
      <!--</fieldset>-->
      <!--<?php endif; ?>-->
      <!--<?php endif; ?>-->
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
    name: "BaseHitlist"
  }
</script>

<style lang="scss" scoped>

</style>