import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import Swal from "sweetalert2";
export declare const tokenHeader: (clientId: string) => string | undefined;
export declare const Toast: typeof Swal;
declare class RestController {
    getRestController: (path: string, clientId: string, csrftoken?: string, isAlert?: boolean) => Promise<BaseFetch>;
    postRestController: (path: string, body: any, clientId: string, csrftoken?: string, isAlert?: boolean, contentType?: string) => Promise<BaseFetch>;
    putRestController: (path: string, body: any, clientId: string, csrftoken?: string, isAlert?: boolean, contentType?: string) => Promise<BaseFetch>;
    deleteRestController: (path: string, clientId: string, csrftoken?: string, isAlert?: boolean) => Promise<BaseFetch>;
}
declare const _default: RestController;
export default _default;
