<template>
  <div>
    <!--<div>-->
      <!--<h2>Messages</h2>-->
      <!--<div>-->
        <!--<?php echo $this->Html->link('+ New Message', array('action' => 'send')); ?> |-->
        <!--<?php echo $this->Html->link('Mark all as Read', array('action' => 'readall')); ?>-->
      <!--</div>-->

      <!--<table class="message-inbox">-->
        <!--<thead>-->
        <!--<tr>-->
          <!--<th>Player</th>-->
          <!--<th>Subject</th>-->
          <!--<th></th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<?php foreach($threads as $thread): ?>-->
        <!--<tr class="<?= isset($threadsWithUnreadMessages[$thread['Message']['id']]) ? 'unread' : 'read'; ?>">-->
          <!--<td><?= $thread['Sender']['id'] === $user['User']['id'] ? $thread['Receiver']['username'] : $thread['Sender']['username']; ?></td>-->
          <!--<td><?= $thread['Message']['subject']; ?></td>-->
          <!--<td>-->
            <!--<?php-->
            <!--echo $this->Html->link('view',-->
            <!--array('action' => 'view', $thread['Message']['id']),-->
            <!--array('class' => 'btn')-->
            <!--);-->
            <!--?>-->
          <!--</td>-->
        <!--</tr>-->
        <!--<?php endforeach; ?>-->
        <!--</tbody>-->
      <!--</table>-->
    <!--</div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  export default {
    name: "MessagesIndex"
  }
</script>

<style lang="scss" scoped>

</style>