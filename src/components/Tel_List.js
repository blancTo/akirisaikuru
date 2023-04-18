import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const TelList = () => {
  return (
    <>
      <div className="bn_list"><a href="tel:0120-28-3374"><StaticImage src="../images/free_dial_bt.png" alt="タップして電話かけてね！！tel:0120-28-3374" /></a></div>
      <p className="center"><Link to="/contact/" className="contact_bt">オンライン無料お見積もりはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></Link></p>
    </>
  )
}

export default TelList
