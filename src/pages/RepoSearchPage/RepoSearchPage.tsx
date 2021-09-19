import React, { createContext, useContext, useState } from "react";

import "antd/dist/antd.css";

import GitHubStore from "../../store/GitHubStore";
import { ApiResp, RepoItem } from "../../store/GitHubStore/types";
import RepoSearchPageView from "../RepoSearchPageView";

const gitHubStore = new GitHubStore();

const ReposContext = createContext({
  list: [],
  isLoading: false,
  load: (text: string) => {},
});

export const useReposContext = () => useContext(ReposContext);

const Provider = ReposContext.Provider;

const RepoSearchPage = (): JSX.Element => {
  const [repoList, setRepoList] = useState<RepoItem[] | any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRepo = (searchText: string) => {
    if (searchText.length) {
      setIsLoading(true);
      gitHubStore
        .getOrganizationReposList({
          organizationName: searchText,
        })
        .then((result: ApiResp<RepoItem[]>) => {
          setRepoList(result.data);
          setIsLoading(false);
        });
    }
  };

  return (
    <Provider
      value={{
        list: repoList,
        isLoading: isLoading,
        load: getRepo,
      }}
    >
      <RepoSearchPageView />
    </Provider>
  );
};

export default RepoSearchPage;
