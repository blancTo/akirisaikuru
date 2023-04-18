import React from 'react'
import Seo from '../../components/Seo'
import BreadCrumbParent from '../../components/BreadCrumbParent'
import Layout from '../../components/Layout'
import PlanList from '../../components/Plan_list'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { StaticImage } from "gatsby-plugin-image"

const pagemeta = {
    subTitle:`ゴミ屋敷の片付け`,
    slug:`gomi_yashiki`,
    parentTitle:`サービス一覧`,
    parentSlug:`service`
}

export default function gomiYashiki() {
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
        <h4 className="service_title">ゴミ屋敷の片付け<StaticImage  src="../../images/service/service_icon02.png" className="icon_img" alt="" /></h4>
        <div><StaticImage  src="../../images/service/gomi01.jpg" width={765} height={381} alt="" /></div>
        <p>精神的に疲れた。仕事に追われ時間がない。<br />
          などの理由で、後で片づけよう。がいつの間にか自分一人ではどうにもならない状況！！<br />
          又、「ゴミ」という言葉に対する概念も人それぞれ違います。もう何年も使用せず放置して ある物に対して ゴミだと考える方がいれば、いつか使う時の為に取り置きしていて必需品と考える方もいます。どちらの考えも間違えではないと思います。<br />
          後で、後でと延ばしているうちに、いつの間にか手が付けられなくなってしまったけど、なんとかしたいとお考えになる機会がありましたら、是非一度ご相談ください。</p>
        <div className="service_list_box">
          <h4 className="service_list_title">こんな方はお気軽にご相談ください</h4>
            <ul className="check_list">
                <li><FontAwesomeIcon icon={faCheck} />家を引越しないといけないが、1人ではどうすることも出来ない…</li>
                <li><FontAwesomeIcon icon={faCheck} />大量のゴミがありどうしたらよいかわからない…</li>
                <li><FontAwesomeIcon icon={faCheck} />部屋を明け渡すので現状復帰したい…</li>
                <li><FontAwesomeIcon icon={faCheck} />近所に知られずゴミを処分したい…</li>
                <li><FontAwesomeIcon icon={faCheck} />臭いがきついのですが…</li>
                <li><FontAwesomeIcon icon={faCheck} />虫が大量発生しているのですが…</li>
                <li><FontAwesomeIcon icon={faCheck} />早急に処分したいのですが…</li>
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
      "@id":"https://aki-risaikuru.com/service/gomi_yashiki/#breadcrumblist",
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
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ゴミ屋敷の片付け",
            "url":"https://aki-risaikuru.com/service/"
          },
          "nextItem":"https://aki-risaikuru.com/service/gomi_yashiki/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://aki-risaikuru.com/service/gomi_yashiki/#listItem",
          "position":3,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/service/gomi_yashiki/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜サービス一覧｜ゴミ屋敷の片付け",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ゴミ屋敷の片付け",
            "url":"https://aki-risaikuru.com/service/gomi_yashiki/"
          },
          "previousItem":"https://aki-risaikuru.com/service/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aki-risaikuru.com/service/gomi_yashiki/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aki-risaikuru.com/service/gomi_yashiki/#webpage",
      "url":"https://aki-risaikuru.com/service/gomi_yashiki/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜ゴミ屋敷の片付け",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ゴミ屋敷の片付け",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aki-risaikuru.com/service/gomi_yashiki/#website"
      },
      "breadcrumb":{
        "@id":"https://aki-risaikuru.com/service/gomi_yashiki/#breadcrumblist"
      },
      "datePublished":"2022-12-26T01:06:53+09:00",
      "dateModified":"2022-12-27T04:27:08+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aki-risaikuru.com/service/gomi_yashiki/#website",
      "url":"https://aki-risaikuru.com/service/gomi_yashiki/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜ゴミ屋敷の片付け",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ゴミ屋敷の片付け",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aki-risaikuru.com/service/gomi_yashiki/#person"
      }
    }
  ]
}


export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle}
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス内容｜ゴミ屋敷の片付け"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)