import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer">
          <div id="footer-inner">
            <p>
              不用品回収、粗大ゴミの回収、遺品整理やリサイクル品の引取、回収、買取のことは安芸リサイクルまで
            </p>
            <div>
              <Link to="/">
                <StaticImage
                  src="../images/logo.png"
                  alt="安芸リサイクル"
                  width={265}
                  height={48}
                />
              </Link>
            </div>
            <div id="foot_area">
              <p className="bold big">対応エリア</p>
              <p>
                広島市中区・東区・南区・安佐南区・安佐北区・西区・佐伯区・廿日市市・安芸区・海田・坂・熊野・東広島市・西条・八本松・黒瀬町・安芸津町・安浦町・呉市・江田島市・音戸町・倉橋町
              </p>
            </div>
            <ul>
              <li>
                <Link to="/company/">会社概要</Link>
              </li>
              <li>
                <Link to="/privacy/">個人情報保護法</Link>
              </li>
              <li>
                <Link to="/sitemap/">サイトマップ</Link>
              </li>
            </ul>
            <address>
              Copyright &copy; 2016{" "}
              <Link to="/">広島・東広島の不用品回収 安芸リサイクル</Link> All
              Rights Reserved.
            </address>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
