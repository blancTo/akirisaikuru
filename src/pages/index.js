import React from 'react'

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Seo from '../components/Seo';
import Header from '../components/Header'
import Mainimage from '../components/Mainimage'
import PlanList from '../components/Plan_list'
import ServiceList from '../components/Service_list'
import BnList from '../components/banner_list'
import TelList from '../components/Tel_List'
import MainR from '../components/MainR'
import Footer from '../components/Footer'
import TopVoice from '../components/top_voice'

export default function Home() {
  return (
    <>
    <div id='content'>
      <div className='maincontent'>
      
      <Header />

      <p id="page-top"><AnchorLink offset="0" to="#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
        
      <Mainimage />

      <section>
        <div className='main-content'>
            <div className="center pc"><StaticImage src="../images/txt05.png" alt="お得な定額パックプランをご用意!!" /></div>
            <div className="center pc"><StaticImage src="../images/txt06.png" alt="他社より1円でも高ければご相談ください!!" /></div>

            <TelList />

            <div className="bn_list"><StaticImage src="../images/txt07.png" alt="格安回収　明朗会計　全て込み　お得なパック料金はこちら" /></div>
            <div className="pack_title">下記の項目が全てパック料金に含まれます！</div>

            <ul className="pack_list">
              <li><StaticImage src="../images/pack_price_list01.png" alt="搬出作業費" /></li>
              <li><StaticImage src="../images/pack_price_list02.png" alt="階段料金" /></li>
              <li><StaticImage src="../images/pack_price_list03.png" alt="スタッフ追加料金" /></li>
              <li><StaticImage src="../images/pack_price_list04.png" alt="車両費" /></li>
              <li><StaticImage src="../images/pack_price_list05.png" alt="出張費" /></li>
              <li><StaticImage src="../images/pack_price_list06.png" alt="エアコン取り外し" /></li>
            </ul>

            <p>安芸リサイクルでは、他社では別料金になる搬出作業費・お掃除作業費・スタッフ追加料金・車両費・出張費・エアコン取り外し費用が全て込みの料金となっております。<span class="dark-red b_900">お見積り後の追加料金も一切ございません。</span><br />
            お客様の状況にあった最適なプランをご提案させて頂きます！</p>

            <PlanList />

            <div className="kaisyu_box">
              <h3>【回収品一覧】</h3>
              <p>冷蔵庫、洗濯機、テレビ、エアコン、窓用エアコン、パソコン、ノートパソコン、ドラム式洗濯乾燥機、食器棚、ソファー、洋服タンス、整理タンス、シングルベッド、マットレス、学習机、ダイニングテーブル、ガラステーブル、ＴＶ台、布団、毛布、電子レンジ、トースター、電気ポット、炊飯器、掃除機、医療乾燥機、ふとん乾燥機、アイロン、草刈機、ホットカーペット、コタツ、ストーブ、オイルヒーター、ファンヒーター、電気ストーブ、扇風機、空気清浄機、除湿機、加湿器、換気扇、冷風機、キーボード、ウォーターベッド、座椅子、ジュータンその他</p>
              <div className="pc center"><StaticImage src="../images/itiran_img.png" alt="回収品一覧イメージ" /></div>
              <div className="smp center"><StaticImage src="../images/itiran_img_smp.png" alt="回収品一覧イメージ" /></div>
            </div>

            <TelList />

            <BnList />

            <div className="bn_list"><StaticImage src="../images/txt09.png" alt="安芸リサイクルからお客様への3つのお約束！" /></div>

            <div className="promise_box">
              <div className='promise_img'><StaticImage src="../images/txt10_1.png" alt="即日！スピード対応！" /></div>
              <div className='promise_img'><StaticImage src="../images/txt10_2.png" alt="損害保険に対応！" /></div>
              <div className='promise_img'><StaticImage src="../images/txt10_3.png" alt="後から請求はありません！" /></div>
            </div>

            <ServiceList />

            <TelList />

            <div className="recycle_txt">
              当社は倉庫にてリサイクル商品も販売しています。<br />
              家電販売　家具販売　小物類～その他生活品多数揃っています。<br className="pc" />
              広島で一番安いリサイクルショップ、是非一度お問い合わせください。
            </div>

            <div className="bn_list"><Link to="service/house-cleaning/"><StaticImage src="../images/house-cleaning-bn.png" alt="ハウスクリーニング リフォーム担当者直通" /></Link></div>

            <BnList />
          </div>
        </section>

        <section>
          <div className='main-content'>

            <div className="flex-wrap">

              <div id="main_l">
                <h3 className="title01">粗大ゴミ・不用品回収（ゴミ屋敷お片付け）までの流れ</h3>

                <div className="flex-center top_kaisyu_flow">
                  <div>
                    <StaticImage src="../images/top_flow01_1.png" alt="受付→予約→お見積もり" />
                  </div>
                  <div>
                    <StaticImage src="../images/top_flow01_2.png" alt="回収作業→お支払い" />
                  </div>
                </div>

                <p className="center"><a href="/flow/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></a></p>

                <h3 className="title01">こんな粗大ゴミや不用品を何とかしたい！</h3>

                <div className="top_flow_cont">

                  <div className="top_flow_box">
                    <h4 className="before_title">Before</h4>
                    <div className="top_flow_inner">                    
                    <div className="center"><StaticImage src="../images/jirei_before01.jpg" alt="Before画像" /></div>
                    <p className="orange b_900 txt140p">● 回収品</p>
                    <p>・洗濯機・冷蔵庫・机・いす・デスクトップパソコン・ちゃぶ台方机・その他細々したもの</p>
                    </div>
                  </div>

                  <div className="top_flow_arrow"><StaticImage src="../images/arrow_03.png" alt="" /></div>

                  <div className="top_flow_box">
                    <h4 className="after_title">After</h4>
                    <div className="top_flow_inner">
                      <div className="center"><StaticImage src="../images/jirei_after01.jpg" alt="After画像" /></div>
                      <p className="orange b_900 txt140p">● 回収料金</p>
                      <p className="price">33,000<span className="yen">円(税込)</span></p>
                    </div>
                  </div>

                </div>
              
                <div><a href="tel:0120-28-3374"><StaticImage src="../images/free_dial_bt_s.png" alt="タップして電話かけてね！！tel:0120-28-3374" /></a></div>

                <h3 className="title01 mt60">対応エリア一覧</h3>

                <p>広島市中区・東区・南区・安佐南区・安佐北区・西区・佐伯区・廿日市市・安芸区・海田・坂・熊野・東広島市・西条・八本松・黒瀬町・安芸津町・安浦町・呉市・江田島市・音戸町・倉橋町</p>

                <TopVoice />

                <p className="center"><a href="/voice/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></a></p>
                <div><a href="tel:0120-28-3374"><StaticImage src="../images/free_dial_bt_s.png" alt="タップして電話かけてね！！tel:0120-28-3374" /></a></div>

              </div>

              <MainR />
                
            </div>
            

          </div>
        </section>

        <Footer />

        </div>
      </div>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://aki-risaikuru.com/#breadcrumblist",
      "itemListElement":[
        {
          "@type":"ListItem",
          "@id":"https://aki-risaikuru.com/#listItem",
          "position":1,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応",
            "url":"https://aki-risaikuru.com/"
          },
          "nextItem":"https://aki-risaikuru.com/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aki-risaikuru.com/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aki-risaikuru.com/#webpage",
      "url":"https://aki-risaikuru.com/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aki-risaikuru.com/#website"
      },
      "breadcrumb":{
        "@id":"https://aki-risaikuru.com/#breadcrumblist"
      },
      "datePublished":"2022-12-26T01:06:53+09:00",
      "dateModified":"2022-12-27T04:27:08+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aki-risaikuru.com/#website",
      "url":"https://aki-risaikuru.com/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aki-risaikuru.com/#person"
      }
    }
  ]
}


export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)