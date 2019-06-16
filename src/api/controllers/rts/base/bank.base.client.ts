import http from '@/api/client';

export default {
  deposit(Deposit) {
    return http().post(`/base/bank.json`, Deposit);
  },
  withdraw(Withdraw) {
    return http().post(`/base/bankWithdraw.json`, Withdraw);
  },
};
