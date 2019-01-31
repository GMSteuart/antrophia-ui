import http from '@/api/client';

export default {
  fetch() {
    return http().get(`/bank.json`);
  },
  deposit(money) {
    return http().post(`/bank/despost.json`, {
      Bank: {
        money,
      },
    });
  },
  withdraw(money) {
    return http().post(`/bank/withdraw.json`, {
      Bank: {
        money,
      },
    });
  },
  transfer(amount, recipient_id) {
    return http().post(`/bank/transfer`, {
      Bank: {
        amount,
        recipient_id,
      },
    });
  },
};
