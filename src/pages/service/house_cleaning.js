import React from 'react'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import BreadCrumbParent from '../../components/BreadCrumbParent'
import PlanList from '../../components/Plan_list'

const pagemeta = {
  subTitle:`ハウスクリーニング`,
  slug:`house_cleaning`,
  parentTitle:`サービス一覧`,
  parentSlug:`service`
}

export default function houseCleaning() {
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

        <h4 className="service_title">ハウスクリーニング</h4>
        <div className="service_list_box">
        <h4 className="service_list_title">清掃等 費用目安</h4>
          <table className="legal_notice">
            <tbody>
              <tr>
                <th>1Ｒ・1Ｋ</th>
                <td>25,000円～</td>
              </tr>
              <tr>
                <th>1ＤＫ</th>
                <td>30,000円～</td>
              </tr>
              <tr>
                <th>1LDK</th>
                <td>40,000円～</td>
              </tr>
              <tr>
                <th>2LDK</th>
                <td>45,000円～</td>
              </tr>
              <tr>
                <th>3LDK</th>
                <td>50,000円～</td>
              </tr>
              <tr>
                <th>戸 建</th>
                <td>55,000円～</td>
              </tr>
              <tr>
                <th>キッチン廻りのみ</th>
                <td>12,000円～</td>
              </tr>
              <tr>
                <th>浴室廻りのみ</th>
                <td>10,000円～</td>
              </tr>
              <tr>
                <th>トイレ・洗面所廻りのみ</th>
                <td>10,000円～</td>
              </tr>
              <tr>
                <th>エアコン分解洗浄</th>
                <td>8,500円～　清掃とセットの場合</td>
              </tr>
              <tr>
                <th>エアコン分解洗浄</th>
                <td>12,000円～　単発の場合</td>
              </tr>
            </tbody>
          </table>
          <p>※m&sup2;が広い場合や汚れ度合により費用単価 前後いたします</p>

          <h4 className="service_list_title mt60">内装工事費用目安</h4>

          <table className="legal_notice">
            <tbody><tr>
                <th>壁紙クロス貼替</th>
                <td>850円/ｍ～</td>
              </tr>
              <tr>
                <th>畳 表替</th>
                <td>4,000円/帖～</td>
              </tr>
              <tr>
                <th>襖・障子 貼替</th>
                <td>3,500円/枚～</td>
              </tr>
              <tr>
                <th>網戸貼替</th>
                <td>3,000円/枚～</td>
              </tr>
              <tr>
                <th>床材貼替</th>
                <td>要 相談</td>
              </tr>
            </tbody></table>
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
      "@id":"https://aki-risaikuru.com/service/house_cleaning/#breadcrumblist",
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
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ハウスクリーニング",
            "url":"https://aki-risaikuru.com/service/"
          },
          "nextItem":"https://aki-risaikuru.com/service/house_cleaning/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://aki-risaikuru.com/service/house_cleaning/#listItem",
          "position":3,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/service/house_cleaning/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜サービス一覧｜ハウスクリーニング",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ハウスクリーニング",
            "url":"https://aki-risaikuru.com/service/house_cleaning/"
          },
          "previousItem":"https://aki-risaikuru.com/service/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aki-risaikuru.com/service/house_cleaning/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aki-risaikuru.com/service/house_cleaning/#webpage",
      "url":"https://aki-risaikuru.com/service/house_cleaning/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜ハウスクリーニング",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ハウスクリーニング",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aki-risaikuru.com/service/house_cleaning/#website"
      },
      "breadcrumb":{
        "@id":"https://aki-risaikuru.com/service/house_cleaning/#breadcrumblist"
      },
      "datePublished":"2022-12-26T01:06:53+09:00",
      "dateModified":"2022-12-27T04:27:08+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aki-risaikuru.com/service/house_cleaning/#website",
      "url":"https://aki-risaikuru.com/service/house_cleaning/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜ハウスクリーニング",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ハウスクリーニング",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aki-risaikuru.com/service/house_cleaning/#person"
      }
    }
  ]
}


export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle}
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス内容｜ハウスクリーニング"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)