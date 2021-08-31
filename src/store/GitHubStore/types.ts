import {StatusHTTP} from "../../shared/store/ApiStore/types";

export type GetOrganizationReposListParams = {
  organizationName: string
}

export type ApiResp<ReqT> =
  | {
  success: true;
  data: ReqT;
  status: StatusHTTP;
}
  | {
  success: false;
  data: ReqT;
  status: StatusHTTP;
}

export type Owner = {
  login: string
}

export type RepoItem = {
  id: number,
  name: string,
  owner: Owner,
  updated_at: string,
}

export interface IGitHubStore {
  getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>>;

}

