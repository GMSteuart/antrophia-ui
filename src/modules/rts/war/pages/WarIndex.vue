<template>
  <div>
    <!--<div>-->
    <!--<div>-->
    <!--<h2>War</h2>-->
    <!--<p>Attack empires or send missiles at them, learn from your battle reports, and become the top player!</p>-->
    <!--them</p>-->
    <!--<p>Targets with a time next to their name shows how much longer you have left to make a retaliation attack on them.-->
    <!--Retaliation attacks allow you to hit your opponent regardless of whether or not they are protected.</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div>-->
    <!--<div>-->
    <!--<p>-->
    <!--<?php-->
    <!--echo $this->Html->link('View Battle Reports',-->
    <!--array('action' => 'view'),-->
    <!--array('class' => 'btn btn-primary')-->
    <!--);-->
    <!--?>-->
    <!--</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div>-->
    <!--<div>-->
    <!--<?php-->
    <!--// Check if they can even attack anyone-->
    <!--if(empty($targets)) {-->
    <!--?>-->
    <!--<br />-->
    <!--<br />-->
    <!--<p class="text-danger">You appear to have no attackable targets!</p>-->
    <!--<br />-->
    <!--<?php-->
    <!--// Otherwise they can-->
    <!--} else {-->

    <!--echo $this->Form->create('Battle', array('url' => array('controller' => 'war', 'action' => 'attack'), 'role' => 'form', 'class' => 'horizontal-form'));-->
    <!--?>-->
    <!--<fieldset>-->
    <!--<?php-->
    <!--echo $this->Form->input('defender_id', array(-->
    <!--'label' => 'Who would you like to attack?',-->
    <!--'options' => $targets,-->
    <!--'class' => 'form-control', 'div' => 'form-group',-->
    <!--'escape' => false-->
    <!--));-->
    <!--echo $this->Form->end(array('label' => 'Attack Empire', 'class' => 'btn btn-success'));-->
    <!--echo '<br />';-->
    <!--echo $this->Form->submit('Attack and Disable Turrets', array(-->
    <!--'div' => false,-->
    <!--'name' => 'disable',-->
    <!--'class' => 'btn btn-warning'-->
    <!--));-->
    <!--}-->
    <!--?>-->
    <!--</fieldset>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="row">-->
    <!--<div class="col-lg-12">-->
    <!--<table class="table table-condensed">-->
    <!--<caption><h4>Latest Battle Reports</h4></caption>-->
    <!--<thead>-->
    <!--<tr>-->
    <!--<td>Attacker</td> <td>Atk. Power</td> <td>Defender</td> <td>Def. Power</td> <td>Date</td> <td>Counter</td> <td></td>-->
    <!--</tr>-->
    <!--</thead>-->
    <!--<tbody>-->
    <!--<?php foreach($reports as $idx => $report) : ?>-->
    <!--<tr>-->
    <!--<td><?php echo $report['Attacker']['alias']; ?></td>-->
    <!--<td><?php echo number_format($report['Battle']['attacker_power']); ?></td>-->
    <!--<td><?php echo $report['Defender']['alias']; ?></td>-->
    <!--<td><?php echo number_format($report['Battle']['defender_power']); ?></td>-->
    <!--<td><?php echo $this->Time->niceShort($report['Battle']['created']);?></td>-->
    <!--<td><?php echo ($report['Battle']['counter'] == 0 ? 'No' : 'Yes'); ?></td>-->
    <!--<td><?php echo $this->Html->link('View', array('action' => 'view', $report['Battle']['id'])); ?></td>-->
    <!--</tr>-->
    <!--<?php endforeach; ?>-->
    <!--</tbody>-->
    <!--</table>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class WarIndex extends Vue {
  name: string = 'WarIndex'
}
</script>

<style lang="scss" scoped>
</style>
