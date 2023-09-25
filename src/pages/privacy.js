import React from "react";
import Seo from "../components/Seo";
import BreadCrumb from "../components/BreadCrumb";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const pagemeta = {
  subTitle: `個人情報の取り扱いについて`,
  slug: `privacy`,
};

export default function privacy() {
  return (
    <>
      <Layout>
        <BreadCrumb title={pagemeta.subTitle} slug={pagemeta.slug} />

        <h3 className="main_title">個人情報保護法</h3>

        <h4 className="title02">個人情報の取り扱いについて</h4>
        <p>
          安芸リサイクルは、個人情報保護の重要性を認識し、その適切な管理を行うことが重要な社会的責務と考えております。そこで安芸リサイクルが運営するこのウェブサイトにおけるプライバシーポリシーを次のとおり定め、このプライバシーポリシーに従ってお客様の個人情報を取扱
          い、お客様が安心してご利用頂けるよう、ウェブサイトの運営・管理に努めます。安芸リサイクルは、ウェブサイトを通じてお客様の個人情報をご提供頂いた時は、これを本プライバシーポリシーに従って取扱います。但し、個人情報をご提供頂く特定のウェブページにおいて、本プライバシーポリシーと異なる定めをした場合、かかる定めが本プライバシーポリシーに優先して適用されるものとします。
        </p>
        <h4 className="title02">個人情報とは</h4>
        <p>
          安芸リサイクルが、インターネットを通じて、お客様から提供を受けた住所、氏名、電話番号、E-mailアドレス等、その他の記述等により個人を識別できるも
          の、個人に帰属する番号・記号によって個人を識別できるもの、その情報だけでは個人を識別できなくても、他の情報と容易に照合することができ、それにより
          個人を識別できる固有の情報を意味します。
        </p>
        <h4 className="title02">個人情報の収集</h4>
        <p>
          お客様に個人情報のご提供をお願いする時は、予めその利用目的を明示いたします。お客様にご提供頂いた個人情報は、利用目的の範囲内で利用し、お客様の同意なく利用目的以外に利用致しません。お客様が安芸リサイクルへの個人情報の提供を希望されない場合は、お客様自身のご判断により、個人情報の提供を拒否することが出来ます。この場合、安芸リサイクルのウェブサイトにおけるサービスをご利用になれない場合がございますので、予めご了承ください。
        </p>
        <h4 className="title02">個人情報の第三者提供</h4>
        <p>
          お客様に個人情報のご提供をお願いする時は、予めその利用目的を明示いたします。しかし、次のいずれかに該当する場合はその限りではありません。
        </p>
        <ol>
          <li>お客様の同意がある場合。</li>
          <li>
            安芸リサイクルと機密保持契約を締結している協力企業、提携会社及び業務委託会社に対してお客様に明示した収集目的を実施すべく個人情報を開示する必要がある場合。
            <br />
            (例：招待状やハガキの発送を運送業者に委託する場合)
          </li>
          <li>
            統計的なデータとしてお客様個人を識別できない状態に加工した場合。
          </li>
          <li>法令等に基づき、提供に応じなければならない場合。</li>
        </ol>
        <h4 className="title02">個人情報の安全管理</h4>
        <p>
          お客様から個人情報をご提供頂く際には、個人情報をご提供頂く特定のウェブページに、その管理元を予め明示致します。管理元はご提供頂いた個人情報を厳重に保管・管理し第三者の不正なアクセスによる個人情報の漏洩・流用・改ざん等を防止するため、ファイアーウォール設置・コンピュータウィルス対策、その他合理的なセキュリティ対策を講じるものとします。
        </p>
        <h4 className="title02">個人情報の照会・訂正・削除について</h4>
        <p>
          安芸リサイクルにご提供頂いた個人情報の内容に関して、照会・訂正・削除等を希望される場合は、管理元にご請求ください。ご請求頂いた方がお客様ご本人であることが確認されましたら、合理的な期間内に、お客様の個人情報を開示、訂正又は、削除等を致します。
        </p>
        <h4 className="title02">リンク先における個人情報の保護</h4>
        <p>
          安芸リサイクルは、本ウェブサイトからリンクするウェブサイトにおける個人情報の安全確保については責任を負うことが出来ません。リンク先の個人情報保護につきましては、当該リンク先におけるプライバシーポリシー等をお客様ご自身でご確認頂きますようお願い致します。
        </p>
        <h4 className="title02">お問合せ対応窓口</h4>
        <p>
          お客様がご提供された個人情報についてご不明な点につきましては、個人情報をご提供頂く特定のウェブページに記載の
          <Link to="/contact/">お問合せ窓口</Link>までお問合せ下さい。
        </p>
      </Layout>
    </>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aki-risaikuru.com/privacy/#breadcrumblist",
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
          "@id": "https://aki-risaikuru.com/privacy/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://aki-risaikuru.com/privacy/",
            name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜個人情報の取り扱いについて",
            description:
              "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜個人情報の取り扱いについて",
            url: "https://aki-risaikuru.com/privacy/",
          },
          previousItem: "https://aki-risaikuru.com/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://aki-risaikuru.com/privacy/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://aki-risaikuru.com/privacy/#webpage",
      url: "https://aki-risaikuru.com/privacy/",
      name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜個人情報の取り扱いについて",
      description:
        "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜個人情報の取り扱いについて",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://aki-risaikuru.com/privacy/#website",
      },
      breadcrumb: {
        "@id": "https://aki-risaikuru.com/privacy/#breadcrumblist",
      },
      datePublished: "2022-12-26T01:06:53+09:00",
      dateModified: "2022-12-27T04:27:08+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://aki-risaikuru.com/privacy/#website",
      url: "https://aki-risaikuru.com/privacy/",
      name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜個人情報の取り扱いについて",
      description:
        "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜個人情報の取り扱いについて",
      inLanguage: "ja",
      publisher: {
        "@id": "https://aki-risaikuru.com/privacy/#person",
      },
    },
  ],
};

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle}
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルの個人情報の取り扱いについて"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
);
