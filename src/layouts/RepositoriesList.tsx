import React from "react";

import "./RepositoriesList.css";

import Button from "@components/Button";
import SearchIcon from "@components/SearchIcon";
import StarIcon from "@components/StarIcon";

const RepositoriesList = () => (
  <div className="repositories-list">
    <div className="container">
      <form className="search-form">
        <input
          type="text"
          className="search-form_input"
          placeholder="Введите название организации"
        />
        <div className="search-form_search-button">
          <img src="img/search.svg" />
        </div>
      </form>

      <div className="git-repo-card">
        <div className="avatar">K</div>

        <div className="git-repo-card_info">
          <div className="git-repo-card_info_title">kts-school-frontend</div>
          <a className="git-repo-card_info_link" href="">
            ktsStudio
          </a>
          <div className="rating">
            <img src="img/star.svg" className="rating_star" />
            <div className="rating_voice">123</div>
            <div className="rating_update">Updating 21June</div>
          </div>
        </div>
      </div>

      <div className="git-repo-card">
        <div className="avatar">K</div>

        <div className="git-repo-card_info">
          <div className="git-repo-card_info_title">kts-school-frontend</div>
          <a className="git-repo-card_info_link" href="">
            ktsStudio
          </a>
          <div className="rating">
            <img src="img/star.svg" className="rating_star" />
            <div className="rating_voice">123</div>
            <div className="rating_update">Updating 21June</div>
          </div>
        </div>
      </div>

      <div className="git-repo-card">
        <div className="avatar">K</div>

        <div className="git-repo-card_info">
          <div className="git-repo-card_info_title">kts-school-frontend</div>
          <a className="git-repo-card_info_link" href="">
            ktsStudio
          </a>
          <div className="rating">
            <img src="img/star.svg" className="rating_star" />
            <div className="rating_voice">123</div>
            <div className="rating_update">Updating 21June</div>
          </div>
        </div>
      </div>
    </div>
    <Button>
      <SearchIcon />
    </Button>

    <StarIcon />
  </div>
);

export { RepositoriesList };
