import React from 'react'
import Seo from '../components/Seo'

import BreadCrumb from '../components/BreadCrumb'
import Layout from '../components/Layout'
import { Link } from "gatsby"

const pagemeta = {
    subTitle:`ページが見つかりません`,
    slug:`404`
}

export default function notFound() {
  return (
    <>
    
        
    <Layout>
      <BreadCrumb
      title={pagemeta.subTitle}
      slug={pagemeta.slug}
      />
      <h3 className="main_title">404 Not Found</h3>
      <h3>お探しの記事は見つかりませんでした。</h3>
          <p className="center">安芸リサイクルのWEBサイトをご覧頂きありがとうございます。<br />
          大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。<br />
          お手数をおかけしますが、以下の方法からもう一度目的のページをお探し下さい。</p>
          <p className="center"><Link to="/" className='bt01'>トップページへ戻る</Link></p>
      </Layout>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://aki-risaikuru.com/404/#breadcrumblist",
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
          "@id":"https://aki-risaikuru.com/404/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/404/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜404 Not Found",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜お探しのページは見つかりませんでした",
            "url":"https://aki-risaikuru.com/404/"
          },
          "previousItem":"https://aki-risaikuru.com/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aki-risaikuru.com/404/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aki-risaikuru.com/404/#webpage",
      "url":"https://aki-risaikuru.com/404/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜404 Not Found",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜お探しのページは見つかりませんでした",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aki-risaikuru.com/404/#website"
      },
      "breadcrumb":{
        "@id":"https://aki-risaikuru.com/404/#breadcrumblist"
      },
      "datePublished":"2022-12-26T01:06:53+09:00",
      "dateModified":"2022-12-27T04:27:08+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aki-risaikuru.com/404/#website",
      "url":"https://aki-risaikuru.com/404/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜404 Not Found",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜お探しのページは見つかりませんでした",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aki-risaikuru.com/404/#person"
      }
    }
  ]
}


export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
    title={pagemeta.subTitle}
    description="広島不用品回収対応エリア(広島市中区・東区・南区・安佐南区・安佐北区・西区・佐伯区・廿日市市・安芸区・海田・坂・熊野・東広島市・西条・八本松・黒瀬町・安芸津町・安浦町・呉市・江田島市・音戸町・倉橋町)"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)