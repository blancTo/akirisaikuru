import React from 'react'
import Seo from '../components/Seo'
import BreadCrumb from '../components/BreadCrumb'
import Layout from '../components/Layout'
import { Link } from "gatsby"

const pagemeta = {
  subTitle:`よくあるご質問`,
  slug:`faq`
}

export default function faq() {
  return (
    <>
      
      <Layout>

        <BreadCrumb
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />

        <h3 className="main_title">よくあるご質問</h3>
        <p className="faq_bg_q">引越しするので出張買取をお願いしたいのですが、どのような流れになりますか？</p>
        <div className="faq_bg_a">
          <p>まずは、フリーダイヤル（0120-28-3374）または、<Link to="/contact/">お問い合わせフォーム</Link>よりご連絡ください。引越し日、買取商品の種類・数・大きさ・場所などをご連絡ください。<br />
            (1)希望日時に担当者が無料で出張お見積もりにお伺いいたします。現地にて商品を確認させていただき、買取できる商品、無料引取できる商品、有償処分になる商品に分類させていただき、１点ずつ丁寧に査定いたします。<br />
            (2)査定内容にご納得いただけましたら、お客様のご都合に合わせて作業日を決定します。<br />
            (3)作業日にお伺いし、商品の買取（無料引取）いたします。その際、お客様のお立会いをお願いいたします。作業終了後、買取金額をその場でお支払いいたします。（ただし、買取商品金額よりも有償処分金額の方が多い場合には、当日現金にてお支払いいただきます。）</p>
        </div>
        <p className="faq_bg_q">現在、広島県外に住んでいます。広島に住んでいた親が亡くなったため、家財を処分したいのですが？</p>
        <div className="faq_bg_a">
          <p>家財処分できます。まずは、フリーダイヤル（0120-28-3374）または、<Link to="/contact/">お問い合わせフォーム</Link>よりご連絡ください。現地にて下見・お見積もりする時、作業当日には、お立会いをお願いいたします。</p>
        </div>
        <p className="faq_bg_q">空き家の家財を処分してもらえませんか？</p>
        <div className="faq_bg_a">
          <p>空き家でも家財処分できます。まずは、フリーダイヤル（0120-28-3374）または、<Link to="/contact/">お問い合わせフォーム</Link>よりご連絡ください。現地にて下見・お見積もりする時、作業完了日には、お立会いをお願いいたします。空き家での作業となるため、作業期間中は鍵をお預かりいたします。（鍵の返却は作業完了日となります。）</p>
        </div>
        <p className="faq_bg_q">放置自転車があるので処分していただけますか？</p>
        <div className="faq_bg_a">
          <p>ご希望の日時にお伺いし、処分できます。処分料は以下のとおりです。</p>
          <table className="legal_notice">
            <tbody><tr>
                <th>普通自転車</th>
                <td>1000円/台</td>
              </tr>
              <tr>
                <th>子供自転車</th>
                <td>500円/台</td>
              </tr>
            </tbody></table>
          <p>※放置自転車の場合、すぐに処分することはできません。住民への告知、盗難届けの確認をした上で処分することになります。</p>
        </div>
        <p className="faq_bg_q">不要になった自転車の買取や処分はできますか？</p>
        <div className="faq_bg_a">
          <p>お持ちの自転車で使わなくなった自転車（子供自転車）、一輪車については、当店にお持ちいただければ買取や処分いたします。その場で状態を確認し、査定買取あるいは有料処分いたします。</p>
        </div>
        <p className="faq_bg_q">買取や引取するかどうか分かりませんが、見積もりだけでもしてもらえますか？</p>
        <div className="faq_bg_a">
          <p>お気軽にフリーダイヤル（0120-28-3374）または、<Link to="/contact/">お問い合わせフォーム</Link>よりご連絡ください。無料見積もりいたします。</p>
        </div>
        <p className="faq_bg_q">土曜日、日曜日、祝日でも出張見積もり、買取してもらえますか？</p>
        <div className="faq_bg_a">
          <p>当店は年中無休ですので、お勤めの方の都合がつけやすい土曜日、日曜日、祝日をご指定いただいてかまいません。休日に特別料金がかかることはありませんので、ご安心ください。</p>
        </div>
        <p className="faq_bg_q">店頭への持ち込みと出張引取の場合では、買取の査定が違うのですか？</p>
        <div className="faq_bg_a">
          <p>持ち込みと出張引取では査定が異なります。出張買取の場合は、持ち込みの場合の約半分の査定となります。出張買取の場合は経費がかかります。ご理解のほどよろしくお願いいたします。</p>
        </div>
        <p className="faq_bg_q">リサイクル家電って何ですか？</p>
        <div className="faq_bg_a">
          <p>電リサイクル法対象機器の事を言い、処分する際には「処分運搬料3,000円」の他に「リサイクル料金」というのが加算される家電品（4品目）のことです。 現在、「エアコン3,150円」「冷蔵庫4,830円」「テレビ2,835円」「洗濯機2,520円」が処分運搬料3,000円に加算して支払うことが義務づけられております。当店では、製造から５年未満の上記商品(エアコンは１年以内）はご希望日時にお伺いしてお引取り～買い取りさせていただけますし、残念ながら処分対象のリサイクル家電については、以下の料金（処分運搬料、リサイクル料金込み）で処分することもできますので、ぜひご相談ください。</p>
          <table className="legal_notice">
            <tbody><tr>
                <th>エアコン</th>
                <td>5,150円～</td>
              </tr>
              <tr>
                <th>冷蔵庫</th>
                <td>6,500円～</td>
              </tr>
              <tr>
                <th>洗濯機</th>
                <td>4,400円～</td>
              </tr>
              <tr>
                <th>テレビ</th>
                <td>5,000円～</td>
              </tr>
            </tbody></table>
          <p>また、処分方法が違いますが、「ＰＣリサイクルマーク」のついていないパソコンもリサイクル家電と呼ばれ、普通の大型ゴミとしては処分することはできません。各メーカーにリサイクル料金を支払い、回収してもらわなければなりません。当店では、型式が古くて買取できないパソコン類に関しましては、以下の料金をいただいて処分することも可能です。</p>
          <table className="legal_notice">
            <tbody><tr>
                <th>パソコン本体</th>
                <td>3,000円</td>
              </tr>
              <tr>
                <th>パソコンモニタ（CRT）</th>
                <td>3,000円</td>
              </tr>
            </tbody></table>
        </div>
        <p className="faq_bg_q">エアコンの取り外しもしてもらえますか？</p>
        <div className="faq_bg_a">
          <p>取り外しは当店でも行います。（取り外し料金は別途5,000円）エアコンの買取査定が取り外し料金5,000円より低い場合は、差額をお客様にお支払いいただくことになります。</p>
        </div>
        <p className="faq_bg_q">製造から6年以上経過している電化製品の買取はできますか？</p>
        <div className="faq_bg_a">
          <p>基本的に商品全般で「製造から５年以内」の商品を査定の上、買取させていただいております。製造から５年を超える商品の場合は、状態を確認させていただいた上で「無償引取り可能」か「有償処分」か判断させていただきます。</p>
        </div>
        <p className="faq_bg_q">冷蔵庫の買い替えを考えています。今使っているものを下取・引取してもらえますか？</p>
        <div className="faq_bg_a">
          <p>5年以内であれば査定の上買取させていただきますし、5年以上であれば有償処分（6,500円）でお引取いたします。</p>
        </div>
        <p className="faq_bg_q">季節商品であっても、いつでも買取していただけますか？</p>
        <div className="faq_bg_a">
          <p>扇風機、ファンヒーターといった季節商品も、いつでも買取しています。ただし、シーズンオフの場合は、シーズン中より査定が下がることもあります。</p>
        </div>
        <p className="faq_bg_q">商品に付属していたリモコンや取扱説明書がなくなっているのですが、買取してもらえますか？</p>
        <div className="faq_bg_a">
          <p>はい。買取させていただきます。が、査定は若干下がります。ただし、テレビやビデオなどは例外で、リモコンがないと買取はできません。最近のテレビやビデオなど映像関係機器は、リモコンからチャンネル設定を行うようになっておりますので、リモコンがないと設定ができないからです。あらかじめご了承願います。</p>
        </div>
        <p className="faq_bg_q">車を持っていないのですが、宅急便で送っても買取してもらえますか？</p>
        <div className="faq_bg_a">
          <p>宅急便で商品を送っていただいてもかまいません。</p>
        </div>
        <p className="faq_bg_q">商品が1～2点しかありませんが、出張買取にきてもらえますか？</p>
        <div className="faq_bg_a">
          <p>お品の内容と距離によって判断させていただいております。遠方だとお伺いできない場合も、お近くでしたらお伺いできる場合がございます。店頭へのお持込が難しい場合は、お問い合わせ時にご相談ください。出張可能エリアをご確認ください。</p>
        </div>
        <p className="faq_bg_q">査定内容に不満がある場合には、断ることができますか？出張費用はどうなりますか？</p>
        <div className="faq_bg_a">
          <p>査定内容に不満がある場合には、お断りいただいてかまいません。出張した場合でも、お客様に出張費用をお支払いいただくことはありませんので、ご安心ください。</p>
        </div>
        <p className="faq_bg_q">10年前に買って未使用の家電品があるのですが、買取してもらえますか？</p>
        <div className="faq_bg_a">
          <p>申し訳ございませんが、買取はできません。使用状態に関係なく、家電品の場合は「製造から何年経過しているか？」が、買取の重要な査定基準になります。基本的に5年以内であれば、「買取」可能で、5年を超えたものについては「無料引取」か「有料処分」となります。</p>
        </div>
        <p className="faq_bg_q">新品同様の状態でも買取してもらえないものはありますか？</p>
        <div className="faq_bg_a">
          <p>あります。当店では需要が少ないもの（家庭用サウナ、スキー関連、本、ガラスケース入り人形など）や、中古品では販売が難しいもの（学習机、ランドセル、雛人形・五月人形などお祝いの品）は、状態が良くても買取できません。どうかご理解ください。</p>
        </div>

      </Layout>
    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://aki-risaikuru.com/faq/#breadcrumblist",
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
          "@id":"https://aki-risaikuru.com/faq/#listItem",
          "position":2,
          "item":{
            "@type":"WebPage",
            "@id":"https://aki-risaikuru.com/faq/",
            "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜よくあるご質問",
            "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜よくあるご質問",
            "url":"https://aki-risaikuru.com/faq/"
          },
          "previousItem":"https://aki-risaikuru.com/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://aki-risaikuru.com/faq/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://aki-risaikuru.com/faq/#webpage",
      "url":"https://aki-risaikuru.com/faq/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜よくあるご質問",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜よくあるご質問",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://aki-risaikuru.com/faq/#website"
      },
      "breadcrumb":{
        "@id":"https://aki-risaikuru.com/faq/#breadcrumblist"
      },
      "datePublished":"2022-12-26T01:06:53+09:00",
      "dateModified":"2022-12-27T04:27:08+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://aki-risaikuru.com/faq/#website",
      "url":"https://aki-risaikuru.com/faq/",
      "name":"広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜よくあるご質問",
      "description":"広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜よくあるご質問",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://aki-risaikuru.com/faq/#person"
      }
    }
  ]
}


export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle}
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのよくあるご質問"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)