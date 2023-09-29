import React from "react";

import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Header from "./Header";

import MainR from "./MainR";
import ServiceList from "./Service_list";
import TelList from "./Tel_List";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  );

  return (
    <>
      <div id="content">
        <div className="maincontent">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <p
            id="page-top"
            data-sal="slide-bottom"
            viewOffset="0.2"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <AnchorLink offset="0" to="#pagetop" title="Pagetop">
              <FontAwesomeIcon icon={faChevronUp} />
            </AnchorLink>
          </p>
          <section id="subpage">
            <div className="main-content">
              <div className="flex-wrap">
                <div id="main_l">
                  {children}
                  <h4 className="title01">
                    お電話でのお問い合わせ・無料見積・メールでのお問い合わせ
                  </h4>
                  <p>
                    当店に直接持ち込みできない方のために、出張買取＆引取もできます。出張の場合、買取金額が持ち込みの場合の半額程度になることをご了承ください。また、現地にて作業が発生する場合は作業料が発生します。出張料（実費）もいただきます。これらの費用は、お見積もりいたしますので、事前にお問い合わせください。
                  </p>
                  <div>
                    <a href="tel:0120-28-3374">
                      <StaticImage
                        src="../images/free_dial_bt_s.png"
                        width={765}
                        height={200}
                        alt="タップして電話かけてね！！tel:0120-28-3374"
                      />
                    </a>
                  </div>
                </div>

                <MainR />
              </div>

              <ServiceList />

              <TelList />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
