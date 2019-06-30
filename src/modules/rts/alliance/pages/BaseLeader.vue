<template>
  <div>
    <!--<h2>Alliance</h2>-->
    <!--<h3>Leader Options</h3>-->
    <!--<div class="row">-->
      <!--<div class="col-lg-4">-->
        <!--<fieldset>-->
          <!--<legend>Transfer Leadership</legend>-->
          <!--<?php-->
            <!--echo $this->Form->create('Kick', array('role' => 'form', 'class' => 'horizontal-form'));-->
          <!--echo $this->Form->input('member_id', array(-->
          <!--'class' => 'form-control', 'div' => 'form-group',-->
          <!--'label' => 'New Leader',-->
          <!--'type' => 'select', 'options' => $members-->
          <!--));-->
          <!--echo $this->Form->end(array('label' => 'Transfer Leadership', 'class' => 'btn btn-danger'));-->
          <!--?>-->
        <!--</fieldset>-->
        <!--<br />-->
      <!--</div>-->
      <!--<div class="col-lg-4">-->
        <!--<fieldset>-->
          <!--<legend>Disband Alliance</legend>-->
          <!--<p>Make sure this is something you really want to do</p>-->
          <!--<?php-->
            <!--echo $this->Html->link('Disband Alliance',-->
          <!--array('action' => 'disband'),-->
          <!--array('class' => 'btn btn-danger'),-->
          <!--'Are you sure you want to disband the alliance?'-->
          <!--);-->
          <!--?>-->
        <!--</fieldset>-->
      <!--</div>-->
    <!--</div>-->
    <!--<br />-->
    <!--<div class="row">-->
      <!--<div class="col-lg-4">-->
        <!--<?php-->
            <!--echo $this->Html->link('Back to Base',-->
        <!--array('action' => 'index'),-->
        <!--array('class' => 'btn btn-primary')-->
        <!--);-->
        <!--?>-->
      <!--</div>-->
    <!--</div>-->


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "BaseLeader"
  }
</script>

<style lang="scss" scoped>

</style>