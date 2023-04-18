import React from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"

const MainR = () => {
  return (
    <>
      <div id="main_r">

        <ul className="side_pack_list">
          <li>即日</li>
          <li>定額パック料金</li>
        </ul>
        
        <p className="side_txt01">お見積もりは無料！お急ぎの方はお電話でまずはお気軽にお問い合わせください</p>

        <p className="side_tel">
          <Link to="tel:0120-28-3374">
            <svg width={40} height={26} data-name="フリーダイヤル" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.76 78.81">
              <path class="b" d="M15.49,45.62c0,10.45,8.22,15.51,14.85,15.51s14.84-5.06,14.84-15.51c0-8.11-8.03-14.58-14.84-18.46-6.82,3.87-14.85,10.35-14.85,18.46ZM0,0V78.81H120.76V0H0ZM120.74,19.16c-7.25,0-16.07,1.36-22.98,4.36,7.46,4.99,14.68,12.55,14.68,22.09,0,12.61-10.58,22.25-22.22,22.25s-21.87-9.63-21.87-22.25c0-9.54,6.86-17.1,14.32-22.09-6.91-3-15.05-4.36-22.3-4.36s-15.4,1.36-22.31,4.36c7.46,4.99,14.32,12.55,14.32,22.09,0,12.61-10.22,22.25-21.87,22.25s-22.39-9.63-22.39-22.25c0-9.54,7.38-17.1,14.84-22.09C16.05,20.52,7.25,19.16,0,19.16v-6.9c12.27,0,23.12,3.06,30.51,6.9,7.38-3.84,17.58-6.9,29.85-6.9s22.46,3.06,29.85,6.9c7.38-3.84,18.26-6.9,30.53-6.9v6.9Zm-44.9,26.28c0,10.44,8.22,15.51,14.84,15.51s14.84-5.06,14.84-15.51c0-8.11-8.02-14.59-14.84-18.46-6.82,3.87-14.84,10.35-14.84,18.46Z"/>
            </svg>
            0120-28-3374
          </Link>
        </p>
        <p className="soudan">まずはお電話で無料相談<span>年中無休</span></p>
        
        <div className='center'><Link to="/contact/" className="bt01">オンライン無料見積もり<FontAwesomeIcon icon={faCircleChevronRight} /></Link></div>
        <div className='side_bn'><Link to="/voice/"><StaticImage src="../images/side/side01.png" alt="お客様の声" /></Link></div>
        <div className='side_bn'><Link to="/area/"><StaticImage src="../images/side/side02.png" alt="対応エリア" /></Link></div>
        <div className='side_bn'><Link to="/faq/"><StaticImage src="../images/side/side03.png" alt="よくあるご質問" /></Link></div>
        <div className='side_bn'><Link to="/flow/"><StaticImage src="../images/side/side04.png" alt="ご利用までの流れ" /></Link></div>
        <div className='side_bn'><Link to="https://aki-risaikuru.com/blog/"><StaticImage src="../images/side/side05.png" alt="安芸リサイクルブログ" /></Link></div>
        <div className='side_bn'><StaticImage src="../images/side/rakuten_01.png" alt="" /></div>
        <div className='side_bn'><StaticImage src="../images/side/ihin_seirisi_bn_2.png" alt="遺品整理士" /></div>
        <div className='side_bn'><StaticImage src="../images/side/tokusyu_seisou_bn.png" alt="当事業所には事件現場特殊清掃士の有資格者がいます。" /></div>
        <div className='side_bn'><Link to="http://www.is-mind.org/" target="_blank"><StaticImage src="../images/side/side_04.jpg" alt="遺品整理士認定協会" /></Link></div>
        <div className='side_bn'><StaticImage src="../images/side/side_pic01.jpg" alt="" /></div>
        <p className="center">遺品整理管理基準適合会員<br />
          に認定されました。</p>
        <p className="center"><span className="sonpo">損害保険対応</span></p>

      </div>
    </>
  )
}

export default MainR
