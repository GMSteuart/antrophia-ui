<template>
  <div>
    <!--<div class="row">-->
      <!--<div class="col-lg-12">-->
        <!--<h2>Alliance</h2>-->
        <!--<h3>Settings</h3>-->
        <!--<p>Feel free to update your alliance's password or description here.</p>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="row">-->
      <!--<div class="col-lg-8">-->
        <!--<fieldset>-->
          <!--<legend>Change Description</legend>-->
          <!--<?php-->
            <!--echo $this->Form->create('Info', array('role' => 'form', 'class' => 'horizontal-form'));-->
          <!--echo $this->Form->input('content', array(-->
          <!--'class' => 'form-control', 'div' => 'form-group',-->
          <!--'type' => 'textarea',-->
          <!--'value' => $alliance['Alliance']['info']-->
          <!--));-->
          <!--echo $this->Form->end(array('label' => 'Update Description', 'class' => 'btn btn-success'));-->
          <!--?>-->
        <!--</fieldset>-->
      <!--</div>-->
      <!--<div class="col-lg-4">-->
        <!--<fieldset>-->
          <!--<legend>Change Password</legend>-->
          <!--<?php-->
            <!--echo $this->Form->create('Password', array('role' => 'form', 'class' => 'horizontal-form'));-->
          <!--echo $this->Form->input('password', array(-->
          <!--'class' => 'form-control', 'div' => 'form-group',-->
          <!--'label' => array('class' => 'sr-only', 'value' => 'New Password'),-->
          <!--'placeholder' => 'New Password'-->
          <!--));-->
          <!--echo $this->Form->input('password_confirm', array(-->
          <!--'class' => 'form-control', 'div' => 'form-group',-->
          <!--'label' => array('class' => 'sr-only', 'value' => 'Confirm Password'),-->
          <!--'placeholder' => 'Confirm Password', 'type' => 'password'-->
          <!--));-->
          <!--echo $this->Form->end(array('label' => 'Update Password', 'class' => 'btn btn-success'));-->
          <!--?>-->
        <!--</fieldset>-->
      <!--</div>-->
    <!--</div>-->
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
    name: "BaseSettings"
  }
</script>

<style lang="scss" scoped>

</style>