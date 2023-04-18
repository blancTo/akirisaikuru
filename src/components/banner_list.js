import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BnList = () => {
  return (
    <>
      <div className="bn_list pc"><Link to="http://www.hiroshima-ihinseiri.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/ihinseiri_banner.png" alt="広島遺品整理サポート" formats={["auto", "webp", "avif"]} /></Link></div>
      <div className="bn_list smp"><Link to="http://www.hiroshima-ihinseiri.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/ihinseiri_banner_smp.png" alt="広島遺品整理サポート" /></Link></div>
      <div className="bn_list pc"><Link to="https://www.bike110.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/bike_banner01.png" alt="バイク廃棄110番" /></Link></div>
      <div className="bn_list smp"><Link to="https://www.bike110.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/bike_banner01_smp.png" alt="バイク廃棄110番" /></Link></div>
      <div className="bn_list"><Link to="https://www.keitora.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/keitora_bn01.png" alt="安芸軽トラ引越しセンター" /></Link></div>
    </>
  )
}

export default BnList
