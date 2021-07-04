import { notImplemented } from '@portfolio/utils';

interface ApiClientOptions extends Omit<RequestOptions, 'method'> {
  baseURL?: string;
}

interface RequestOptions extends MethodOptions {
  method: 'DELETE' | 'GET' | 'POST' | 'PUT';
}

interface MethodOptions extends Omit<RequestInit, 'body' | 'method'> {
  params?: unknown;
}

export function createApiClient({ baseURL, ...baseOptions }: ApiClientOptions = {}) {
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
    post<ResponseType>(url: RequestInfo, options?: MethodOptions) {
      return notImplemented();
    },
    get<ResponseType>(url: RequestInfo, options?: MethodOptions) {
      return request<ResponseType>(url, {
        method: 'GET',
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
