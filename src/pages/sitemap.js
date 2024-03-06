import React from 'react';
import Seo from '../components/Seo';
import BreadCrumb from '../components/BreadCrumb';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const pagemeta = {
  subTitle: `サイトマップ`,
  slug: `sitemap`,
};

export default function sitemap() {
  return (
    <>
      <Layout>
        <BreadCrumb title={pagemeta.subTitle} slug={pagemeta.slug} />
        <h3 className='main_title'>サイトマップ</h3>
        <ul className='sitemap_list'>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/service/'>サービス一覧</Link>
            <ul>
              <li>
                <Link to='/service/fuyouhin_kaisyu/'>不用品回収・家財整理</Link>
              </li>
              <li>
                <Link to='/service/gomi_yashiki/'>ゴミ屋敷の片付け</Link>
              </li>
              <li>
                <Link to='/service/ihin_seiri/'>遺品整理・仏壇の引取り</Link>
              </li>
              <li>
                <Link to='/service/hikkoshi_gomi/'>引越しに伴う粗大ゴミ回収</Link>
              </li>
              <li>
                <Link to='/service/house_cleaning/'>ハウスクリーニング</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/moving/'>引越しサ―ビス</Link>
          </li>
          <li>
            <Link to='/cleanup/'>家財・片付け専門</Link>
          </li>
          <li>
            <Link to='/price/'>料金</Link>
          </li>
          <li>
            <Link to='/faq/'>よくあるご質問</Link>
          </li>
          <li>
            <Link to='/voice/'>お客様の声</Link>
          </li>
          <li>
            <Link to='/area/'>対応エリア</Link>
          </li>
          <li>
            <Link to='/flow/'>ご利用までの流れ</Link>
          </li>
          <li>
            <Link to='/sitemap/'>サイトマップ</Link>
          </li>
          <li>
            <Link to='/company/'>会社概要</Link>
          </li>
          <li>
            <Link to='/privacy/'>個人情報保護法</Link>
          </li>
        </ul>
      </Layout>
    </>
  );
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://aki-risaikuru.com/sitemap/#breadcrumblist',
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
          '@id': 'https://aki-risaikuru.com/sitemap/#listItem',
          position: 2,
          item: {
            '@type': 'WebPage',
            '@id': 'https://aki-risaikuru.com/sitemap/',
            name: '広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜サイトマップ',
            description: '広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜サイトマップ',
            url: 'https://aki-risaikuru.com/sitemap/',
          },
          previousItem: 'https://aki-risaikuru.com/#listItem',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://aki-risaikuru.com/sitemap/#person',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://aki-risaikuru.com/sitemap/#webpage',
      url: 'https://aki-risaikuru.com/sitemap/',
      name: '広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜サイトマップ',
      description: '広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜サイトマップ',
      inLanguage: 'ja',
      isPartOf: {
        '@id': 'https://aki-risaikuru.com/sitemap/#website',
      },
      breadcrumb: {
        '@id': 'https://aki-risaikuru.com/sitemap/#breadcrumblist',
      },
      datePublished: '2022-12-26T01:06:53+09:00',
      dateModified: '2022-12-27T04:27:08+09:00',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aki-risaikuru.com/sitemap/#website',
      url: 'https://aki-risaikuru.com/sitemap/',
      name: '広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜サイトマップ',
      description: '広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜サイトマップ',
      inLanguage: 'ja',
      publisher: {
        '@id': 'https://aki-risaikuru.com/sitemap/#person',
      },
    },
  ],
};

export const Head = () => (
  <>
    <body id='pagetop' />
    <Seo title={pagemeta.subTitle} description='広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサイトマップ' />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);
