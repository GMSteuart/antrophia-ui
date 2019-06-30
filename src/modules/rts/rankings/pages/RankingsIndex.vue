<template>
  <div>
    <!--<div>-->
      <!--<h2>Rankings</h2>-->
      <!--<p>View the current game rankings</p>-->
      <!--<table class="table">-->
        <!--<caption><h4><?php echo ($page === 1) ? 'Top 10' : 10 * ($page - 1) + 1 . ' - ' . 10 * $page; ?></h4></caption>-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th>Rank</th>-->
          <!--<th><?php echo $this->Paginator->sort('UserGame.alias', 'Username'); ?></th>-->
          <!--<th><?php echo $this->Paginator->sort('UserGame.alliance_id', 'Alliance'); ?></th>-->
          <!--<th><?php echo $this->Paginator->sort('UserGame.race_id', 'Race'); ?></th>-->
          <!--<th><?php echo $this->Paginator->sort('UserGame.power', 'Power'); ?></th>-->
          <!--<th><?php echo $this->Paginator->sort('UserGame.land', 'Land'); ?></th>-->
          <!--<th><?php echo $this->Paginator->sort('UserGame.population', 'Population'); ?></th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<?php-->
    <!--// Create rankings table-->
    <!--foreach($rankings as $rank => $topPlayer) :-->
        <!--?>-->
        <!--<tr class="<?php echo $topPlayer['UserGame']['id'] === $player['UserGame']['id'] ? 'highlight' : ''; ?>">-->
          <!--<td><?php echo ($rank + 1  + ($page - 1) * 10); ?></td>-->
          <!--<td>-->
            <!--<?php-->
          <!--echo $this->Html->link($topPlayer['UserGame']['alias'], array(-->
            <!--'controller' => 'users', 'action' => 'view', $topPlayer['User']['id']),-->
            <!--array('class' => 'username')-->
            <!--);-->
            <!--?>-->
          <!--</td>-->
          <!--<td><?php-->
          <!--if(isset($topPlayer['Alliance']['name'])) {-->
            <!--echo $this->Html->link($topPlayer['Alliance']['name'],-->
            <!--array('controller' => 'alliances', 'action' => 'view', $topPlayer['Alliance']['id'])-->
            <!--);-->
            <!--} else {-->
            <!--echo 'none';-->
            <!--} ?></td>-->
          <!--<td><?php echo $topPlayer['Race']['name']; ?></td>-->
          <!--<td><?php echo number_format($topPlayer['UserGame']['power']); ?></td>-->
          <!--<td><?php echo number_format($topPlayer['UserGame']['land']); ?></td>-->
          <!--<td><?php echo number_format($topPlayer['UserGame']['population']); ?></td>-->
        <!--</tr>-->
        <!--<?php endforeach; ?>-->
        <!--</tbody>-->
      <!--</table>-->
      <!--<div class="pagination">-->
        <!--<div class="paginiation__prev-next-wrapper">-->
          <!--<?php-->
            <!--echo $this->Paginator->prev(-->
          <!--'« Previous',-->
          <!--['class' => 'pagination__previous-button'],-->
          <!--null,-->
          <!--array('class' => 'pagination__previous-button disabled')-->
          <!--);-->
          <!--echo $this->Paginator->next(-->
          <!--'Next »',-->
          <!--['class' => 'pagination__next-button'],-->
          <!--null,-->
          <!--array('class' => 'pagination__next-button disabled')-->
          <!--);-->
          <!--?>-->
        <!--</div>-->
        <!--<div class="pagination__numbers">-->
          <!--<?php echo $this->Paginator->numbers(); ?>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "RankingsIndex"
  }
</script>

<style lang="scss" scoped>

</style>