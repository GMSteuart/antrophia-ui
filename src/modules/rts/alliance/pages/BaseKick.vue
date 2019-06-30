<template>
  <div>
    <!--<div>-->
      <!--<h1>Alliance - Kick Member</h1>-->
      <!--<?php if(empty($members)): ?>-->
      <!--<p>You have no one in your alliance to kick!</p>-->
      <!--<?php else: ?>-->
      <!--<fieldset>-->
        <!--<legend>Kick Member</legend>-->
        <!--<p>One of your alliance members not being a team member? Kick them out of the alliance here</p>-->
        <!--<?php-->
      <!--echo $this->Form->create('Kick', array('role' => 'form', 'class' => 'horizontal-form'));-->
        <!--echo $this->Form->input('member_id', array(-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'label' => 'Member',-->
        <!--'type' => 'select', 'options' => $members-->
        <!--));-->
        <!--echo $this->Form->end(array('label' => 'Kick Member', 'class' => 'btn btn-danger'));-->
        <!--?>-->
      <!--</fieldset>-->
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
    name: "BaseKick"
  }
</script>

<style lang="scss" scoped>

</style>