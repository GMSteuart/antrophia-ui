<template>
  <div>
    <h2>Alliance Bank</h2>
    <p>
      Feel free to deposit money into your alliances bank. While the banks here have the same interest as your
      empire's personal banks, pooling the money together will grant far superior results. Furthermore,
      the banking infrastructure created by an alliance allows for all members investing and banking research to
      effect their performance. Note: Money withdrawn and transferred does not go into the members bank!
    </p>

    <alliance-bank-deposit-form></alliance-bank-deposit-form>

    <!--<p>-->
    <!--<b>Current Bank Cardisium:</b> <?php echo number_format($alliance['Alliance']['bank_money']); ?><br />-->
    <!--<b>Max Bank Cardisium:</b> <?php echo number_format($maxHold); ?><br />-->
    <!--</p>-->
    <!--<?php-->
    <!--// Test whether they are a (co)leader-->
    <!--if($player['UserGame']['id'] == $player['Alliance']['leader_id']-->
    <!--|| $player['UserGame']['id'] == $player['Alliance']['coleader_id']):-->
    <!--?>-->
    <!--<?php endif; ?>-->
    <!--<?php-->
    <!--echo $this->Html->link('Back to Base',-->
    <!--array('action' => 'index'),-->
    <!--array('class' => 'btn btn-primary')-->
    <!--);-->
    <!--?>-->
  </div>
</template>

<script>
import AllianceBankDepositForm from "../components/AllianceBankDepositForm";

export default {
  name: "BaseBank",
  components: {
    AllianceBankDepositForm
  }
};
</script>

<style lang="scss" scoped>
</style>