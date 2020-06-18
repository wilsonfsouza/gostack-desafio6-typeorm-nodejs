import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transactionToBeDeleted = await transactionsRepository.findOne(id);

    if (!transactionToBeDeleted) {
      throw new AppError(
        'The selected transaction could not be found or not exists.',
      );
    }

    await transactionsRepository.remove(transactionToBeDeleted);
  }
}

export default DeleteTransactionService;
