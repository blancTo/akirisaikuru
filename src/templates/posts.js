import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import BreadCrumbBlog from "../components/BreadCrumbBlog";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const PostPage = ({ data }) => {
  dayjs.locale("ja");
  const { microcmsPosts } = data; // フィールド名を修正

  return (
    <>
      <Layout>
        <BreadCrumbBlog
          title={microcmsPosts.title}
          category={microcmsPosts.category.id}
          catName={microcmsPosts.category.name}
          post={microcmsPosts.postsId}
        />

        <article>
          <h3 className="main_title">ブログ</h3>

          <h3 className="sub_title">{data.microcmsPosts.title}</h3>

          <span className="date">
            更新日：
            <time
              dateTime={dayjs
                .utc(data.microcmsPosts.date)
                .tz("Asia/Tokyo")
                .format("YYYY-MM-DDTHH:mm:ss")}
            >
              {dayjs
                .utc(data.microcmsPosts.date)
                .tz("Asia/Tokyo")
                .format("YYYY/MM/DD")}
            </time>
          </span>

          {data.microcmsPosts.eyecatch ? (
            <div className="eyecatch_img">
              <img
                src={data.microcmsPosts.eyecatch.url + "?fm=webp"}
                alt={data.microcmsPosts.title + "サムネイル画像"}
                loading="lazy"
              />
            </div>
          ) : null}

          <div
            className="post_main_box"
            dangerouslySetInnerHTML={{
              __html: `${data.microcmsPosts.content}`,
            }}
          />

          <p class="center mb40">
            <a
              href={`/category/${microcmsPosts.category.id}/`}
              className="bt_blog"
            >
              <FontAwesomeIcon icon={faCircleChevronLeft} />
              記事一覧に戻る
            </a>
          </p>
        </article>
      </Layout>
    </>
  );
};

export const Head = ({ data }) => (
  <>
    <Seo title2={data.microcmsPosts.title} />
  </>
);

export const query = graphql`
  query ($postId: String) {
    microcmsPosts(id: { eq: $postId }) {
      title
      category {
        id
        name
      }
      content
      eyecatch {
        url
      }
      postsId
    }
  }
`;

export default PostPage;
