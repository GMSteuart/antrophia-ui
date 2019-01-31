<template>
  <div>
    <!--<div>-->
      <!--<?php if(!empty($next)): ?>-->
      <!--<div class="alert alert-warning">-->
        <!--<p>Your next spy report will be done in-->
          <!--<?php echo $this->Time->timeAgoInWords($next['SpyReports']['end']); ?></p>-->
      <!--</div>-->
      <!--<?php endif; ?>-->
      <!--<?php-->
  <!--if(isset($reports)) {-->
    <!--?>-->
      <!--<h2>Spy Reports</h2>-->
      <!--<p>Here you can view your spy reports. These reports contain valuable information about your opponent.-->
        <!--Only share this info with those you can trust...-->
      <!--</p>-->
      <!--<table class="table">-->
        <!--<caption><h4>Last 10 Reports</h4></caption>-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th>Target</th>-->
          <!--<th>Report Type</th>-->
          <!--<th>Date</th>-->
          <!--<th></th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<?php foreach($reports as $report): ?>-->
        <!--<tr>-->
          <!--<td>-->
            <!--<?php-->
            <!--echo $this->Html->link($report['Target']['alias'],-->
            <!--array('controller' => 'users', 'action' => 'view', $report['Target']['user_id']),-->
            <!--array('class' => 'username')-->
            <!--);-->
            <!--?>-->
          <!--</td>-->
          <!--<td><?php echo $report['Type']['name']; ?></td>-->
          <!--<td><?php echo $this->Time->timeAgoInWords($report['SpyReports']['end']); ?></td>-->
          <!--<td><?php echo $this->Html->link('View',-->
            <!--array('action' => 'view', $report['SpyReports']['id']),-->
            <!--array('class' => 'btn')); ?></td>-->
        <!--</tr>-->

        <!--<?php endforeach; ?>-->
        <!--</tbody>-->
      <!--</table>-->

      <!--<?php-->
  <!--} else {-->
    <!--?>-->
      <!--<h2>Spy Report</h2>-->
      <!--<p>Here is the spy report on <b><?php echo $report['Target']['alias']; ?></b>.</p>-->
      <!--<h3>Report Type: <?php echo $report['Type']['name']; ?></h3>-->
      <!--<p><?php echo $report['SpyReports']['report']; ?></p>-->
      <!--<?php-->
  <!--}-->
  <!--?>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "SpiesView"
  }
</script>

<style lang="scss" scoped>

</style>