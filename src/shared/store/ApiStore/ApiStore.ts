import {ApiResponse, IApiStore, RequestParams} from "./types";

export default class ApiStore implements IApiStore {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
    const qs = require('qs');
    const query = qs.stringify(params.data);
    const url = `${this.baseUrl}/${params.endpoint}/${query}`
    try {
      const response = await fetch(url,{
        method: 'GET',
        // method: params.method,
        // headers: params.headers,
        // data: params.data
      });
      console.log('response', response)
      const data = await response.json();
      console.log('data', data)
      return {
        success: true,
        data,
        status: 200
      };
    } catch (e) {
      return {
        success: false,
        data: e.response.data,
        status: e.response.status
      };
    }
  }
}