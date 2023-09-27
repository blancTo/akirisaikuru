import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

const ServiceList = () => {
  return (
    <>
      <div className="bn_list img_100p">
        <StaticImage
          src="../images/txt11.png"
          alt="安芸リサイクルのサービス一覧"
        />
      </div>

      <div className="service">
        <div className="service_cont">
          <div className="service_inner">
            <div className="service_h">
              不用品回収
              <br />
              ・家財整理
            </div>
            <div className="service_box">
              <div className="service_box_naka">
                <div className="center">
                  <StaticImage src="../images/top_pic01.png" alt="" />
                </div>
                <p>
                  ご家庭やオフィスにある要らなくなったものを即日回収いたします！
                </p>
                <p className="center">
                  <Link to="/service/fuyouhin_kaisyu/" className="bt01">
                    詳しくはこちら
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service_cont">
          <div className="service_inner">
            <div className="service_h">
              ゴミ屋敷の
              <br />
              片付け
            </div>
            <div className="service_box">
              <div className="service_box_naka">
                <div className="center">
                  <StaticImage src="../images/top_pic02.png" alt="" />
                </div>
                <p>
                  ゴミが大量のお部屋もご安心ください！あっという間にキレイにします！
                </p>
                <p className="center">
                  <Link to="/service/gomi_yashiki/" className="bt01">
                    詳しくはこちら
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service_cont">
          <div className="service_inner">
            <div className="service_h">
              遺品整理・
              <br />
              仏壇の引き取り
            </div>
            <div className="service_box">
              <div className="service_box_naka">
                <div className="center">
                  <StaticImage src="../images/top_pic03.png" alt="" />
                </div>
                <p>
                  人様の大切な遺品を定年に整理させて頂きます。不用品の処分、清掃もお任せください！
                </p>
                <p className="center">
                  <Link to="/service/ihin_seiri/" className="bt01">
                    詳しくはこちら
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service_cont">
          <div className="service_inner">
            <div className="service_h">
              引っ越しに伴う
              <br />
              粗大ゴミ回収
            </div>
            <div className="service_box">
              <div className="service_box_naka">
                <div className="center">
                  <StaticImage src="../images/top_pic04.png" alt="" />
                </div>
                <p>
                  ご家庭やオフィスにある要らなくなったものを即日回収いたします！
                </p>
                <p className="center">
                  <Link to="/service/hikkoshi_gomi/" className="bt01">
                    詳しくはこちら
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceList;
