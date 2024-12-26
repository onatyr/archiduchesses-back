import { AxiosInstance } from 'axios';

export class ApiService {
  private readonly baseUrl = '';
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance, baseRoute: string) {
    this.axiosInstance = axiosInstance;
    this.baseUrl += baseRoute || '';
  }

  // GET method
  async _get(route: string, queryParams: object | null = null) {
    return this.axiosInstance.get(this.baseUrl + route, {
      params: queryParams,
    });
  }

  // POST method
  async _post(
    route: string,
    bodyParams: any = null,
    queryParams: URLSearchParams | null = null,
    formData: FormData | null = null
  ) {
    const headers = {
      'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    };
    const url = this.baseUrl + route;

    return this.axiosInstance.post(
      url.toString(),
      formData ? formData : bodyParams,
      {
        params: queryParams,
        headers,
      }
    );
  }

  // DELETE method
  async _delete(route: string, data: any = null) {
    const headers: any = {};

    if (data && !(data instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    return this.axiosInstance.delete(this.baseUrl + route, {
      data: data,
      headers,
    });
  }
}
