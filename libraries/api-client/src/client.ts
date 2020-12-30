export function createApiClient(baseURL: string) {
  return {
    async get<T>(endpoint: string): Promise<T> {
      try {
        const response = await fetch(`${baseURL}${endpoint}`, {
          credentials: 'include',
          method: 'GET',
        });

        return response.json() as Promise<T>;
      } catch (error) {
        console.error(error);

        return Promise.reject(error);
      }
    },
    async post<T>(endpoint: string, params: any): Promise<T> {
      try {
        const response = await fetch(`${baseURL}${endpoint}`, {
          body: JSON.stringify(params),
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        });

        return response.json() as Promise<T>;
      } catch (error) {
        console.error(error);

        return Promise.reject(error);
      }
    },
  };
}
