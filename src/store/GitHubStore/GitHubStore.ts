import ApiStore from '../../shared/store/ApiStore';
import {
  ApiResp,
  GetOrganizationReposListParams,
  IGitHubStore,
  RepoItem,
} from "./types";
import {HTTPMethod} from '../../shared/store/ApiStore/types';

export default class GitHubStore implements IGitHubStore {
  url = 'https://api.github.com';
  private readonly apiStore = new ApiStore(this.url); // TODO: не забудьте передать baseUrl в конструктор

  // TODO: реализовать интерфейс IGitHubStore


  async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
    // TODO: Здесь сделайте вызов из this.apiStore и верните результат

    const requestParams = {
      method: HTTPMethod.GET,
      endpoint: `orgs/${params.organizationName}/repos`,
      headers: {'Accept': 'application/vnd.github.v3+json'},
      data: '',
    }
    const response = await this.apiStore.request(requestParams);
    return response;
  }
}