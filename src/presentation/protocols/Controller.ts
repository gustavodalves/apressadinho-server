import { HttpResponse } from './HttpResponse';

export interface Controller<T, K = any> {
    handle: (request: T) => Promise<HttpResponse<K | { message: string }>>
}
