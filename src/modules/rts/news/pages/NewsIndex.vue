<template>
  <div>
    <!--<div>-->
      <!--<h2>News</h2>-->
      <!--<p>Here you can check up on your latest news and overall game news</p>-->

      <!--<div class="btn-group">-->
        <!--<?php-->
    <!--echo '<button class="btn btn-default">' . $this->Html->link('All', array('action' => 'index')) . '</button>';-->
        <!--echo '<button class="btn btn-default">' . $this->Html->link('LRC', array('action' => 'view', 'lrc')) . '</button>';-->
        <!--echo '<button class="btn btn-default">' . $this->Html->link('Missiles', array('action' => 'view', 'missiles')) . '</button>';-->
        <!--echo '<button class="btn btn-default">' . $this->Html->link('Mercenary', array('action' => 'view', 'mercenary')) . '</button>';-->
        <!--echo '<button class="btn btn-default">' . $this->Html->link('Personal', array('action' => 'view', 'personal')) . '</button>';-->
        <!--?>-->
      <!--</div>-->
      <!--<br /><br />-->
      <!--<table class="table">-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th>News</th>-->
          <!--<th>Date</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<?php if($news != FALSE): ?>-->
        <!--<?php foreach($news as $content): ?>-->
        <!--<tr>-->
          <!--<td><?php echo $content['UserGameNew']['content'] ?></td>-->
          <!--<td><?php echo $this->Time->nice($content['UserGameNew']['created']); ?></td>-->
        <!--</tr>-->
        <!--<?php endforeach; ?>-->
        <!--<?php else: ?>-->
        <!--<tr>-->
          <!--<td>No news could be found</td>-->
          <!--<td></td>-->
        <!--</tr>-->
        <!--<?php endif; ?>-->
        <!--</tbody>-->
      <!--</table>-->
      <!--<?php echo $this->Paginator->numbers(array('first' => 2, 'last' => 2));?>-->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "NewsIndex"
  }
</script>

<style lang="scss" scoped>

</style>