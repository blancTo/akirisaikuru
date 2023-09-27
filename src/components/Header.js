import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header>
        <div id="header">
          <div id="header-inner">
            <div className="h_cont">
              <h1>
                広島不用品回収（東広島、安芸区、安芸郡）・引越しゴミ・家財整理・ゴミ屋敷・遺品整理・ゴミ屋敷・空家整理
              </h1>
              <div className="h_logo">
                <Link to="/">
                  <img src="../images/logo.png" alt="安芸リサイクル" />
                </Link>
              </div>
              <div className="h_tool">
                <div className="h_tel">
                  <a href="tel:0120-28-3374">
                    <span className="pc">
                      <svg
                        width={40}
                        height={26}
                        data-name="フリーダイヤル"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 120.76 78.81"
                      >
                        <path
                          className="b"
                          d="M15.49,45.62c0,10.45,8.22,15.51,14.85,15.51s14.84-5.06,14.84-15.51c0-8.11-8.03-14.58-14.84-18.46-6.82,3.87-14.85,10.35-14.85,18.46ZM0,0V78.81H120.76V0H0ZM120.74,19.16c-7.25,0-16.07,1.36-22.98,4.36,7.46,4.99,14.68,12.55,14.68,22.09,0,12.61-10.58,22.25-22.22,22.25s-21.87-9.63-21.87-22.25c0-9.54,6.86-17.1,14.32-22.09-6.91-3-15.05-4.36-22.3-4.36s-15.4,1.36-22.31,4.36c7.46,4.99,14.32,12.55,14.32,22.09,0,12.61-10.22,22.25-21.87,22.25s-22.39-9.63-22.39-22.25c0-9.54,7.38-17.1,14.84-22.09C16.05,20.52,7.25,19.16,0,19.16v-6.9c12.27,0,23.12,3.06,30.51,6.9,7.38-3.84,17.58-6.9,29.85-6.9s22.46,3.06,29.85,6.9c7.38-3.84,18.26-6.9,30.53-6.9v6.9Zm-44.9,26.28c0,10.44,8.22,15.51,14.84,15.51s14.84-5.06,14.84-15.51c0-8.11-8.02-14.59-14.84-18.46-6.82,3.87-14.84,10.35-14.84,18.46Z"
                        />
                      </svg>
                      0120-28-3374
                    </span>
                    <span className="smp">
                      <img
                        src="../../images/h_tel.svg"
                        width={45}
                        height={45}
                        alt=""
                      />
                    </span>
                  </a>
                </div>
                <div className="h_mail">
                  <div className="pc">
                    <Link to="/toiawase/" className="bt01">
                      オンライン無料見積もり
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </Link>
                  </div>
                  <span className="smp">
                    <Link to="/toiawase/">
                      <img
                        src="../../images/h_mail.svg"
                        width={45}
                        height={45}
                        alt=""
                      />
                    </Link>
                  </span>
                </div>
              </div>
              <div className="h_comment pc">
                まずはお電話・メールにてお気軽にお問い合わせ下さい
                <span>年中無休</span>
              </div>
            </div>
            <input type="checkbox" id="overlay-input" />
            <label htmlFor="overlay-input" id="overlay-button">
              <span></span>
            </label>
            <div id="overlay">
              <nav>
                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/recycle/">買取・回収・処分</Link>
                  </li>
                  <li>
                    <Link to="/service/">サービス一覧</Link>
                  </li>
                  <li>
                    <Link to="/price/">料金</Link>
                  </li>
                  <li>
                    <Link to="/faq/">よくあるご質問</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
