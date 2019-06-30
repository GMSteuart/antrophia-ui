<template>
  <div>
    <!--<div>-->
      <!--<h2>Science Labs</h2>-->
      <!--<?php-->
  <!--// Check to see if they are already exploring-->
  <!--if(isset($player['Research']['end'])) {-->
    <!--?>-->
      <!--<p class="alert alert-warning"><b>Your scientists are currently researching.-->
        <!--They will be done in about-->
        <!--<?php-->
        <!--echo $this->Time->timeAgoInWords(-->
        <!--$player['Research']['end']-->
        <!--);-->

        <!--?>-->
      <!--</b></p>-->
      <!--<?php-->
    <!--//Output button to stop explore-->
    <!--echo $this->Html->link('Cancel Research',-->
      <!--array('action' => 'cancel'),-->
      <!--array('class' => 'btn btn-danger'),-->
      <!--'Are you sure you want to cancel research?'-->
      <!--);-->
      <!--echo '<br /><br />';-->
      <!--}-->
      <!--?>-->

      <!--<p>Here you can research different aspects of your empire to increase their effectiveness.</p>-->

      <!--<table class="table">-->
        <!--<caption><h4>Possible Science Lab Research</h4></caption>-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th>Name</th>-->
          <!--<th>Current</th>-->
          <!--<th>Duration</th>-->
          <!--<th></th>-->
          <!--<th></th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<?php foreach($labs as $lab) : ?>-->
        <!--<tr>-->
          <!--<td>-->
            <!--<?php-->
          <!--echo ucfirst($lab['Lab']['name']);-->
          <!--?>-->
          <!--</td>-->
          <!--<td>-->
            <!--<?php-->
          <!--if(isset($player['Labs'][$lab['Lab']['name']])) {-->
            <!--echo $player['Labs'][$lab['Lab']['name']]['amount'];-->
          <!--} else {-->
            <!--echo 0;-->
          <!--}-->
          <!--?>-->
          <!--</td>-->
          <!--<td>-->
            <!--<?php echo $lab['Lab']['duration']; ?>-->
          <!--</td>-->
          <!--<td>-->
            <!--<?php-->
          <!--echo $this->Html->link('Info',-->
            <!--array('action' => 'view', $lab['Lab']['id']),-->
            <!--array('class' => 'btn btn-info'))-->
            <!--?>-->
          <!--</td>-->
          <!--<td>-->
            <!--<?php-->
          <!--if(isset($player['Research'])) {-->
            <!--if($player['Research']['lab_id'] === $lab['Lab']['id']) {-->
              <!--echo $this->Html->link('Cancel',-->
            <!--array('action' => 'cancel'),-->
            <!--array('class' => 'btn btn-danger btn-xs'),-->
            <!--'Are you sure you want to cancel research?'-->
            <!--);-->
            <!--}-->
            <!--} else {-->
            <!--echo $this->Html->link('Research',-->
            <!--array('action' => 'research', $lab['Lab']['id']),-->
            <!--array('class' => 'btn btn-success btn-xs')-->
            <!--);-->
            <!--}-->
            <!--?>-->
          <!--</td>-->
        <!--</tr>-->
        <!--<?php endforeach; ?>-->
        <!--</tbody>-->
      <!--</table>-->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "LabsIndex"
  }
</script>

<style lang="scss" scoped>

</style>