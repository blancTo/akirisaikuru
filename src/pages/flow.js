import React from 'react'
import Seo from '../components/Seo'
import BreadCrumb from '../components/BreadCrumb'
import Layout from '../components/Layout'

const pagemeta = {
  subTitle:`ご利用までの流れ`,
  slug:`flow`
}

export default function flow() {
  return (
    <>
    
    <Layout>
      <BreadCrumb
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
      />

        <h3 className="main_title">ご利用までの流れ</h3>

        <p>お問い合わせ、お見積り、実際のお片づけまでの流れです。<br />
          弊社ではお客様に安心してご利用頂けるように、事前にきちんとお見積りをさせて頂きます。<br />
          お客様にご納得頂いたあとは、迅速丁寧に対応させて頂きます。<br />
          詳しい内容についてはお電話、またはメールにてご相談させて頂きます。</p>
        
        <div className="service_flow">
            <div className="service_h"><span>STEP1</span>お問い合わせ</div>
            <div className="service_flow_inner">
                <div className="service_flow_img"><img src="../images/flow/flow01.jpg" width={120} height={120} alt="" /></div>
                <div className="service_flow_txt">まずは、お電話又はWEBお見積りよりご依頼内容をお問い合わせください。<br />
                電話：0120-28-3374<br />
                お客様の状況やご予算などをお伺いいたします。<br />
                お客様にあった最適なプランをご提案させて頂きます。</div>
            </div>
        </div>

        <p className="center"><img src="../images/arrow_04.png" alt="" /></p>
        
        <div className="service_flow">
            <div className="service_h"><span>STEP2</span>無料見積もり</div>
          <div className="service_flow_inner">
          <div className="service_flow_img"><img src="../images/flow/flow02.jpg" width={120} height={120} alt="" /></div>
          <div className="service_flow_txt">お客様から伺った内容をもとに最適なプラン・金額をご提示いたします。<br />
              即日対応も可能ですので、お気軽にご相談ください！<br />
              ご相談内容によっては、当社スタッフがお客様の元へ伺います。</div>
          </div>
        </div>
        <p className="center"><img src="../images/arrow_04.png" alt="" /></p>
        
        <div className="service_flow">
            <div className="service_h"><span>STEP3</span>ご依頼（回収日・作業日の決定）</div>
          <div className="service_flow_inner">
            <div className="service_flow_img"><img src="../images/flow/flow03.jpg" width={120} height={120} alt="" /></div>
            <div className="service_flow_txt">ご提示させて頂いた料金にご納得頂けましたら、ご契約・作業日を決定させて頂きます。</div>
          </div>
        </div>

        <p className="center"><img src="../images/arrow_04.png" width={48} height={48} alt="" /></p>

        
        <div className="service_flow">
            <div className="service_h"><span>STEP4</span>作業開始</div>
          <div className="service_flow_inner">
            <div className="service_flow_img"><img src="../images/flow/flow04.jpg" width={120} height={120} alt="" /></div>
            <div className="service_flow_txt">ご依頼して頂いた日時にお伺いさせて頂きます。<br />
              誠心誠意ご対応させて頂きます。</div>
          </div>
        </div>
        
        <p className="center"><img src="../images/arrow_04.png" width={48} height={48} alt="" /></p>

        
        <div className="service_flow">
        <div className="service_h"><span>STEP5</span>作業完了・お支払い</div>
          <div className="service_flow_inner">
            <div className="service_flow_img"><img src="../images/flow/flow05.jpg" width={120} height={120} alt="" /></div>
            <div className="service_flow_txt">作業終了後、お客様に最終チェックをして頂き、ご納得頂けましたら作業終了・お支払いとなります。<br />
              回収させて頂いた粗大ゴミや不用品は、法律に則り適切に処分させて頂きます。どうぞ安心してご依頼くださいませ。</div>
          </div>
        </div>
        <p><span className="dark-red bold">※ご自宅へは公安委員会許可・古物商防犯組合会員担当者がお伺いします。</span><br />
          【広島県公安委員会許可　第731071400009号】</p>

    </Layout>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://aki-risaikuru.com/flow/#breadcrumblist",
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
          "@id":"https://aki-risaikuru.com/flow/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/flow/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜ご利用までの流れ",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ご利用までの流れ",
            "url":"https://aki-risaikuru.com/flow/"
          },
          "previousItem":"https://aki-risaikuru.com/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aki-risaikuru.com/flow/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aki-risaikuru.com/flow/#webpage",
      "url":"https://aki-risaikuru.com/flow/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜ご利用までの流れ",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ご利用までの流れ",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aki-risaikuru.com/flow/#website"
      },
      "breadcrumb":{
        "@id":"https://aki-risaikuru.com/flow/#breadcrumblist"
      },
      "datePublished":"2022-12-26T01:06:53+09:00",
      "dateModified":"2022-12-27T04:27:08+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aki-risaikuru.com/flow/#website",
      "url":"https://aki-risaikuru.com/flow/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜ご利用までの流れ",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜ご利用までの流れ",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aki-risaikuru.com/flow/#person"
      }
    }
  ]
}


export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle}
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのご利用までの流れ"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)