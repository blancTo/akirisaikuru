import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumbBlog = (props) => {
  const siteurl = "https://aki-risaikuru.com/";

  return (
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
          <Link to="/blog/" itemprop="item">
            <span itemprop="name">ブログ</span>
          </Link>
          <meta itemprop="position" content="2" />
        </li>
        {props.category && (
          <li
            className="breadcrumb__item"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <FontAwesomeIcon icon={faAngleRight} />
            <Link to={`/category/${props.category}/`} itemprop="item">
              <span>{props.catName}</span>
            </Link>
            <meta itemprop="position" content="3" />
          </li>
        )}
        {props.post && ( // props.postが存在する場合のみ以下の<li>要素を表示
          <li
            className="breadcrumb__item"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <FontAwesomeIcon icon={faAngleRight} />
            <Link to={`/posts/${props.post}/`} itemprop="item">
              <span>{props.title}</span>
            </Link>
            <meta itemprop="position" content="4" />
          </li>
        )}
      </ul>
    </div>
  );
};

export default BreadCrumbBlog;
