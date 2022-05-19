export interface BankAccountNonChangeableFailure {
    status: Exclude<Status, 'ok'>;
    sortCode: undefined;
    accountNumber:  undefined;
}

export interface BankAccountChangeableSuccess {
    status: Extract<Status, 'ok'>;
    sortCode: string;
    accountNumber: string;
}

export type BankAccountSectionBO = BankAccountNonChangeableFailure | BankAccountChangeableSuccess;

export type Status = 'ok' | 'notPermitted' |'notAllowed' | 'error';
