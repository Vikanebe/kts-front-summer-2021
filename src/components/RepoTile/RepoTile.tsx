import React from "react";

import "./RepoTile.css";

import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";
import { getDate } from "@utils/utils";

import { RepoItem } from "../../store/GitHubStore/types";

export type RepoTileProps = {
  RepoItem: RepoItem;
  onClick: (e: React.MouseEvent) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({
  RepoItem,
  onClick,
}): JSX.Element => (
  <div className="repoTile" onClick={onClick}>
    <Avatar
      src={RepoItem.owner.avatar_url}
      letter={RepoItem.owner.login.slice(1)}
    />
    <div className="repoTile_info">
      <div className="repoTile_info_name">{RepoItem.name}</div>
      <a className="repoTile_info-link" href={RepoItem.owner.html_url}>
        {RepoItem.owner.login}
      </a>
      <div className="repoTile_info_rating">
        <StarIcon />

        <div className="repoTile_info_rating_voice">
          {RepoItem.stargazers_count}
        </div>
        <div className="repoTile_info_rating_update">
          {`Updated ${getDate(RepoItem.updated_at)}`}
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(RepoTile);
