import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const BnList = () => {
  return (
    <>
      <div className="bn_list pc"><a href="http://www.hiroshima-ihinseiri.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/ihinseiri_banner.png" alt="広島遺品整理サポート" formats={["auto", "webp", "avif"]} /></a></div>
      <div className="bn_list smp"><a href="http://www.hiroshima-ihinseiri.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/ihinseiri_banner_smp.png" alt="広島遺品整理サポート" /></a></div>
      <div className="bn_list pc"><a href="https://www.bike110.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/bike_banner01.png" alt="バイク廃棄110番" /></a></div>
      <div className="bn_list smp"><a href="https://www.bike110.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/bike_banner01_smp.png" alt="バイク廃棄110番" /></a></div>
      <div className="bn_list"><a href="https://www.keitora.net/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/keitora_bn01.png" alt="安芸軽トラ引越しセンター" /></a></div>
    </>
  )
}

export default BnList
