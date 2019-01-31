<template>
  <div>
    <!--<div class="row">-->
      <!--<div class="col-lg-12">-->
        <!--<h2>Messages</h2>-->
        <!--<div class="pull-right">-->
          <!--<?php echo $this->Html->link('+ New Message', array('action' => 'send')); ?> |-->
          <!--<?php echo $this->Html->link('Mark all as Read', array('action' => 'readall')); ?>-->
        <!--</div>-->
        <!--<div class="message-menu">-->
          <!--<ul>-->
            <!--<li><?php echo $this->Html->link('Inbox', array('action' => 'index'), array('style' => 'color: white;')); ?></li>-->
            <!--<li class="active"><?php echo $this->Html->link('Outbox', array('action' => 'outbox'), array('style' => 'color: white;')); ?></li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="message-box">-->
          <!--<table class="table table-hover">-->
            <!--<thead>-->
            <!--<tr>-->
              <!--<th>To</th>-->
              <!--<th>Subject</th>-->
              <!--<th>Message</th>-->
              <!--<th>Date</th>-->
              <!--<th></th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<?php-->
                <!--// Create message list-->
                <!--foreach($messages as $message) :-->
                    <!--$msg_class = ""; // set the default class of the messages-->
                    <!--// Check whether or not the message is the users message and if they havent read it-->
                    <!--if($message['Message']['to_id'] == $user['User']['id'] && $message['Message']['read'] == false) {-->
                        <!--$msg_class = "success";-->
                    <!--}-->
                    <!--?>-->
            <!--<tr class="<?php echo $msg_class; ?>">-->
              <!--<td><?php echo $message['Receiver']['username']; ?></td>-->
              <!--<td><?php echo $message['Message']['subject']; ?></td>-->
              <!--<td><?php echo $message['Message']['message']; ?></td>-->
              <!--<td><?php echo $this->Time->niceShort($message['Message']['created']); ?></td>-->
              <!--<td><?php-->
                            <!--echo $this->Html->link('view',-->
                <!--array('action' => 'view', $message['Message']['id']),-->
                <!--array('class' => 'btn btn-default btn-xs')-->
                <!--);-->
                <!--?>-->
              <!--</td>-->
            <!--</tr>-->
            <!--<?php endforeach; ?>-->
            <!--</tbody>-->
          <!--</table>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "MessagesOutbox"
  }
</script>

<style lang="scss" scoped>

</style>