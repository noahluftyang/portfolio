import { notImplemented } from 'utils/notImplemented';

interface ApiClientOptions extends RequestInit {
  baseURL?: string;
}

interface RequestOptions extends Omit<ApiClientOptions, 'baseURL'> {}

function createApiClient({ baseURL, ...baseOptions }: ApiClientOptions = {}) {
  async function request<ResponseType>(
    url: RequestInfo,
    options: RequestOptions
  ): Promise<ResponseType> {
    try {
      const response = await fetch(`${baseURL}${url}`, {
        ...baseOptions,
        ...options,
      });

      if (!response.ok) {
        throw new Error('Request failed.');
      }

      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return {
    post() {
      return notImplemented();
    },
    get<ResponseType>(url: RequestInfo, options?: Omit<RequestOptions, 'method'>) {
      return request<ResponseType>(url, {
        method: 'get',
        ...options,
      });
    },
    put() {
      return notImplemented();
    },
    patch() {
      return notImplemented();
    },
    delete() {
      return notImplemented();
    },
  };
}

export const storeApi = createApiClient({
  baseURL: 'https://fakestoreapi.com',
});
