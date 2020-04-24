import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Response {
  transactions: Transaction[];
  balance: {
    income: number;
    outcome: number;
    total: number;
  };
}

class GetInformationsByTransactions {
  private transactionsRepository: TransactionsRepository;

  constructor(repository: TransactionsRepository) {
    this.transactionsRepository = repository;
  }

  public run(): Response {
    const allTransactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();

    const informations = { transactions: allTransactions, balance };

    return informations;
  }
}

export default GetInformationsByTransactions;
