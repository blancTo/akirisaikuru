import React from 'react';
import Seo from '../components/Seo';
import BreadCrumb from '../components/BreadCrumb';
import Layout from '../components/Layout';

const pagemeta = {
  subTitle: `引越しサ―ビス`,
  slug: `moving`,
};

const moving = () => {
  return (
    <>
      <Layout>
        <BreadCrumb title={pagemeta.subTitle} slug={pagemeta.slug} />

        <h3 className='main_title'>{pagemeta.subTitle}</h3>

        <p className='title_box_red'>
          <span>不用品回収とあわせた引越しを</span>
        </p>

        <div className='moving-box'>
          <div className='txt-box'>
            <h3 className='moving-title'>引越し作業もお任せください！</h3>
            <p>「不要な物を処分しながら荷造りしたい」「引越し準備をする時間がない」など、引越しのお困り事は広島・東広島の不用品回収 安芸リサイクルにお任せください。回収とあわせて引越しサポートを行うため、引越しと不用品処分をまとめて終わらせたい方もご安心ください。</p>

            <p>荷造り中に出た不要な衣類や日用品、荷解きに伴う段ボールや梱包材もまとめて処分でき、引越し作業は荷造りから対応しますので、お忙しい方でも安心してお任せいただけます。</p>
          </div>

          <div className='img-box'>
            <img src='/images/moving_img01.jpg' />
          </div>
        </div>

        <h4 className='moving-subtitle'>さまざまなニーズに対応</h4>

        <div class='moving-cont'>
          <div class='moving-box'>
            <div class='txt-box'>
              <h5 className='moving-title2'>単身のお引越し</h5>
              <p>初めての一人暮らしや単身赴任でのご依頼も大歓迎です。お荷物・回収品が少なくても問題ありません。年中無休で対応しておりますので、お仕事のお休みなどの予定にあわせてご利用いただけます。お急ぎの引越しでも対応できる場合がございますので、まずはお気軽にお問い合わせください。</p>
            </div>
            <div class='img-box'>
              <img src='/images/moving_img02.jpg' />
            </div>
          </div>
          <div class='moving-box'>
            <div class='txt-box'>
              <h5 className='moving-title2'>荷造り・荷解きを迅速サポート！</h5>
              <p>慣れていないと時間がかかる荷造りや荷解きから、量が多く面倒な衣類・本・食器・小物類の梱包・整理に至るまでスタッフが徹底的にお手伝いいたします。多くの現場で培ったノウハウを駆使して、数量が多い場合でも柔軟に対応可能です。引越し作業のお困り事のご質問はお気軽に。</p>
            </div>
            <div class='img-box'>
              <img src='/images/moving_img03.jpg' />
            </div>
          </div>
        </div>

        <p className='moving-infobox'>
          上記は目安の料金であり、リサイクルの可否、回収品の状態・量・サイズ、作業内容などによって実際のお見積もりは異なります。
          <br />
          詳細なお見積もりは、お電話またはメールにてお問い合わせください。
        </p>
      </Layout>
    </>
  );
};
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': `https://aki-risaikuru.com/${pagemeta.slug}/#breadcrumblist`,
      itemListElement: [
        {
          '@type': 'ListItem',
          '@id': 'https://aki-risaikuru.com/#listItem',
          position: 1,
          item: {
            '@type': 'WebPage',
            '@id': 'https://aki-risaikuru.com/',
            name: '広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル',
            description: '広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応',
            url: 'https://aki-risaikuru.com/',
          },
          nextItem: 'https://aki-risaikuru.com/#listItem',
        },
        {
          '@type': 'ListItem',
          '@id': `https://aki-risaikuru.com/${pagemeta.slug}/#listItem`,
          position: 2,
          item: {
            '@type': 'WebPage',
            '@id': `https://aki-risaikuru.com/${pagemeta.slug}/`,
            name: `広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜${pagemeta.subTitle}`,
            description: `広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜${pagemeta.subTitle}`,
            url: `https://aki-risaikuru.com/${pagemeta.slug}/`,
          },
          previousItem: 'https://aki-risaikuru.com/#listItem',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': `https://aki-risaikuru.com/${pagemeta.slug}/#person`,
    },
    {
      '@type': 'WebPage',
      '@id': `https://aki-risaikuru.com/${pagemeta.slug}/#webpage`,
      url: `https://aki-risaikuru.com/${pagemeta.slug}/`,
      name: `広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜${pagemeta.subTitle}`,
      description: `広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜${pagemeta.subTitle}`,
      inLanguage: 'ja',
      isPartOf: {
        '@id': `https://aki-risaikuru.com/${pagemeta.slug}/#website`,
      },
      breadcrumb: {
        '@id': `https://aki-risaikuru.com/${pagemeta.slug}/#breadcrumblist`,
      },
      datePublished: '2022-12-26T01:06:53+09:00',
      dateModified: '2022-12-27T04:27:08+09:00',
    },
    {
      '@type': 'WebSite',
      '@id': `https://aki-risaikuru.com/${pagemeta.slug}/#website`,
      url: `https://aki-risaikuru.com/${pagemeta.slug}/`,
      name: `広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜${pagemeta.subTitle}`,
      description: `広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜${pagemeta.subTitle}`,
      inLanguage: 'ja',
      publisher: {
        '@id': `https://aki-risaikuru.com/${pagemeta.slug}/#person`,
      },
    },
  ],
};

export const Head = () => (
  <>
    <body id='pagetop' />
    <Seo title={pagemeta.subTitle} description='広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのご利用までの流れ' />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);

export default moving;
