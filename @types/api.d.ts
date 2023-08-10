/** @format */

declare namespace Api {
    interface Response<T> {
        code: number;
        msg: string;
        data: T;
    }
}
