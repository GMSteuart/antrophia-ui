<template>
  <div>
    <!--<div>-->
      <!--<h1>Alliance - Banks</h1>-->
      <!--<p>Help your alliance out by dopositing cardisium into the alliance bank.</p>-->
      <!--<?php-->

  <!--// Alliance information-->
  <!--$alli_banks = ($alli['AllianceBuilding']['Banks'] == null ? 0 : $alli['AlliancesBuilding']['Banks']);-->
  <!--$alli_land = ($alli['Alliance']['land'] == null ? 0 : $alli['Alliance']['land']);-->

  <!--// Calculate Max Deposit Information-->
  <!--$cur_cards = $info['UserGame']['money'];-->
  <!--$cur_hold = $alli['Alliance']['bank_money'];-->

  <!--$max_hold =  $alli_banks * 250000;-->
  <!--//$max_hold = ($max_hold == 0 ? 1 : $max_hold);-->
  <!--$cur_percent = ($cur_hold / $max_hold)*100;-->
  <!--$max_deposit = $max_hold - $cur_hold;-->
  <!--// Check to see if max deposit is greater than current amount of cardisium-->
  <!--if($max_deposit > $cur_cards) {-->
      <!--$max_deposit = $cur_cards; // go ahead and set the max deposit to current amount of cardisium-->
      <!--}-->

      <!--// Check to see if alliance has any banks-->
      <!--if($alli_banks > 0) {-->
      <!--?>-->
      <!--<div id="deposit" style="display:none;">Cardisium has been deposited!</div>-->


      <!--<?php-->
    <!--echo $this->Form->create('Deposit', array('action' => 'deposit', 'id' => 'AllianceForm'));-->
      <!--?>-->
      <!--<fieldset>-->
        <!--<legend>Deposit</legend>-->
        <!--<?php-->
      <!--echo $this->Form->input('money', array('label' => 'Cardisium:'));-->
        <!--echo $this->Form->end('Deposit Money');-->
        <!--/*-->
        <!--echo $this->Js->submit('Deposit Money', array(-->
        <!--'url' => '/base/deposit',-->
        <!--'method' => 'POST',-->
        <!--'data' => $this->Js->get('#AllianceForm')->serializeForm(array('isForm' => true, 'inline' => 'false')),-->
        <!--'dataExpression' => true,-->
        <!--//'before' => $this->Js->get('#deposit')->effect('fadeIn'),-->
        <!--//'complete' => $this->Js->get('#deposit')->effect('fadeIn'),-->
        <!--'update' => '#deposit',-->
        <!--//'error' => $fail,-->
        <!--)-->
        <!--);-->
        <!--echo $this->Form->end();*/-->

        <!--?>-->
      <!--</fieldset>-->
      <!--<?php-->
    <!--// Other wise they dont have banks-->
  <!--} else {-->
    <!--?>-->
      <!--<p>Your aliance appears to have no banks! To get alliance banks, donate land to your alliance then begin building them.</p>-->
      <!--<?php-->
  <!--} //end alliance banks check-->
  <!--?>-->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "BaseDeposit"
  }
</script>

<style lang="scss" scoped>

</style>