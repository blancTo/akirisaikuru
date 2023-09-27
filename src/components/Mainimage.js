import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Mainimage() {
  return (
    <>
      <ul className="area_list pc">
        <li>
          <Link to="/">
            <StaticImage
              src="../images/area_01.png"
              width={157}
              height={59}
              alt="広島市"
            />
          </Link>
        </li>
        <li>
          <StaticImage
            src="../images/area_02.png"
            width={157}
            height={59}
            alt="安芸郡"
          />
        </li>
        <li>
          <StaticImage
            src="../images/area_03.png"
            width={157}
            height={59}
            alt="東広島市"
          />
        </li>
        <li>
          <StaticImage
            src="../images/area_04.png"
            width={157}
            height={59}
            alt="呉市"
          />
        </li>
      </ul>
      <ul className="area_list pc">
        <li>
          <StaticImage
            src="../images/area_05.png"
            width={120}
            height={45}
            alt="大竹市"
          />
        </li>
        <li>
          <StaticImage
            src="../images/area_06.png"
            width={120}
            height={45}
            alt="廿日市市"
          />
        </li>
        <li>
          <StaticImage
            src="../images/area_07.png"
            width={120}
            height={45}
            alt="竹原市"
          />
        </li>
        <li>
          <StaticImage
            src="../images/area_08.png"
            width={120}
            height={45}
            alt="三原市"
          />
        </li>
        <li>
          <StaticImage
            src="../images/area_09.png"
            width={120}
            height={45}
            alt="三次市"
          />
        </li>
      </ul>
      <div id="mainimage">
        <div id="mainimage-inner">
          <div className="pc">
            <StaticImage
              src="../images/txt01.png"
              width={1142}
              height={80}
              alt="各種クレジットカード対応"
            />

            <h2 className="center">
              <StaticImage
                src="../images/top_medal.png"
                width={1000}
                height={270}
                alt="お客様満足度97％　安心と実績の20年　女性スタッフ同行可能。"
              />
            </h2>
            <div className="center mtb20">
              <StaticImage
                src="../images/txt02.png"
                width={332}
                height={42}
                alt="詳しくはお問合せください"
              />
            </div>
            <h2 className="center">
              <StaticImage
                src="../images/txt03.png"
                width={716}
                height={42}
                alt="不用品回収なら当日予約OKの安芸リサイクルにお任せください！"
              />
            </h2>
            <StaticImage
              src="../images/txt04.png"
              width={1000}
              height={410}
              alt="片付け整理人 他社だと必ず発生する基本料金や出張費用が0円"
            />
          </div>
          <div className="smp">
            <StaticImage
              src="../images/mainimage_smp.jpg"
              width={389}
              height={389}
              alt="片付け整理人 他社だと必ず発生する基本料金や出張費用が0円"
            />
          </div>
        </div>
      </div>
    </>
  );
}
