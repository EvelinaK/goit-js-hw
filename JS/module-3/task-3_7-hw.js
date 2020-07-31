// Напиши скрипт управления личным кабинетом интернет банка.
//  Есть объект account в котором необходимо реализовать методы
//  для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  idNum: [],

  //  * Метод создает и возвращает объект транзакции.
  //  * Принимает сумму и тип транзакции.
  //  */
  // generateId() {
  //   return Math.trunc(Math.random() * 1000000);
  // },
  createTransaction(amount, type) {
    return {
      id: Math.trunc(Math.random() * 1000000),
      type: type,
      amount: amount,
    };
  },

  // findId() {
  //   while (true) {
  //     let num = generateId();
  //     if (this.idNum.indexOf(num) == -1) {
  //       this.idNums.push(num);
  //       break;
  //     }
  //   }
  //   return num;
  // },

  /*
  
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, "deposit"));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, "withdraw"));
    }
    // for (const product of allProducts) {
    else {
      console.log("снятие такой суммы не возможно, недостаточно средств");
    }
    // }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзакции по id
   */
  getTransactionDetails(id) {
    for (const tran in this.transactions) {
      if (tran.id == id) {
        return tran;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const tran in this.transactions) {
      if (type === tran.name) {
        total += tran.amount;
      }
    }
    for (const tran in this.transactions) {
      if (type === tran.name) {
        total += tran.amount;
      }
    }
    return total;
  },
};

// amount - количество;
account.deposit(200);
account.withdraw(1000);
account.withdraw(100);
console.table(account.transactions);
console.log(account.balance);
console.table(account.getTransactionDetails());
console.table(account.getTransactionTotal(Transaction.WITHDRAW));
