import React from "react";
import Seo from "../components/Seo";
import BreadCrumb from "../components/BreadCrumb";
import Layout from "../components/Layout";

const pagemeta = {
  subTitle: `お客様の声`,
  slug: `voice`,
};

export default function voice() {
  return (
    <>
      <Layout>
        <BreadCrumb title={pagemeta.subTitle} slug={pagemeta.slug} />
        <h3 className="main_title">お客様の声</h3>
        <p>お客様から嬉しいお言葉頂きました！！</p>
        <div className="top_voice_box">
          <div className="voice_r">
            <h4 className="voice_title02">
              引越しに伴って冷蔵庫や洋服ダンスなどの大型家具から、衣類・家電などまとめて回収していただきました。
            </h4>
            <p>
              <span className="voice_age">30代女性</span>　T様《主婦》
            </p>
            <p>
              主人の仕事の都合で引越しをすることになり、ついでにベッドやソファーなどの買替えも考えていました。
              <br />
              何から始めたら良いか分からず戸惑いましたが、初めは引越し業者さんに問い合わせをして、引越し作業と不用品を引き取ってもらいたいと相談しました。
              <br />
              電話口で「粗大ゴミなどは専門業者にお願いした方が安いです」と教えてもらったので、インターネットで不用品回収の業者さんを比較するサイトを見ていて、安芸リサイクルさんが載っていたので問い合わせをしてみました。
              <br />
              スタッフの方の対応が丁寧で、引越しのタイミングに合わせていただけるとお話伺ったので、今回は安芸リサイクルさんに回収をお願いすることにしました。
              <br />
              回収当日は30分くらい前にご連絡をくださり、作業員の方も感じが良く好印象でした。
              <br />
              その時はマンションの4階に住んでいて、冷蔵庫や洋服ダンスやベッドなどの大きな家具もあったのですが、回収作業もテキパキと行ってもらえて大変助かりました。
              <br />
              また機会がございましたらよろしくお願いします。
            </p>
          </div>
          <div className="voice_l">
            <p className="center mb0">
              <img src="../images/voice_ilust01.png" width={60} alt="" />
            </p>
            <p className="voice_title01">ご利用サービス</p>
            <p>軽トラック ハーフプラン</p>
            <p>
              <img
                src="../images/sarvice_01.png"
                width={155}
                height={160}
                alt=""
              />
            </p>
            <p className="voice_title01">お客様満足度</p>
            <ul className="hyoka_list">
              <li>
                <img
                  src="../images/star_01.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../images/star_01.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../images/star_01.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../images/star_01.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </li>
              <li>
                <img
                  src="../images/star_01.png"
                  width={30}
                  height={30}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aki-risaikuru.com/voice/#breadcrumblist",
      itemListElement: [
        {
          "@type": "ListItem",
          "@id": "https://aki-risaikuru.com/#listItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://aki-risaikuru.com/",
            name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル",
            description:
              "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応",
            url: "https://aki-risaikuru.com/",
          },
          nextItem: "https://aki-risaikuru.com/#listItem",
        },
        {
          "@type": "ListItem",
          "@id": "https://aki-risaikuru.com/voice/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://aki-risaikuru.com/voice/",
            name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜お客様の声",
            description:
              "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜お客様の声",
            url: "https://aki-risaikuru.com/voice/",
          },
          previousItem: "https://aki-risaikuru.com/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://aki-risaikuru.com/voice/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://aki-risaikuru.com/voice/#webpage",
      url: "https://aki-risaikuru.com/voice/",
      name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜お客様の声",
      description:
        "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜お客様の声",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://aki-risaikuru.com/voice/#website",
      },
      breadcrumb: {
        "@id": "https://aki-risaikuru.com/voice/#breadcrumblist",
      },
      datePublished: "2022-12-26T01:06:53+09:00",
      dateModified: "2022-12-27T04:27:08+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://aki-risaikuru.com/voice/#website",
      url: "https://aki-risaikuru.com/voice/",
      name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜お客様の声",
      description:
        "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜お客様の声",
      inLanguage: "ja",
      publisher: {
        "@id": "https://aki-risaikuru.com/voice/#person",
      },
    },
  ],
};

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle}
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのお客様について"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
);
