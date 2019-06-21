import http from '@/api/client'

export default {
  deposit(form: any) {
    return http().post(`/base/bank.json`, { Deposit: form })
  },
  withdraw(form: any) {
    return http().post(`/base/bankWithdraw.json`, { Withdraw: form })
  }
}
