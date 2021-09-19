import React, { useState } from "react";

import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import RepoTile from "@components/RepoTile/RepoTile";
import SearchIcon from "@components/SearchIcon/SearchIcon";
import { Layout, Row } from "antd";
import { useHistory } from "react-router-dom";

import { RepoItem } from "../../store/GitHubStore/types";
import RepoBranchesDrawer from "../RepoSearchPage/RepoBranchesDrawer";
import { useReposContext } from "../RepoSearchPage/RepoSearchPage";

const { Content } = Layout;

const RepoSearchPageView: React.FC = (): JSX.Element => {
  const [currentRepo, setCurrentRepo] = useState<RepoItem | null>(null);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();
  const RepoContext = useReposContext();

  const showDrawer = () => {
    setVisibleDrawer(true);
  };

  const getRepoBranches = (repo: RepoItem): void => {
    setCurrentRepo(repo);
    history.push(`/repos/${repo.id}`);
    showDrawer();
  };

  const searchRepoOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const onClose = () => {
    setVisibleDrawer(false);
    history.push(`/repos`);
  };
  const getRepoTileJXS = () => {
    if (RepoContext.isLoading) return <div>...Loading</div>;
    if (!RepoContext.isLoading && !RepoContext.list.length) return;
    return RepoContext.list.map((repo: RepoItem): JSX.Element => {
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
          value={searchText}
          onChange={searchRepoOnChange}
          placeholder="Введите название организации"
        />
        <Button onClick={() => RepoContext.load(searchText)}>
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

export default RepoSearchPageView;
