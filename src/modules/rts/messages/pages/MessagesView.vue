<template>
  <div>
    <!--<?php-->
<!--$message = $message[0]; // set the message-->
<!--?>-->
    <!--<div>-->
      <!--<h2>View Messages with <?php echo $message['Receiver']['username']; ?></h2>-->
      <!--<table class="message-thread">-->
        <!--<caption><?= $message['Message']['subject']; ?></caption>-->
        <!--<tbody>-->
        <!--<tr>-->
          <!--<td><?php echo $this->Time->niceShort($message['Message']['created']); ?></td>-->
          <!--<td><span class="username"><?php echo $message['Sender']['username']; ?></span> <?php echo $message['Message']['message']; ?></td>-->
        <!--</tr>-->
        <!--<?php foreach ($children as $child): ?>-->
        <!--<tr>-->
          <!--<td><?php echo $this->Time->niceShort($child['Message']['created']); ?></td>-->
          <!--<td><span class="username"><?php echo $child['Sender']['username']; ?></span> <?php echo $child['Message']['message']; ?></td>-->
        <!--</tr>-->
        <!--<?php endforeach; ?>-->
        <!--</tbody>-->
      <!--</table>-->
      <!--<div class="reply-form">-->
        <!--<?php-->
    <!--// Create the form to reply-->
    <!--echo $this->Form->create('Message', array(-->
        <!--'url' => ['action' => 'reply'],-->
        <!--'role' => 'form',-->
        <!--'class' => 'reply-form horizontal-form'-->
        <!--));-->
        <!--echo $this->Form->input('to_id', array(-->
        <!--'value' => $to_id,-->
        <!--'type' => 'hidden'-->
        <!--));-->
        <!--echo $this->Form->input('parent_id', array(-->
        <!--'value' => !empty($children) ? $children[count($children) - 1]['Message']['id'] : $message['Message']['id'],-->
        <!--'type' => 'hidden'-->
        <!--));-->
        <!--?>-->
        <!--<?php-->
    <!--echo $this->Form->input('message', array(-->
        <!--'label' => false,-->
        <!--'type' => 'textarea',-->
        <!--'placeholder' => 'What would you like to respond with?',-->
        <!--'class' => 'form-control',-->
        <!--'div' => 'form-group'-->
        <!--));-->
        <!--?>-->
        <!--<?php-->
    <!--echo $this->Form->end(array('label' => 'Reply', 'class' => 'btn btn-success'));-->
        <!--?>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div>-->
      <!--<?php-->
  <!--echo $this->Html->link('Back to Inbox',-->
      <!--array('action' => 'index'),-->
      <!--array('class' => 'btn btn-primary')-->
      <!--);-->
      <!--?>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "MessagesView"
  }
</script>

<style lang="scss" scoped>

</style>