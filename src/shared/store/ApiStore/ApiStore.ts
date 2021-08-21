import {ApiResponse, IApiStore, RequestParams} from "./types";

export default class ApiStore implements IApiStore {
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
    const url = `${this.baseUrl}/orgs/${orgName}/repos`
    try {
      const response = await fetch(url);
      const data = await response.json();
      return {
        success: true,
        data,
        status: 200
      };
    } catch (e) {
      return {
        success: false,
        data,
        status: e.response.status
      };
    }

  }
}