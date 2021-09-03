import React, { useState } from "react";

import "antd/dist/antd.css";
import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon";
import { Layout, Row } from "antd";

import GitHubStore from "../../store/GitHubStore";
import { ApiResp, RepoItem } from "../../store/GitHubStore/types";
import RepoBranchesDrawer from "./RepoBranchesDrawer";

const { Content } = Layout;
const gitHubStore = new GitHubStore();

const RepoSearchPage = (): JSX.Element => {
  const [repoList, setRepoList] = useState<RepoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>("");
  const [currentRepo, setCurrentRepo] = useState<RepoItem | null>(null);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);

  const getRepo = () => {
    if (currentValue.length) {
      setIsLoading(true);
      gitHubStore
        .getOrganizationReposList({
          organizationName: currentValue,
        })
        .then((result: ApiResp<RepoItem[]>) => {
          setRepoList(result.data);
          setIsLoading(false);
        });
    }
  };

  const searchRepoOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentValue(value);
  };

  const showDrawer = () => {
    setVisibleDrawer(true);
  };

  const onClose = () => {
    setVisibleDrawer(false);
  };

  const getRepoBranches = (repo: RepoItem): void => {
    setCurrentRepo(repo);
    showDrawer();
  };

  const getRepoTileJXS = () => {
    if (isLoading) return <div>...Loading</div>;
    if (!isLoading && !repoList.length) return;
    return repoList.map((repo: RepoItem): JSX.Element => {
      return (
        <React.Fragment key={repo.id}>
          <Row justify="space-between" align="middle">
            <RepoTile RepoItem={repo} onClick={() => getRepoBranches(repo)} />
          </Row>
        </React.Fragment>
      );
    });
  };

  return (
    <Content
      style={{
        margin: "auto",
        width: "400px",
        padding: "20px",
        display: "grid",
        gridRowGap: "20px",
      }}
    >
      <Row justify="space-between" align="middle">
        <Input
          value={currentValue}
          onChange={searchRepoOnChange}
          placeholder="Введите название организации"
        />

        <Button onClick={getRepo}>
          <SearchIcon />
        </Button>
      </Row>
      {getRepoTileJXS()}
      <RepoBranchesDrawer
        selectedRepo={currentRepo}
        onClose={onClose}
        visible={visibleDrawer}
      />
    </Content>
  );
};

export default RepoSearchPage;
