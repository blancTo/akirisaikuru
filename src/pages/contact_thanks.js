import React from 'react'
import Seo from '../components/Seo'
import BreadCrumbParent from '../components/BreadCrumbParent'
import Layout from '../components/Layout'
import { Link } from "gatsby"

const pagemeta = {
  subTitle:`無料見積り・お問い合わせありがとうございました。`,
  slug:`contact_thanks`,
  parentTitle:`お問い合わせ`,
  parentSlug:`contact`
}

export default function contact_thanks() {
  return (
    <>
      
      <Layout>

        <BreadCrumbParent
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        parentTitle={pagemeta.parentTitle}
        parentSlug={pagemeta.parentSlug}
        />

        <h3 className="main_title">無料見積り・お問い合わせ</h3>

        <p className="larger dark-red bold">無料見積り・お問い合わせありがとうございました。</p>
         
        <p>■お電話よるお問い合わせ/年中無休 8：00～18：00 TEL：0120-28-3374<br />
        ■ご利用上の注意：下記の各記入欄に必要事項とお問い合わせ内容を入力し送信をして下さい。<br />
        なお、お客さまの個人情報は他の目的では使用いたしません。<br />
        送信にあたっては、事前に<Link to="/privacy/">プライバシーポリシー</Link>をご覧下さい。</p>
         
        <p>お問い合わせありがとうございました。お問い合せ内容を確認次第、翌営業日中までにはご返答いたしますので、今しばらくお待ちくださいますよう、よろしくお願い申し上げます。</p>
        
        <p><Link to="/" className='bt01 center'>トップページに戻る</Link></p>
      
      </Layout>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://aki-risaikuru.com/contact/#breadcrumblist",
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
          "@id":"https://aki-risaikuru.com/contact/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/contact/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜お問い合わせ",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
            "url":"https://aki-risaikuru.com/contact/"
          },
          "nextItem":"https://aki-risaikuru.com/contact_thanks/#listItem"
        },
        {
          "@type":"ListItem",
          "@id":"https://aki-risaikuru.com/contact_thanks/#listItem",
          "position":3,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/contact_thanks/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
            "url":"https://aki-risaikuru.com/contact_thanks/"
          },
          "previousItem":"https://aki-risaikuru.com/contact/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aki-risaikuru.com/contact_thanks/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aki-risaikuru.com/contact_thanks/#webpage",
      "url":"https://aki-risaikuru.com/contact_thanks/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aki-risaikuru.com/contact_thanks/#website"
      },
      "breadcrumb":{
        "@id":"https://aki-risaikuru.com/contact_thanks/#breadcrumblist"
      },
      "datePublished":"2022-12-26T01:06:53+09:00",
      "dateModified":"2022-12-27T04:27:08+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aki-risaikuru.com/contact_thanks/#website",
      "url":"https://aki-risaikuru.com/contact_thanks/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aki-risaikuru.com/contact_thanks/#person"
      }
    }
  ]
}


export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle}
      description="お問い合わせ完了｜広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクル"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)