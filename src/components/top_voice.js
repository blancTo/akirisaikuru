import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function TopVoice() {
  return (
    <>
      <h3 className="title01 mt60">お客様の声</h3>

      <p>
        不用品回収・ゴミ屋敷・遺品整理・引越し時のお片付けなど、安芸リサイクルをご利用いただいたお客様のお声をご紹介しております。
        <br />
        また安芸リサイクルでは、ご利用いただいたお客様に感謝の気持ちを込めて「39コール」を行っております。
        <br />
        お客様により良いサービスがご提供できるよう努めてまいりますので、ご意見・ご要望などがございましたらお気軽にお申し付けください。
      </p>

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
          <div className="center">
            <StaticImage
              src="../images/voice_ilust01.png"
              alt="お客様の声イメージ"
            />
          </div>
          <p className="voice_title01">ご利用サービス</p>
          <p>軽トラック ハーフプラン</p>
          <div className="center">
            <StaticImage src="../images/sarvice_01.png" alt="" />
          </div>
          <p className="voice_title01">お客様満足度</p>
          <ul className="hyoka_list">
            <li>
              <StaticImage src="../images/star_01.png" alt="" />
            </li>
            <li>
              <StaticImage src="../images/star_01.png" alt="" />
            </li>
            <li>
              <StaticImage src="../images/star_01.png" alt="" />
            </li>
            <li>
              <StaticImage src="../images/star_01.png" alt="" />
            </li>
            <li>
              <StaticImage src="../images/star_01.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
