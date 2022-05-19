import { BankAccountSectionBO } from "../../types/bank-account-section";


export const editableBankAccountSection: BankAccountSectionBO = {
        status: 'ok',
        sortCode: '12-34-56',
        accountNumber: '12345678',
    };

export const nonEditableBankAccountSection: BankAccountSectionBO = {
        status: 'error',
        sortCode: undefined,
        accountNumber: undefined,
    };