<template>
  <div>
    <!--<div>-->
      <!--<div>-->
        <!--<h2>Battle Reports</h2>-->

        <!--<?php if(isset($battles)): ?>-->
        <!--<table class="table">-->
          <!--<caption>Battle Reports</caption>-->
          <!--<thead>-->
          <!--<tr>-->
            <!--<th><?php echo $this->Paginator->sort('Attacker.alias', 'Attacker'); ?></th>-->
            <!--<th><?php echo $this->Paginator->sort('Defender.alias', 'Defender'); ?></th>-->
            <!--<th><?php echo $this->Paginator->sort('Battle.attacker_power', 'Atk. Power'); ?></th>-->
            <!--<th><?php echo $this->Paginator->sort('Battle.defender_power', 'Def. Power'); ?></th>-->
            <!--<th><?php echo $this->Paginator->sort('Battle.created', 'Date'); ?></th>-->
            <!--<th></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<?php foreach($battles as $battle): ?>-->
          <!--<tr>-->
            <!--<td><?php echo $this->Html->link($battle['Attacker']['alias'], array('controller' => 'users', 'action' => 'view', $battle['Attacker']['user_id'])); ?></td>-->
            <!--<td><?php echo $this->Html->link($battle['Defender']['alias'], array('controller' => 'users', 'action' => 'view', $battle['Defender']['user_id'])); ?></td>-->
            <!--<td><?php echo number_format($battle['Battle']['attacker_power']); ?></td>-->
            <!--<td><?php echo number_format($battle['Battle']['defender_power']); ?></td>-->
            <!--<td><?php echo $this->Time->timeAgoInWords($battle['Battle']['created']); ?></td>-->
            <!--<td><?php echo $this->Html->link('View', array('action' => 'view', $battle['Battle']['id']), array('class' => 'btn btn-primary btn-xs')); ?></td>-->
          <!--</tr>-->
          <!--<?php endforeach; ?>-->
          <!--</tbody>-->
        <!--</table>-->

        <!--<ul class="pagination">-->
          <!--<?php-->
                    <!--/*echo $this->Paginator->prev(-->
          <!--'« Previous',-->
          <!--null,-->
          <!--' ',-->
          <!--array('class' => 'disabled')-->
          <!--);*/-->
          <!--// Shows the page numbers-->
          <!--echo $this->Paginator->numbers(array(-->
          <!--'before' => $this->Paginator->prev('« Previous', array('tag' => 'li'), ' ', array('class' => 'disabled')),-->
          <!--'after' => $this->Paginator->next('Next »', array('tag' => 'li'), ' ', array('class' => 'disabled')),-->
          <!--'separator' => null,-->
          <!--'tag' => 'li',-->
          <!--'currentTag' => 'span',-->
          <!--//'currentClass' => 'disabled'-->
          <!--));-->


          <!--// Shows the next and previous links-->

          <!--/*echo $this->Paginator->next(-->
          <!--'Next »',-->
          <!--null,-->
          <!--' ',-->
          <!--array('class' => 'disabled')-->
          <!--); */-->

          <!--// prints X of Y, where X is current page and Y is number of pages-->
          <!--//echo $this->Paginator->counter();-->
          <!--?>-->
        <!--</ul>-->



        <!--<?php else: ?>-->
        <!--<?php echo $battle['Attacker']['alias']; ?>-->
        <!--<small>(<?php echo $battle['Attacker']['Race']['name'] ?>)</small>-->
        <!--vs.-->
        <!--<?php echo $battle['Defender']['alias']; ?>-->
        <!--<small>(<?php echo $battle['Defender']['Race']['name'] ?>)</small>-->
        <!--<?php echo $battle['Battle']['data']; ?>-->
        <!--<?php endif; ?>-->


        <!--<?php-->
        <!--//print_r($battle);-->
        <!--?>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div>-->
      <!--<div>-->
        <!--<?php-->
        <!--echo $this->Html->link('Back to Battle', array('action' => 'index'), array('class' => 'btn btn-primary'));-->
        <!--?>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "WarView"
  }
</script>

<style lang="scss" scoped>

</style>