<template>
  <div>
    <!--<h3>Transfer Alliance Leadership</h3>-->

    <!--<?php-->
<!--// Output the leadership transfer only if there are other members-->
		<!--if(!empty($nonLeaders)) {-->
<!--?>-->

    <!--<fieldset class="alli_leadership_fieldset">-->
      <!--<legend>Leadership Transfer</legend>-->
      <!--<?php	-->
					<!--// Leadership transfer-->
					<!--echo $this->Form->create('Leader', array('action' => 'transferLeader', 'id' => 'AllianceForm'));-->
      <!--echo $this->Form->input('user_id', array(-->
      <!--'type'    => 'select',-->
      <!--'options' => $nonLeaders,-->
      <!--'empty'   => true-->
      <!--));-->
      <!--echo $this->Js->submit('Transfer Leadship', array(-->
      <!--'url' => '/game/base/transferLeader',-->
      <!--'method' => 'POST',-->
      <!--'data' => $this->Js->get('#AllianceForm')->serializeForm(array('isForm' => true, 'inline' => 'false')),-->
      <!--'dataExpression' => true,-->
      <!--//'before' => $this->Js->get('#deposit')->effect('fadeIn'),-->
      <!--//'complete' => $this->Js->get('#leader')->effect('fadeIn'),-->
      <!--//'update' => '#deposit',-->
      <!--//'error' => $fail,-->
      <!--));-->
      <!--echo $this->Form->end();-->
      <!--?>-->
    <!--</fieldset>-->
    <!--<?php-->
		<!--} // end nonleader count check-->
		<!---->
<!--?>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "BaseTransferLeader"
  }
</script>

<style lang="scss" scoped>

</style>