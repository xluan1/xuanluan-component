import { LoginFinal } from "../../utils/types/baseType";
export declare const getUserToken: import("@reduxjs/toolkit").AsyncThunk<void, LoginFinal, {
    state?: unknown;
    dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
