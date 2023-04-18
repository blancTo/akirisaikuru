import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Mainimage() {
  return (
    <>
      <ul className="area_list pc">
        <li><StaticImage src="../images/area_01.png" alt="広島市" /></li>
        <li><StaticImage src="../images/area_02.png" alt="安芸郡" /></li>
        <li><StaticImage src="../images/area_03.png" alt="東広島市" /></li>
        <li><StaticImage src="../images/area_04.png" alt="呉市" /></li>
      </ul>
      <ul className="area_list pc">
        <li><StaticImage src="../images/area_05.png" alt="大竹市" /></li>
        <li><StaticImage src="../images/area_06.png" alt="廿日市市" /></li>
        <li><StaticImage src="../images/area_07.png" alt="竹原市" /></li>
        <li><StaticImage src="../images/area_08.png" alt="三原市" /></li>
        <li><StaticImage src="../images/area_09.png" alt="三次市" /></li>
      </ul>
      <div id="mainimage">
        <div id="mainimage-inner">
          <div className="pc">
            
            <div><StaticImage src="../images/txt01.png" alt="各種クレジットカード対応" /></div>
            
            <h2 className="center"><StaticImage src="../images/top_medal.png" alt="お客様満足度97％　安心と実績の20年　女性スタッフ同行可能。" /></h2>
            <div className="center"><StaticImage src="../images/txt02.png" alt="詳しくはお問合せください" /></div>
            <h2 className="center"><StaticImage src="../images/txt03.png" alt="不用品回収なら当日予約OKの安芸リサイクルにお任せください！" /></h2>
            <div><StaticImage src="../images/txt04.png" alt="片付け整理人 他社だと必ず発生する基本料金や出張費用が0円" /></div>
          </div>
          <div className="smp"><StaticImage src="../images/mainimage_smp.jpg" alt="片付け整理人 他社だと必ず発生する基本料金や出張費用が0円" /></div>
        </div>
      </div>
    </>
  )
}
