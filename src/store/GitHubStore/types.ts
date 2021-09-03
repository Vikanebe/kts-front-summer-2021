import { StatusHTTP } from "../../shared/store/ApiStore/types";

export type GetOrganizationReposListParams = {
  organizationName: string;
};

export type GetReposBranchesListParams = {
  ownerName: string;
  repoName: string;
};

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
    };

export type GitHubRpoOwner = {
  id: number;
  html_url: string;
  avatar_url: string;
  login: string;
};

export type RepoItem = {
  id: number;
  url: string;
  name: string;
  stargazers_count: number;
  updated_at: string;
  owner: GitHubRpoOwner;
};

export type BranchItem = {
  id: number;
  name: string;
};

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResp<RepoItem[]>>;

  getReposBranchesList(
    params: GetReposBranchesListParams
  ): Promise<ApiResp<BranchItem[]>>;
}
