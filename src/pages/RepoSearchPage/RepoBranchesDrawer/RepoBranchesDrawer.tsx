import React, { useEffect, useState } from "react";

import { Drawer } from "antd";

import GitHubStore from "../../../store/GitHubStore";
import {
  ApiResp,
  BranchItem,
  RepoItem,
} from "../../../store/GitHubStore/types";

const gitHubStore = new GitHubStore();

export type RepoBranchesDrawerProps = {
  selectedRepo: RepoItem | null;
  onClose: () => void;
  visible: boolean;
};
const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  selectedRepo,
  onClose,
  visible,
}): JSX.Element => {
  const [branchesList, setBranchesList] = useState<BranchItem[]>([]);
  useEffect(() => {
    if (selectedRepo) {
      gitHubStore
        .getReposBranchesList({
          ownerName: selectedRepo.owner.login,
          repoName: selectedRepo.name,
        })
        .then((result: ApiResp<BranchItem[]>) => {
          setBranchesList(result.data);
        });
    }
  }, [selectedRepo]);

  const getBranches = () => {
    return branchesList?.map((branch: BranchItem): JSX.Element => {
      return (
        <React.Fragment key={branch.id}>
          <div>{branch.name}</div>
        </React.Fragment>
      );
    });
  };

  return (
    <Drawer
      title="Repositories"
      placement="left"
      onClose={onClose}
      visible={visible}
    >
      {getBranches()}
    </Drawer>
  );
};

export default RepoBranchesDrawer;
