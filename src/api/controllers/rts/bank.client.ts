import http from '@/api/client'

export default {
  fetch() {
    return http().get(`/bank.json`)
  },
  deposit(money: number) {
    return http().post(`/bank/despost.json`, {
      Bank: {
        money
      }
    })
  },
  withdraw(money: number) {
    return http().post(`/bank/withdraw.json`, {
      Bank: {
        money
      }
    })
  },
  transfer(amount: number, recipientId: number) {
    return http().post(`/bank/transfer`, {
      Bank: {
        amount,
        recipient_id: recipientId
      }
    })
  }
}
