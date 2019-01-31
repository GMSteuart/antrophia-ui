<template>
  <div>
    <div class="header">
      <h2>{{ alliance.name }} Base</h2>
      <div class="info">{{ alliance.info }}</div>
    </div>

    <alliance-members-table></alliance-members-table>

    <antro-stat label="Members" :value="alliance.Member.length"></antro-stat>
    <antro-stat label="Banks" :value="alliance.banks"></antro-stat>
    <antro-stat label="Land" :value="alliance.land"></antro-stat>
    <antro-stat label="Cardisium (in bank)" :value="Number(alliance.bank_money)"></antro-stat>
    <antro-stat label="Max Bank Hold" :value="alliance.max_bank_amount"></antro-stat>
    <antro-stat label="Banking Research" :value="alliance.banking_research"></antro-stat>
    <antro-stat label="Investing Research" :value="alliance.investing_research"></antro-stat>
    <antro-stat label="Investing Bonus" :value="alliance.investing_bonus"></antro-stat>

    <!--<h4>Member Options</h4>-->
    <!--<?php echo $this->Html->link('Transfer Resources', array('action' => 'transfer')); ?><br />-->
    <!--<?php echo $this->Html->link('Message Alliance', array('action' => 'broadcast')); ?><br />-->
    <!--<?php echo $this->Html->link('Donate Land', array('action' => 'donate')); ?><br />-->
    <!--<?php echo $this->Html->link('Alliance Bank', array('action' => 'bank')); ?><br />-->
    <!--<?php echo $this->Html->link('Alliance LRC', array('action' => 'lrc')); ?><br />-->
    <!--<?php echo $this->Html->link('Alliance Relations', array('action' => 'relations')); ?><br />-->
    <!--<?php echo $this->Html->link('Alliance Hitlist', array('action' => 'hitlist')); ?><br />-->
    <!--<?php-->
    <!--if($alliance['Leader']['id'] != $player['UserGame']['id']) {-->
    <!--echo $this->Html->link('Leave Alliance', array('action' => 'leave'), array('class' => 'confirm'));-->
    <!--}-->
    <!--?><br />-->
    <!--<?php if($alliance['Leader']['id'] == $player['UserGame']['id']): ?>-->
    <!--<h4>Leader Options</h4>-->
    <!--<?php echo $this->Html->link('Alliance Build', array('action' => 'build')); ?><br />-->
    <!--<?php echo $this->Html->link('Manage Coleader', array('action' => 'coleader')); ?><br />-->
    <!--<?php echo $this->Html->link('Kick Member', array('action' => 'kick')); ?><br />-->
    <!--<?php echo $this->Html->link('Leader Options', array('action' => 'leader')); ?><br />-->
    <!--<?php echo $this->Html->link('Settings', array('action' => 'settings')); ?><br />-->
    <!--<?php endif; ?>-->
    <!--<?php if($alliance['Coleader']['id'] == $player['UserGame']['id']): ?>-->
    <!--<h4>Coleader Options</h4>-->
    <!--<?php echo $this->Html->link('Alliance Build', array('action' => 'build')); ?><br />-->
    <!--<?php echo $this->Html->link('Kick Member', array('action' => 'kick')); ?><br />-->
    <!--<?php echo $this->Html->link('Coleader Options', array('action' => 'coleader')); ?><br />-->
    <!--<?php endif; ?>-->
    <!--<br />-->
    <!--</div>-->
    <!--<div>-->
    <!--<table class="table">-->
    <!--<caption><h4>News Feed</h4></caption>-->
    <!--<?php-->
    <!--foreach($alliance['News'] as $news) {-->
    <!--?>-->
    <!--<tr>-->
    <!--<td><?php echo $this->Time->niceShort($news['created']); ?></td>-->
    <!--<td><?php echo $news['content']; ?></td>-->
    <!--</tr>-->
    <!--<?php-->
    <!--}-->
    <!--?>-->
    <!--</table>-->
    <!--</div>-->
  </div>
</template>

<script>
// TODO: implement investing research and bonus on backend
import { mapState } from "vuex";
import AllianceMembersTable from "../components/AllianceMembersTable";
import AntroStat from "@/components/base/AntroStat";

export default {
  name: "BaseIndex",
  components: {
    AllianceMembersTable,
    AntroStat
  },
  computed: {
    ...mapState({
      alliance: state => state.base.Alliance
    })
  }
};
</script>

<style lang="scss" scoped>
</style>