import React from "react";
import Seo from "../components/Seo";
import BreadCrumb from "../components/BreadCrumb";
import Layout from "../components/Layout";

const pagemeta = {
  subTitle: `無料見積り・お問い合わせ`,
  slug: `toiawase`,
};

const toiawase = () => {
  return (
    <>
      <Layout>
        <BreadCrumb title={pagemeta.subTitle} slug={pagemeta.slug} />

        <h3 className="main_title">無料見積り・お問い合わせ</h3>

        <form
          action="https://ssgform.com/s/jxAj75RyJsVD"
          method="post"
          id="mailform"
        >
          <div style={{ display: "none" }}>
            <input type="text" name="wana" />
          </div>
          <table className="form">
            <tbody>
              <tr>
                <th>
                  ご依頼内容<span className="pink bold">※</span>
                </th>
                <td>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="ご依頼内容"
                      className="input-category"
                      defaultValue="不用品回収"
                      required="required"
                    />
                    <span>不用品回収</span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="ご依頼内容"
                      className="input-category"
                      defaultValue="遺品整理"
                      required="required"
                    />
                    <span>遺品整理</span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="ご依頼内容"
                      className="input-category"
                      defaultValue="生前整理"
                      required="required"
                    />
                    <span>生前整理</span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="ご依頼内容"
                      className="input-category"
                      defaultValue="ゴミ屋敷清掃"
                      required="required"
                    />
                    <span>ゴミ屋敷清掃</span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="ご依頼内容"
                      className="input-category"
                      defaultValue="空き家片付け"
                      required="required"
                    />
                    <span>空き家片付け</span>
                  </label>
                </td>
              </tr>
              <tr>
                <th>
                  回収して欲しい量<span className="pink bold">※</span>
                </th>
                <td>
                  <p>おおよそで構いません</p>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="回収して欲しい量"
                      defaultValue="乗用車1台分"
                      required="required"
                    />
                    <span>
                      乗用車   1台分
                      <small>（目安：1～2個程度の家具家電）</small>
                    </span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="回収して欲しい量"
                      defaultValue="軽トラック1台分"
                      required="required"
                    />
                    <span>
                      軽トラック 1台分<small>（目安：1R/1K分の家具家電）</small>
                    </span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="回収して欲しい量"
                      defaultValue="1tトラック1台分"
                      required="required"
                    />
                    <span>
                      1tトラック 1台分
                      <small>（目安：1DK/1LDK分の家具家電）</small>
                    </span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="回収して欲しい量"
                      defaultValue="2tトラック1台分"
                      required="required"
                    />
                    <span>
                      2tトラック 1台分
                      <small>（目安：2LDK/3LDK分の家具家電）</small>
                    </span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="回収して欲しい量"
                      defaultValue="2tトラック2台分"
                      required="required"
                    />
                    <span>
                      2tトラック 2台分
                      <small>（目安：4LDK/5LDK分の家具家電）</small>
                    </span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="回収して欲しい量"
                      defaultValue="2tトラック3台分"
                      required="required"
                    />
                    <span>
                      2tトラック 3台分<small>（目安：6LDKの家具家電</small>
                    </span>
                  </label>
                  <br />
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="回収して欲しい量"
                      defaultValue="それ以上"
                      required="required"
                    />
                    <span>それ以上</span>
                  </label>
                  <input
                    type="text"
                    name="それ以上詳細"
                    placeholder="例）オフィス・飲食店まるごと、デスク・椅子100個分など"
                    maxLength={100}
                    className="w400"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  建物の種類<span className="pink bold">※</span>
                </th>
                <td>
                  <select name="建物の種類" required="required">
                    <option value>お選びください</option>
                    <option value="マンション・アパート">
                      マンション・アパート
                    </option>
                    <option value="戸建て">戸建て</option>
                    <option value="事務所・オフィス">事務所・オフィス</option>
                    <option value="店舗・レストラン">店舗・レストラン</option>
                    <option value="宿泊施設">宿泊施設</option>
                    <option value="倉庫">倉庫</option>
                    <option value="その他">その他</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  エレベーターの有無<span className="pink bold">※</span>
                </th>
                <td>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="エレベーターの有無"
                      defaultValue="ある"
                      required="required"
                    />
                    <span>ある</span>
                  </label>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="エレベーターの有無"
                      defaultValue="ない"
                      required="required"
                    />
                    <span>ない</span>
                  </label>
                </td>
              </tr>
              <tr>
                <th>
                  駐車場の有無<span className="pink bold">※</span>
                </th>
                <td>
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="駐車場の有無"
                      defaultValue="ある"
                      required="required"
                    />
                    <span>
                      ある
                      <small>（自宅に駐車場があり、無料で利用できる）</small>
                    </span>
                  </label>
                  <br />
                  <label className="form-radio">
                    <input
                      type="radio"
                      name="駐車場の有無"
                      defaultValue="ない"
                      required="required"
                    />
                    <span>
                      ない
                      <small>（近隣のコインパーキングを使ってほしい）</small>
                    </span>
                  </label>
                </td>
              </tr>
              <tr>
                <th>
                  ご依頼場所<span className="pink bold">※</span>
                </th>
                <td>
                  〒
                  <input
                    type="text"
                    name="郵便番号"
                    size={30}
                    data-address="都道府県,市区町村,市区町村"
                    autoComplete="off"
                    required="required"
                  />
                  <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li>
                      <span>都道府県</span>
                      <select name="都道府県" required="required">
                        <option value selected="selected">
                          【選択して下さい】
                        </option>
                        <option value="北海道">北海道</option>
                        <option value="青森県">青森県</option>
                        <option value="岩手県">岩手県</option>
                        <option value="秋田県">秋田県</option>
                        <option value="宮城県">宮城県</option>
                        <option value="山形県">山形県</option>
                        <option value="福島県">福島県</option>
                        <option value="栃木県">栃木県</option>
                        <option value="群馬県">群馬県</option>
                        <option value="茨城県">茨城県</option>
                        <option value="埼玉県">埼玉県</option>
                        <option value="東京都">東京都</option>
                        <option value="千葉県">千葉県</option>
                        <option value="神奈川県">神奈川県</option>
                        <option value="山梨県">山梨県</option>
                        <option value="長野県">長野県</option>
                        <option value="新潟県">新潟県</option>
                        <option value="富山県">富山県</option>
                        <option value="石川県">石川県</option>
                        <option value="福井県">福井県</option>
                        <option value="静岡県">静岡県</option>
                        <option value="岐阜県">岐阜県</option>
                        <option value="愛知県">愛知県</option>
                        <option value="三重県">三重県</option>
                        <option value="滋賀県">滋賀県</option>
                        <option value="京都府">京都府</option>
                        <option value="大阪府">大阪府</option>
                        <option value="兵庫県">兵庫県</option>
                        <option value="奈良県">奈良県</option>
                        <option value="和歌山県">和歌山県</option>
                        <option value="徳島県">徳島県</option>
                        <option value="香川県">香川県</option>
                        <option value="愛媛県">愛媛県</option>
                        <option value="高知県">高知県</option>
                        <option value="鳥取県">鳥取県</option>
                        <option value="島根県">島根県</option>
                        <option value="岡山県">岡山県</option>
                        <option value="広島県">広島県</option>
                        <option value="山口県">山口県</option>
                        <option value="福岡県">福岡県</option>
                        <option value="佐賀県">佐賀県</option>
                        <option value="長崎県">長崎県</option>
                        <option value="大分県">大分県</option>
                        <option value="熊本県">熊本県</option>
                        <option value="宮崎県">宮崎県</option>
                        <option value="鹿児島県">鹿児島県</option>
                        <option value="沖縄県">沖縄県</option>
                      </select>
                    </li>
                    <li>
                      <span>市区町村</span>　
                      <input
                        type="text"
                        name="市区町村"
                        size={50}
                        required="required"
                      />
                    </li>
                    <li>
                      <span>丁目番地</span>　
                      <input type="text" name="丁目番地" size={50} />
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th>
                  お名前<span className="pink bold">※</span>
                </th>
                <td>
                  <input
                    type="text"
                    name="姓"
                    data-kana="セイ"
                    size={15}
                    required="required"
                  />
                  　
                  <input
                    type="text"
                    name="名"
                    data-kana="メイ"
                    size={15}
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  フリガナ<span className="pink bold">※</span>
                </th>
                <td>
                  <input
                    type="text"
                    name="セイ"
                    size={15}
                    data-charcheck="zenkaku"
                  />{" "}
                  <input
                    type="text"
                    name="メイ"
                    size={15}
                    data-charcheck="kana"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  電話番号<span className="pink bold">※</span>
                </th>
                <td>
                  <input
                    type="tel"
                    data-type="tel"
                    name="電話番号"
                    size={30}
                    data-min={9}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  メールアドレス<span className="pink bold">※</span>
                </th>
                <td>
                  <input
                    type="email"
                    data-type="email"
                    name="email"
                    size={40}
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  確認のためもう一度<span className="pink bold">※</span>
                </th>
                <td>
                  <input
                    type="email"
                    data-type="email"
                    name="confirm_email"
                    data-post-disable={1}
                    size={40}
                    required="required"
                  />
                </td>
              </tr>
              <tr>
                <th>
                  お問い合わせ内容<span className="pink bold">※</span>
                </th>
                <td>
                  <p className="dark-red">
                    具体的な状況(物のサイズや数)・ご要望等をご入力ください
                  </p>
                  <textarea
                    name="お問い合わせ内容"
                    required="required"
                    rows={10}
                    cols={30}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="recap_box">
            <div
              className="g-recaptcha"
              data-sitekey="6LcDKlUoAAAAAFN19B2RbWlUKvPWd_oaeL5B0Pc_"
            />
          </div>

          <p className="center mb40">
            <button type="submit" className="bt_form">
              送信する
            </button>
            　　
            <button type="reset" className="bt_form">
              リセット
            </button>
          </p>
        </form>
      </Layout>
    </>
  );
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://aki-risaikuru.com/toiawase/#breadcrumblist",
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
          "@id": "https://aki-risaikuru.com/toawase/#listItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://aki-risaikuru.com/toawase/",
            name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜無料見積り・お問い合わせ",
            description:
              "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜無料見積り｜お問い合わせフォーム",
            url: "https://aki-risaikuru.com/toawase/",
          },
          previousItem: "https://aki-risaikuru.com/#listItem",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://aki-risaikuru.com/toawase/#person",
    },
    {
      "@type": "WebPage",
      "@id": "https://aki-risaikuru.com/toawase/#webpage",
      url: "https://aki-risaikuru.com/toawase/",
      name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
      description:
        "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
      inLanguage: "ja",
      isPartOf: {
        "@id": "https://aki-risaikuru.com/toawase/#website",
      },
      breadcrumb: {
        "@id": "https://aki-risaikuru.com/toawase/#breadcrumblist",
      },
      datePublished: "2023-9-26T01:06:53+09:00",
      dateModified: "2023-9-26T04:27:08+09:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://aki-risaikuru.com/toawase/#website",
      url: "https://aki-risaikuru.com/toawase/",
      name: "広島不用品回収・東広島不用品回収・引越しゴミ・家財整理・ゴミ屋敷・遺品整理｜安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
      description:
        "広島の不用品回収・引越しゴミ・お片付け・粗大ゴミ・お家丸ごと・遺品整理・秘密厳守・明朗会計・安心の定額パック・追加料金なし・買取から処分まで・年中無休・損害保険対応・クレジットカード対応・見積無料・遠方地域対応の安芸リサイクル｜無料見積り・お問い合わせありがとうございました。",
      inLanguage: "ja",
      publisher: {
        "@id": "https://aki-risaikuru.com/toawase/#person",
      },
    },
  ],
};

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo
      title={pagemeta.subTitle}
      description="お問い合わせ｜広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクル"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </>
);

export default toiawase;
