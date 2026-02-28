import Transactions from "./transactions-model";
import User from "./user-model";
import Account from "./account-model";
import Cashbox from "./cashbox-model";

// Centraliza os modelos para facilitar a importação em outros arquivos
const indexModels = [Transactions, User, Account, Cashbox];

export default indexModels;
