export enum GeneralCallResultStatus {
    OK = 0,
    // ERROR = 1,
}

export interface GeneralCallResult {
    result: GeneralCallResultStatus,
    errMsg: string
}

export interface ForceFetchClientKeyRetType extends GeneralCallResult {
    url: string;
    keyIndex: string;
    clientKey: string;
    expireTime: string;
}
