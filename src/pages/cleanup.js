import React from 'react'
import Seo from '../components/Seo'
import BreadCrumb from '../components/BreadCrumb'
import Layout from '../components/Layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const pagemeta = {
  subTitle:`家財・片付け専門`,
  slug:`cleanup`
}

export default function cleanup() {
  return (
    <>
      
      <Layout>
      <BreadCrumb
      title={pagemeta.subTitle}
      slug={pagemeta.slug}
      />

        <h3 className="main_title">家財・片付け専門</h3>

        <h4 className="title01">遺品整理、回収、処分お任せ</h4>

        <p>ご家庭での不用品（不要品買取・不用品回収・ゴミ片付け・粗大ごみ処分）(家屋解体) (家一軒からっぽに)出張見積無料、買取できるもの処分するもの＋－して見積もりします。最近、遺品整理を含め不用品の有料処分のご依頼が増えてきました。お客様が不用品・処分品と思われている品々でも、リサイクル可能な場合もございます。その場合はきちんと「買取」もしくは「無料引取」をさせていただき、少しでもコストが下がるようにお見積もりさせていただきます。安芸リサイクルは「遺品整理有資格者」で「優良事業所」として表彰されておりますのでご安心してお任せください。</p>
        <p className="title02">家庭のごみ</p>
        <div className="recycle_box">
          <div className="w25p center order2"><img src="../images/cleanup/c_img_1.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p order1">
            <p>家財ゴミが多すぎて、自分たちだけでは片付けられない方、家族の方が高齢で、自分で片付けや搬出が出来ない方、お葬式の後、仕事が忙しくて片付けをする時間がない方に。</p>
          </div>
        </div>
        <p className="title02">ごみ屋敷</p>
        <div className="recycle_box">
          <div className="w25p center"><img src="../images/cleanup/c_img_2.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p">
            <p>いつの間にか大量のごみが・・・個人ではどうしようもできなくなった大量の不用品。仕分け・分別から回収まで、家一軒空っぽに！是非、当社にお任せください。</p>
          </div>         
        </div>
        <p className="title02">引越し</p>
        <div className="recycle_box">
          <div className="w25p center order2"><img src="../images/cleanup/c_img_3.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p">
            <p>お引越し（引っ越し）が決まり、家電・家具などの不用品・不要品がたくさんでるので、出張買取して欲しいときはご相談ください。また、引っ越し先に荷物を運んできたものの、必要なかったものや置き場所に困るものがたくさんでて、不要になってしまったときもご相談ください。</p>
          </div>
        </div>
        <p className="title02">単身赴任・一人暮らしから自宅・実家にもどる</p>
        <div className="recycle_box">
          <div className="w25p center"><img src="../images/cleanup/c_img_4.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p">
            <p>一人暮らしの生活から、自宅や実家にもどるので、部屋の中を片付けたい、不用品（不要品）を処分して欲しいときはご相談ください。</p></div>
        </div>
        <p className="title02">改築・リフォーム・売却時の不用品・ごみ</p>
        <div className="recycle_box">
          <div className="w25p center order2"><img src="../images/cleanup/c_img_5.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p"><p>改築やリフォーム、売却時にでる不用品（不要品）の買取や片付け、整理、ごみ処分（ゴミ処分）などがあればご相談ください。</p>
          </div>
        </div>
        <p className="title02">当選品があるが使わない</p>
        <div className="recycle_box">
          <div className="w25p center"><img src="../images/cleanup/c_img_6.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p">
            <p>懸賞やくじで高価な電化製品などが当たったが、使う予定がないときにはご相談ください。</p>
          </div>
        </div>
        <p className="title02">買い換え</p>
        <div className="recycle_box">
          <div className="w25p center order2"><img src="../images/cleanup/c_img_7.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p"><p>家電（テレビ・エアコン・洗濯機・冷蔵庫などの電化製品）や家具を買い換え、今まで使っていたものが不要になったときはご相談ください。</p></div>
        </div>
        <p className="title02">自分では動かせないもの</p>
        <div className="recycle_box">
          <div className="w25p center"><img src="../images/cleanup/c_img_8.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p"><p>大きすぎたり、重すぎたりして一人では搬出や処分ができずに困っている大型家電や大型家具があればご相談ください。</p></div>
        </div>
        <p className="title02">処分に困っているもの</p>
        <div className="recycle_box">
          <div className="w25p center order2"><img src="../images/cleanup/c_img_9.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p"><p>壊れた家電製品や家具、PSEマークのない電化製品などの処理・廃棄処分に困っているときはご相談ください。</p></div>
        </div>
        <p className="title02">物置・納屋・倉庫・庭・ガレージ整理</p>
        <div className="recycle_box">
          <div className="w25p center"><img src="../images/cleanup/c_img_10.jpg" width={148} height={148} alt="" /></div>
          <div className="w75p"><p>物置・納屋・倉庫・庭・ガレージなどの中を全部片付け整理して、不用品を処分やリサイクルしたいときはご相談ください。</p></div>
        </div>
        <h4 className="title01">買取り不可能な商品は、回収・引取・処分なども一緒にOK</h4>
        <ul className="check_list">
            <li><FontAwesomeIcon icon={faCheck} />故障品、破損品、盗難品、キズや汚れのひどいもの、売れそうにないものは買取れません。</li>
            <li><FontAwesomeIcon icon={faCheck} />家電製品は種類によって買取可能な製造年式が異なります。</li>
            <li><FontAwesomeIcon icon={faCheck} />PSEマークがなくても買取りできる場合もありますので、ご相談下さい。</li>
            <li><FontAwesomeIcon icon={faCheck} />家具は古いものやキズや汚れのひどいものは買取れません（ブランド、デザイナー、骨董を除く）</li>
            <li><FontAwesomeIcon icon={faCheck} />ブランド品は本物と確認できるものでないと、買取できない場合がございます。</li>
            <li><FontAwesomeIcon icon={faCheck} />長距離出張での少量で買取りは、かなり高価なものでない限り難しいです。</li>
        </ul>

      </Layout>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://aki-risaikuru.com/cleanup/#breadcrumblist",
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
          "@id":"https://aki-risaikuru.com/cleanup/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/cleanup/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜家財・片付け専門",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜家財・片付け専門",
            "url":"https://aki-risaikuru.com/cleanup/"
          },
          "previousItem":"https://aki-risaikuru.com/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aki-risaikuru.com/cleanup/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aki-risaikuru.com/cleanup/#webpage",
      "url":"https://aki-risaikuru.com/cleanup/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜家財・片付け専門",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜家財・片付け専門",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aki-risaikuru.com/cleanup/#website"
      },
      "breadcrumb":{
        "@id":"https://aki-risaikuru.com/cleanup/#breadcrumblist"
      },
      "datePublished":"2022-12-26T01:06:53+09:00",
      "dateModified":"2022-12-27T04:27:08+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aki-risaikuru.com/cleanup/#website",
      "url":"https://aki-risaikuru.com/cleanup/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜家財・片付け専門",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜家財・片付け専門",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aki-risaikuru.com/cleanup/#person"
      }
    }
  ]
}


export const Head = () => (
  <>
  <body id="pagetop" />
  <Seo
      title={pagemeta.subTitle}
      description="家財・片付け専門　広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理の安芸リサイクル"
      />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)