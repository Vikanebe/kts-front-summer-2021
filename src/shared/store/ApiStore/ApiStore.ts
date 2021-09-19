import { ApiResponse, HTTPMethod, IApiStore, RequestParams } from "./types";

export default class ApiStore implements IApiStore {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>> {
    const qs = require("qs");
    let query = "";
    let body = null;

    if (params.method === HTTPMethod.GET) {
      query = qs.stringify(params.data);
    }
    if (params.method === HTTPMethod.POST) {
      body = JSON.stringify(params.data);
    }

    const url = `${this.baseUrl}/${params.endpoint}?${query}`;

    try {
      const response = await fetch(url, { ...params, body });
      const data = await response.json();
      return {
        success: true,
        data,
        status: response.status,
      };
    } catch (e: any) {
      return {
        success: false,
        data: e.response.data,
        status: e.response.status,
      };
    }
  }
}
