import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PlanList = () => {
  return (
    <>

        <div className="plan_cont">
              <div className="plan_box">
                <div className="plan_box_inner">
                  <StaticImage src="../images/plan_title01.png" alt="軽トラック ハーフプラン" />
                  <p>1点の不用品から！</p>
                  <div className="center pt47"><StaticImage src="../images/plan_img01.png" alt="" /></div>
                </div>
                <p className="center"><Link to="/price/#half" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</Link></p>
              </div>

              <div className="plan_box">
                <div className="plan_box_inner">
                  <StaticImage src="../images/plan_title02.png" alt="軽トラックに積み放題！プラン" />
                  <p>金額の目安は「軽トラック」荷台にいっぱいでの金額です。荷台に半分の場合は金額も半分となります。</p>
                  <div className="center"><StaticImage src="../images/plan_img02.png" alt="" /></div>
                </div>
                <p className="center"><Link to="/price/#kei" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</Link></p>
              </div>

              <div className="plan_box">
                <div className="plan_box_inner">
                  <StaticImage src="../images/plan_title03.png" alt="軽トラック幌車の積み放題プラン" />
                  <p>金額の目安は「軽トラック幌車」荷台にいっぱいでの金額です。荷台に半分の場合は金額も半分となります。</p>
                  <div className="center"><StaticImage src="../images/plan_img03.png" alt="" /></div>
                </div>
                <p className="center"><Link to="/price/#kei-horo" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</Link></p>
              </div>

              <div className="plan_box">
                <div className="plan_box_inner">
                  <StaticImage src="../images/plan_title04.png" alt="2ｔトラックに積み放題！プラン" />
                  <p>金額の目安は「2ｔトラック」荷台にいっぱいでの金額です。荷台に半分の場合は金額も半分となります。</p>
                  <div className="center"><StaticImage src="../images/plan_img04.png" alt="" /></div>
                </div>
                <p className="center"><Link to="/price/#trak2t" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</Link></p>
              </div>

              <div className="plan_box">
                <div className="plan_box_inner">
                  <StaticImage src="../images/plan_title05.png" alt="軽トラックに積み放題！プラン" />
                  <p>家電他家具等ゴミ一緒に回収します２ＤＫ～２ＬＤＫ程度のお部屋のお片付けにオススメの定額！Ｌパックプランです。</p>
                  <div className="center"><StaticImage src="../images/plan_img05.png" alt="" /></div>
                </div>
                <p className="center"><Link to="/price/#trak2tl" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</Link></p>
              </div>
            </div>
      
    </>
  )
}

export default PlanList
