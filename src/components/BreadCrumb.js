import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumb = (props) => {
  const siteurl = "https://aki-risaikuru.com/";
  return (
    <>
      <div id="breadcrumb">
        <ul
          className="breadcrumb__list"
          itemscope
          itemtype="https://schema.org/BreadcrumbList"
        >
          <li
            className="breadcrumb__item"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <FontAwesomeIcon icon={faHouse} />
            <Link to={siteurl} itemprop="item">
              <span itemprop="name">ホーム</span>
            </Link>
            <meta itemprop="position" content="1" />
          </li>
          <li
            className="breadcrumb__item"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <FontAwesomeIcon icon={faAngleRight} />

            <span>{props.title}</span>

            <meta itemprop="position" content="2" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
