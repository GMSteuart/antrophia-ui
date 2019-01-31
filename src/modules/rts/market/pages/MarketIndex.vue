<template>
  <div>
    <!--<div>-->
      <!--<h2>Market</h2>-->
      <!--<p>Selling or buying? Regardless, at the Market you can sell your resources or purchase them from others.-->
        <!--Please, have a look around! If you need to purchase resources directly from Antrophia, head to-->
        <!--the <?php echo $this->Html->link('Shops', array('controller' => 'shops')); ?>.-->
      <!--</p>-->
      <!--<?php-->
  <!--echo $this->Html->link('+ Add an item to the Market',-->
      <!--array('action' => 'add'),-->
      <!--array('class' => 'btn btn-success')-->
      <!--);-->
      <!--?>-->
    <!--</div>-->

    <!--<div>-->
      <!--<?php-->
  <!--$this->Paginator->options(array(-->
      <!--'update' => '#content',-->
      <!--'evalScripts' => true,-->
      <!--));-->
      <!--?>-->
      <!--<table class="table">-->
        <!--<caption><h4>Listings</h4></caption>-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th><?php echo $this->Paginator->sort('mineral_id', 'Resource'); ?></th>-->
          <!--<th><?php echo $this->Paginator->sort('quantity', 'Quantity'); ?></th>-->
          <!--<th><?php echo $this->Paginator->sort('price', 'Price (per item)'); ?></th>-->
          <!--<th>Total Cost</th>-->
          <!--<th>Seller</th>-->
          <!--<th>Options</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<?php-->
    <!--// Create market table-->
    <!--foreach($markets as $market) :-->
      <!--?>-->
        <!--<tr>-->
          <!--<td><?php echo $market['Mineral']['name']; ?></td>-->
          <!--<td><?php echo number_format($market['Market']['quantity']); ?></td>-->
          <!--<td><?php echo number_format($market['Market']['price']); ?></td>-->
          <!--<td><?php echo number_format($market['Market']['price'] * $market['Market']['quantity']); ?></td>-->
          <!--<td><?php-->
          <!--echo $this->Html->link($market['Seller']['alias'],-->
            <!--array('controller' => 'users', 'action' => 'view', $market['Seller']['user_id']),-->
            <!--array('class' => 'username')-->
            <!--);-->
            <!--?>-->
          <!--</td>-->
          <!--<td><?php-->
          <!--// Check whether or not its the player themselves-->
          <!--if($player['UserGame']['id'] == $market['Seller']['id']) {-->
            <!--echo $this->Html->link('Remove',-->
            <!--array('action' => 'remove', $market['Market']['id']),-->
            <!--array('class' => 'btn btn-danger btn-xs'),-->
            <!--'Are you sure you want to remove this item?'-->
            <!--);-->
            <!--} else {-->
            <!--echo $this->Html->link('Buy',-->
            <!--array('action' => 'buy', $market['Market']['id']),-->
            <!--array('class' => 'btn btn-success btn-xs'),-->
            <!--'Are you sure you want to buy this item?'-->
            <!--);-->
            <!--}-->
            <!--?></td>-->
        <!--</tr>-->
        <!--<?php-->
    <!--endforeach;-->
    <!--?>-->
        <!--</tbody>-->
      <!--</table>-->
    <!--</div>-->

  </div>
</template>

<script>
  export default {
    name: "MarketIndex"
  }
</script>

<style lang="scss" scoped>

</style>