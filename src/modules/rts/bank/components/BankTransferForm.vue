<template>
  <div>
    <antro-fieldset
      legend="Transfer"
      name="bank-transfer"
    >
      <antro-select
        v-model="recipient_id"
        disabled-text="Please select a player"
        label="Recipient"
        :options="recipients"
      ></antro-select>


      <antro-input
        v-model="amount"
        label="Cardisium"
      ></antro-input>

      <antro-button
        @click.native="doTransfer"
      >
        Transfer
      </antro-button>
    </antro-fieldset>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import AntroFieldset from "@/components/base/AntroFieldset";
  import AntroInput from "@/components/base/AntroInput";
  import AntroButton from "@/components/base/AntroButton";
  import AntroSelect from "@/components/base/AntroSelect";

  export default {
    name: "BankTransferForm",
    components: {
      AntroSelect,
      AntroButton,
      AntroInput,
      AntroFieldset
    },
    data() {
      return {
        amount: null,
        recipient_id: null,
      }
    },
    computed: {
      ...mapState({
        bank: state => state.bank.info,
        player: state => state.player,
        recipients: state => state.bank.recipients
      })
    },
    created() {
      if (typeof this.bank.info === 'undefined' || this.recipients.length === 0) {
        this.fetchInfo()
      }
    },
    methods: {
      ...mapActions({
        transfer: 'bank/transfer'
      }),
      doTransfer() {
        const { amount, recipient_id } = this

        if (amount && recipient_id) {
          this.transfer({ amount, recipient_id })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>