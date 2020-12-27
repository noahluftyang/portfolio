export const authClient = {
  async post<T>(endpoint: string, params: any): Promise<T> {
    try {
      const response = await fetch(`${process.env.AUTH_API_URL}${endpoint}`, {
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      return response.json();
    } catch (error) {
      console.error(error);

      return Promise.reject(error);
    }
  },
};
