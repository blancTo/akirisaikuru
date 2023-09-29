import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import BreadCrumb from "../components/BreadCrumb";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const MAX_CONTENT_LENGTH = 100; // 最大文字数を設定してください
const postsPerPage = 10; // 1ページあたりの記事数
const pagePadding = 1; // 前後に追加で表示するページ数

const pagemeta = {
  subTitle: `ブログ`,
  slug: `blog`,
};

const AllPosts = ({ data, pageContext }) => {
  dayjs.locale("ja");
  const { allMicrocmsPosts } = data;
  const { numPages, currentPage, startPage, endPage } = pageContext;
  const posts = allMicrocmsPosts.edges;

  return (
    <Layout>
      <BreadCrumb title={pagemeta.subTitle} slug={pagemeta.slug} />

      <h3 className="main_title">ブログ</h3>

      {posts.map(({ node }) => (
        <div className="column_box" key={node.postsId}>
          {node.eyecatch ? (
            <div className="column_img">
              <a href={"/posts/" + node.postsId + "/"}>
                <img
                  src={node.eyecatch.url + "?fm=webp"}
                  width={370}
                  height={277}
                  alt={node.title + "サムネイル画像"}
                  loading="lazy"
                />
              </a>
            </div>
          ) : (
            <div className="column_img">
              <a href={"/posts/" + node.postsId + "/"}>
                <img
                  src="/img/alternative-image.png"
                  width={370}
                  height={277}
                  alt={node.title + "の代替画像"}
                  loading="lazy"
                />
              </a>
            </div>
          )}
          <div className="column_txt">
            <time
              dateTime={dayjs
                .utc(node.date)
                .tz("Asia/Tokyo")
                .format("YYYY-MM-DDTHH:mm:ss")}
            >
              {dayjs.utc(node.date).tz("Asia/Tokyo").format("YYYY/MM/DD")}
            </time>
            <a href={"/posts/" + node.postsId + "/"}>{node.title}</a>
            {stripHTML(node.content).length > MAX_CONTENT_LENGTH
              ? stripHTML(node.content).substring(0, MAX_CONTENT_LENGTH) + "..."
              : stripHTML(node.content)}
          </div>
        </div>
      ))}

      {/* ページネーションリンク */}
      {numPages > 1 && (
        <div className="pager">
          {currentPage > 1 && (
            <Link to={currentPage === 2 ? `/blog` : `/blog/${currentPage - 1}`}>
              &lt;&lt; 前へ
            </Link>
          )}

          {/* ページャーの数字を表示 */}
          {Array.from({ length: numPages }, (_, i) => {
            const pageNumber = startPage + i; // ページャーの数字を計算
            if (pageNumber <= endPage) {
              return (
                <Link
                  key={`pagination-link${pageNumber}`}
                  to={pageNumber === 1 ? `/blog` : `/blog/${pageNumber}`}
                  className={pageNumber === currentPage ? "current" : ""}
                >
                  {pageNumber}
                </Link>
              );
            }
            return null;
          })}

          {currentPage < numPages && (
            <Link to={`/blog/${currentPage + 1}`}>次へ &gt;&gt;</Link>
          )}
        </div>
      )}
    </Layout>
  );
};

// HTMLタグを削除する関数
function stripHTML(html) {
  return html.replace(/<[^>]*>/g, "");
}

export const query = graphql`
  query ($limit: Int, $skip: Int) {
    allMicrocmsPosts(limit: $limit, skip: $skip, sort: { date: DESC }) {
      edges {
        node {
          postsId
          title
          date
          eyecatch {
            url
          }
          content
        }
      }
    }
  }
`;

export default AllPosts;
