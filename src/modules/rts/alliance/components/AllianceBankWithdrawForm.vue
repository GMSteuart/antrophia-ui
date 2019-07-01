<template>
  <div>
    <antro-fieldset legend="Deposit" name="bank-deposit">
      <p>How much Cardisium do you want to deposit?</p>
      <antro-select v-model="$v.to_id.$model"></antro-select>
      <antro-input
        v-model="$v.amount.$model"
        label="Cardisium"
        type="number"
        :class="{ error: $v.amount.$error }"
      ></antro-input>
      <div
        v-if="!$v.amount.minValue"
        class="error"
      >Deposit amount must be positive</div>

      <antro-button @click.native="doDeposit">Withdraw</antro-button>
    </antro-fieldset>
    <!--<fieldset class="fieldset">-->
    <!--<legend>Withdraw & Transfer To</legend>-->
    <!--<?php-->
    <!--echo $this->Form->create('Withdraw', array('class' => 'horizontal-form', 'role' => 'form'));-->
    <!--echo $this->Form->input('to_id', array(-->
    <!--'class' => 'form-control', 'div' => 'form-group',-->
    <!--'label' => 'Member',-->
    <!--'options' => $members-->
    <!--));-->
    <!--echo $this->Form->input('amount', array(-->
    <!--'class' => 'form-control', 'div' => 'form-group',-->
    <!--'label' => array('class' => 'sr-only', 'div' => 'form-group'),-->
    <!--'placeholder' => 'Cardisium'-->
    <!--));-->
    <!--echo $this->Form->end(array('label' => 'Withdraw', 'class' => 'btn btn-success'));-->
    <!--?>-->
    <!--</fieldset>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { minValue, required } from 'vuelidate/lib/validators'
import AntroFieldset from '@/components/base/AntroFieldset'
import AntroInput from '@/components/base/AntroInput'
import AntroButton from '@/components/base/AntroButton'
import AntroSelect from '@/components/base/AntroSelect'

export default {
  name: 'AllianceBankWithdrawForm',
  components: {
    AntroButton,
    AntroInput,
    AntroFieldset,
    AntroSelect
  },
  mixins: [validationMixin],
  data() {
    return {
      amount: '',
      to_id: '',
      submitStatus: null
    }
  },
  computed: {
    ...mapState({
      members: state => state.base.Member
    })
  },
  methods: {
    ...mapActions({
      withdraw: 'base/bank/withdraw'
    }),
    doDeposit() {
      const { amount, to_id } = this

      if (amount) {
        this.$v.touch()
        if (this.$v.$invalid) {
          this.submitStatus = RequestState.Error
        } else {
          this.submitStatus = 'PENDING'
          this.deposit({ Withdraw: { amount, to_id } }).then(
            () => (this.submitStatus = 'OK')
          )
        }
      }
    }
  },
  validations: {
    amount: {
      required,
      minValue: minValue(1)
    }
  }
}
</script>
