export interface IAccount {
    displayName: string;
    primarySmtpAddress: string;
    aadObjectId?: string;
}

export interface IPerson extends IAccount {//testerror
    isPinned: boolean;
    isDirectReport: boolean;
    oneOnOneReminderFrequency: String;
}