<template>
  <div>
    <!--<div>-->
      <!--<fieldset>-->
        <!--<legend>Send Message</legend>-->
        <!--<?php-->
    <!--echo $this->Form->create('Message', array(-->
        <!--'url' => array('action' => 'send', isset($id) ? $id : null),-->
        <!--'role' => 'form', 'class' => 'message-send horizontal-form',-->
        <!--'id' => 'messageForm'-->
        <!--));-->
        <!--echo $this->Form->input('to_id', array(-->
        <!--'value' => isset($id) ? $id : null,-->
        <!--'type' => 'select',-->
        <!--'label' => array('text' => 'Recipient ID', 'class' => 'sr-only'),-->
        <!--'options' => $players,-->
        <!--'placeholder' => 'Recipient Username or ID',-->
        <!--'class' => 'form-control', 'div' => 'form-group'-->
        <!--));-->

        <!--echo $this->Form->input('subject', array(-->
        <!--'label' => array('text' => 'Subject', 'class' => 'sr-only'),-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'placeholder' => 'Subject'-->
        <!--));-->
        <!--echo $this->Form->input('message', array(-->
        <!--'label' => array('text' => 'Message', 'class' => 'sr-only'),-->
        <!--'type' => 'textarea',-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'placeholder' => 'What would you like to message them?'-->
        <!--));-->

        <!--echo $this->Form->end(array('label' => 'Send Message', 'class' => 'btn btn-success'));-->

        <!--?>-->
      <!--</fieldset>-->
      <!--<?php-->
  <!--echo $this->Html->link('Back to Inbox',-->
      <!--array('action' => 'index'),-->
      <!--array('class' => 'btn btn-primary')-->
      <!--);-->
      <!--?>-->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "MessagesSend"
  }
</script>

<style lang="scss" scoped>

</style>