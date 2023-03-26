import { TypedUseSelectorHook } from "react-redux";
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").CombinedState<{
    auth: import("./auth/auth-slice").AuthState;
}>, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    auth: import("./auth/auth-slice").AuthState;
}>, import("redux").AnyAction, undefined>]>;
export type RootState = ReturnType<typeof store.getState>;
export declare const useAppDispatch: () => typeof store.dispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
