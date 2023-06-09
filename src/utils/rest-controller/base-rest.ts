import axios from "axios";
import Cookies from "js-cookie";
import BaseFetch from "service-sdk/lib/fetch/BaseFetch";
import { WrapperResponse } from "service-sdk/lib/types/BaseType";
import RequestService from "service-sdk/lib/utils/index";
import Swal from "sweetalert2";

export const tokenHeader = (clientId: string): string | undefined => {
  return Cookies.get(clientId + "_Token-CODE");
};

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const processException = (response?: WrapperResponse) => {
  if (typeof response?.data === "string") {
    Toast.fire({ icon: "error", title: response?.data });
  } else {
    Toast.fire({ icon: "error", title: response?.message });
  }
};

class RestController {
  getRestController = async (
    path: string,
    clientId: string,
    csrftoken?: string,
    isAlert: boolean = true
  ): Promise<BaseFetch> => {
    const fetch = new BaseFetch();
    try {
      const response: any = await RequestService.get(path, clientId, csrftoken);

      fetch.data = response?.data;
      isAlert && Toast.fire({ icon: "success", title: fetch.data.message });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data;
        fetch.errors = err as WrapperResponse;
        isAlert && processException(fetch.errors);
      }
    }
    return fetch;
  };

  postRestController = async (
    path: string,
    body: any,
    clientId: string,
    csrftoken?: string,
    isAlert: boolean = true,
    contentType?: string
  ): Promise<BaseFetch> => {
    const fetch = new BaseFetch();

    try {
      const response: any = await RequestService.post(
        path,
        body,
        clientId,
        csrftoken,
        contentType
      );

      fetch.data = response?.data;
      isAlert && Toast.fire({ icon: "success", title: fetch.data.message });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data;
        fetch.errors = err as WrapperResponse;
        isAlert && processException(fetch.errors);
      }
    }

    return fetch;
  };

  putRestController = async (
    path: string,
    body: any,
    clientId: string,
    csrftoken?: string,
    isAlert: boolean = true,
    contentType?: string
  ): Promise<BaseFetch> => {
    const fetch = new BaseFetch();
    try {
      const response: any = await RequestService.put(
        path,
        body,
        clientId,
        csrftoken,
        contentType
      );

      fetch.data = response.data;
      isAlert && Toast.fire({ icon: "success", title: fetch.data.message });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data;
        fetch.errors = err as WrapperResponse;
        isAlert && processException(fetch.errors);
      }
    }
    return fetch;
  };

  deleteRestController = async (
    path: string,
    clientId: string,
    csrftoken?: string,
    isAlert: boolean = true
  ): Promise<BaseFetch> => {
    const fetch = new BaseFetch();
    try {
      const response: any = await RequestService.delete(
        path,
        clientId,
        csrftoken
      );

      fetch.data = response?.data;
      isAlert && Toast.fire({ icon: "success", title: fetch.data.message });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data;
        fetch.errors = err as WrapperResponse;
        isAlert && processException(fetch.errors);
      }
    }
    return fetch;
  };
}

export default new RestController();
