<template>
  <div>
    <!--<div>-->
      <!--<h2>Shops</h2>-->
      <!--<p>Welcome to the shops!-->
        <!--Here you can purchase the different resources and minerals that are used in Antrophia.-->
        <!--If you are looking to sell your minerals or purchase them from others, please check out the-->
        <!--<?php echo $this->Html->link('Market', array('controller' => 'market')); ?>.</p>-->

      <!--<shops-calculator></shops-calculator>-->
      <!--<?php-->
  <!--echo $this->Form->create('Shop', array('id' => 'shop-form'));-->
      <!--?>-->
      <!--<div>-->
        <!--<?php foreach($types as $type_name => $minerals): ?>-->
        <!--<div>-->
          <!--<table class="table table-condensed">-->
            <!--<caption><?php echo $type_name; ?></caption>-->
            <!--<thead>-->
            <!--<tr>-->
              <!--<th>Name</th>-->
              <!--<th>Current</th>-->
              <!--<th>Cost</th>-->
              <!--<th>Amount</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<?php-->
          <!--foreach($minerals as $mineral_name => $mineral): ?>-->
            <!--<tr>-->
              <!--<td><?php echo $mineral_name;?></td>-->

              <!--<?php if(empty($player['Minerals'][$mineral_name])): ?>-->
              <!--<td>0</td>-->
              <!--<?php else: ?>-->
              <!--<td><?php echo number_format($player['Minerals'][$mineral_name]['amount']); ?></td>-->
              <!--<?php endif; ?>-->

              <!--<td><?php echo number_format($mineral['Mineral']['cost']); ?></td>-->

              <!--<td>-->
                <!--<?php-->
                <!--echo $this->Form->input(null, array(-->
                <!--'label' => false,-->
                <!--'div' => null,-->
                <!--'id' => null,-->
                <!--'class' => 'form-control shop-input',-->
                <!--'name' => "data[Shops][minerals][" . $mineral_name . "][amount]",-->
                <!--'type' => 'text'-->
                <!--));-->

                <!--?>-->
              <!--</td>-->
            <!--</tr>-->
            <!--<?php endforeach; ?>-->
            <!--</tbody>-->
          <!--</table>-->
        <!--</div>-->
        <!--<?php endforeach; ?>-->
      <!--</div>-->
      <!--<?php-->
  <!--echo $this->Form->end(array('label' => 'Purchase Minerals', 'class' => 'btn btn-success'));-->
      <!--?>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "ShopsIndex"
  }
</script>

<style lang="scss" scoped>

</style>