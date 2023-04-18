import React from 'react'
import Seo from '../../components/Seo'
import BreadCrumbParent from '../../components/BreadCrumbParent'
import Layout from '../../components/Layout'
import PlanList from '../../components/Plan_list'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { StaticImage } from "gatsby-plugin-image"

const pagemeta = {
    subTitle:`不用品回収・家財整理`,
    slug:`fuyouhin_kaisyu`,
    parentTitle:`サービス一覧`,
    parentSlug:`service`
}

export default function fuyouhinKaisyu() {
  return (
    <>
    
        <Layout>
        <BreadCrumbParent
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        parentTitle={pagemeta.parentTitle}
        parentSlug={pagemeta.parentSlug}
        />

        <h3 className="main_title">サービス一覧</h3>
        <h4 className="service_title">不用品回収・家財整理<StaticImage src="../../images/service/service_icon01.png" className="icon_img" alt="" /></h4>
        <StaticImage src="../../images/service/fuyouhin01.jpg" width={765} height={381} alt="" />
        <p>小さい物一つでもお伺いします。<br />
          また仏壇や冷蔵庫、大型テレビ、ソファ、タンス、ベッド、食器棚などの重くて大きなものでも大丈夫。お気軽にご連絡ください。<br />
          ご依頼場所の規模や対象となる物の数などに制限はありません。<br />
          一部屋丸ごと、倉庫、物置、ガレージ等どのような規模のご依頼でもお伺いいたします。</p>

        <div className="service_list_box">
          <h4 className="service_list_title">こんな方はお気軽にご相談ください</h4>

            <ul className="check_list">
                <li><FontAwesomeIcon icon={faCheck} />TV１点だけなんですが…</li>
                <li><FontAwesomeIcon icon={faCheck} />一緒に分別しながら回収してほしい…</li>
                <li><FontAwesomeIcon icon={faCheck} />物置の中身と物置も回収してほしい…</li>
                <li><FontAwesomeIcon icon={faCheck} />分別してないのですが…</li>
                <li><FontAwesomeIcon icon={faCheck} />大型家具の処分をお願いしたいのですが、通路が狭くて…</li>
                <li><FontAwesomeIcon icon={faCheck} />何も準備してないけど見積もりに来てくれるの…</li>
                <li><FontAwesomeIcon icon={faCheck} />各部屋ごとに少量ずつ不用品があるけど…</li>
            </ul>
                
            <p>などなど、上記の事はすべて対応可能です。是非ご連絡ください。</p>

        </div>

        <h4 className="title01 mt60">お得で安心の定額パックプラン</h4>

        <PlanList />

        </Layout>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/#breadcrumblist",
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
        },
        {
          "@type":"ListItem",
          "@id":"https://aki-risaikuru.com/service/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/service/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜サービス一覧",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜不用品回収・家財整理",
            "url":"https://aki-risaikuru.com/service/"
          },
          "nextItem":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/#listItem",
          "position":3,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜サービス一覧｜不用品回収・家財整理",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜不用品回収・家財整理",
            "url":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/"
          },
          "previousItem":"https://aki-risaikuru.com/service/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/#webpage",
      "url":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜不用品回収・家財整理",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜不用品回収・家財整理",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/#website"
      },
      "breadcrumb":{
        "@id":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/#breadcrumblist"
      },
      "datePublished":"2022-12-26T01:06:53+09:00",
      "dateModified":"2022-12-27T04:27:08+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/#website",
      "url":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜不用品回収・家財整理",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜不用品回収・家財整理",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aki-risaikuru.com/service/fuyouhin_kaisyu/#person"
      }
    }
  ]
}


export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle}
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス内容｜不用品回収・家財整理"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)