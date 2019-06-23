<template>
  <div>
    <!--<div>-->
      <!--<h1>Alliance - Build</h1>-->
      <!--<p>Build banks on your alliances land so your members can start storing their money here instead of on their own land.</p>-->
      <!--<p>Alliance's Free Land: <?php echo number_format($alliance['Alliance']['land'] - $alliance['Alliance']['banks']); ?></p>-->
      <!--<br />-->

      <!--<?php if($alliance['Alliance']['land'] - $alliance['Alliance']['banks']): ?>-->
      <!--<?php if($alliance['Build']['end']): ?>-->
      <!--<p>Your alliance is currently constructing. They will be done in about <?php-->
      <!--echo $this->Time->timeAgoInWords(-->
        <!--$alliance['Build']['end'],-->
        <!--array('end' => '+1day')-->
        <!--) . '.'; ?>-->
      <!--</p>-->
      <!--<?php else: ?>-->
      <!--<div id="action">-->
        <!--<div id="buildFinish">Estimated Build Finish: 0</div>-->
      <!--</div>-->
      <!--<fieldset>-->
        <!--<caption>Build</caption>-->
        <!--<?php-->
      <!--echo $this->Form->create('Build', array('class' => 'horizontal-form', 'role' => 'form', 'id' => 'AllianceBuild'));-->
        <!--echo $this->Form->input('amount', array(-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'label' => 'Amount',-->
        <!--'placeholder' => 'Build Amount'-->
        <!--));-->
        <!--echo $this->Form->input('factor', array(-->
        <!--'class' => 'form-control', 'div' => 'form-group',-->
        <!--'label' => 'Money Multiplier',-->
        <!--'options' => array(1, 2, 3, 4, 5, 6, 7, 8, 9)-->
        <!--));-->
        <!--$this->Js->get('AllianceBuild')->event('change',-->
        <!--$this->Js->request('/base/build', array(-->
        <!--'method' => 'POST',-->
        <!--'data' => $this->Js->get('#AllianceBuild')->serializeForm(array('isForm' => true, 'inline' => 'false')),-->
        <!--'dataExpression' => true,-->
        <!--'update' => '#action'-->
        <!--))-->
        <!--);-->

        <!--echo $this->Form->end(array('label' => 'Start Construction', 'class' => 'btn btn-success'));-->
        <!--?>-->
      <!--</fieldset>-->
      <!--<?php endif; ?>-->
      <!--<?php else: ?>-->
      <!--<p>Your alliance does not have any free land to build banks on!</p>-->
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

<script>
  export default {
    name: "BaseBuild"
  }
</script>

<style lang="scss" scoped>

</style>