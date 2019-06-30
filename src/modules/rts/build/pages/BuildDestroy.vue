<template>
  <div>
    <!--<div>-->
      <!--<h1>Destroy Buildings</h1>-->

      <!--<div class="alert alert-danger">This is the destroy buildings page!</div>-->
      <!--<?php-->

  <!--echo $this->Form->create('Build', array('role' => 'form', 'class' => 'form-inline'));-->

      <!--$type = '';-->
      <!--?>-->

      <!--<?php foreach ($buildings as $building):  //iterate through the buildings ?>-->
      <!--<?php if(strtolower($type) !== strtolower($building['Type']['name'])) { //check the type for headers-->
<!--$type = $building['Type']['name']; //set the type if its changed-->
<!--// close off previous table-->

<!--?>-->
      <!--</tbody>-->
      <!--</table>-->


      <!--<table class="table table-condensed" style="width: 45%; float: left; height: 300px; margin: 5px;">-->
        <!--<caption><h4><?php echo ucfirst($type);?></h4></caption>-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th>Name</th>-->
          <!--<th>Current</th>-->
          <!--<th>Amount</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<?php-->
    <!--}//end type check-->
    <!--?>-->
        <!--<tr>-->
          <!--<td title="<?php echo $building['Building']['info']; ?>" data-toggle="tooltip">-->
            <!--<?php echo $building['Building']['name'];?></td>-->
          <!--<td><?php	//Players current amount-->
        <!--echo (empty($player['Buildings'][$building['Building']['name']])-->
          <!--? '0'-->
          <!--: number_format($player['Buildings'][$building['Building']['name']]['amount'])) ;-->
        <!--?></td>-->
          <!--<td><?php-->
        <!--//Form input for amount-->
        <!--echo $this->Form->input($building['Building']['name'], array(-->
            <!--'label' => false,-->
            <!--'div' => 'form-group',-->
            <!--'class' => 'form-control',-->
            <!--'type' => 'number'-->
            <!--));-->

            <!--?></td>-->
        <!--</tr>-->

        <!--<?php endforeach;  ?>-->
        <!--</tbody>-->
      <!--</table>-->
      <!--<?php echo $this->Form->end(array('label' => 'Destroy Buildings', 'class' => 'btn btn-danger')); ?>-->
      <!--<br />-->
      <!--<?php echo $this->Html->link('Back to Build', array('action' => 'index'), array('class' => 'btn btn-primary')); ?>-->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "BuildDestroy"
  }
</script>

<style lang="scss" scoped>

</style>