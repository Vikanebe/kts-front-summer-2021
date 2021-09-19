import ApiStore from "../../shared/store/ApiStore";
import { HTTPMethod } from "../../shared/store/ApiStore/types";
import {
  ApiResp,
  BranchItem,
  GetOrganizationReposListParams,
  GetReposBranchesListParams,
  IGitHubStore,
  RepoItem,
} from "./types";

export default class GitHubStore implements IGitHubStore {
  url = "https://api.github.com";
  private readonly apiStore = new ApiStore(this.url);

  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResp<RepoItem[]>> {
    const requestParams = {
      method: HTTPMethod.GET,
      endpoint: `orgs/${params.organizationName}/repos`,
      headers: { Accept: "application/vnd.github.v3+json" },
      data: "",
    };
    return await this.apiStore.request(requestParams);
  }

  async getReposBranchesList(
    params: GetReposBranchesListParams
  ): Promise<ApiResp<BranchItem[]>> {
    const requestParams = {
      method: HTTPMethod.GET,
      endpoint: `repos/${params.ownerName}/${params.repoName}/branches`,
      headers: { Accept: "application/vnd.github.v3+json" },
      data: "",
    };

    return await this.apiStore.request(requestParams);
  }
}
