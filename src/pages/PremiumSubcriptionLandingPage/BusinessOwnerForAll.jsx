import React from 'react'
import NavBar from '../../Commponents/Common/NavBar/NavBar'
import MainTopSolutions from '../../Commponents/AllPageComponents/MainTopSolutions'
import CientCanGetResultCards from '../../Commponents/AllPageComponents/CientCanGetResultCards'
import WhatYouGonnaGEtIn from '../../Commponents/AllPageComponents/WhatYouGonnaGEtIn'
import GetJustInDollarBar from '../../Commponents/AllPageComponents/GetJustInDollarBar'
import O2Container from '../../Commponents/AllPageComponents/Images&ContentContainers/O2Container'
import O3Container from '../../Commponents/AllPageComponents/Images&ContentContainers/O3Container'
import O1Container from '../../Commponents/AllPageComponents/Images&ContentContainers/O1Container'
import O4Container from '../../Commponents/AllPageComponents/Images&ContentContainers/O4Container'
import Footer from '../../Commponents/Common/Footer/Footer'
import HurryUpBar from '../../Commponents/AllPageComponents/HurryUpBar'
import Footer2 from '../../Commponents/Common/Footer/Footer2'
import OqteqLinks from '../../Commponents/Common/Footer/OqteqLinks'
import GetJustInDollarBarTop from '../../Commponents/AllPageComponents/GetJustInDollarBarTop'
function BusinessOwnerForAll() {
  return (
    < >
      <GetJustInDollarBarTop />
      <NavBar />
      <MainTopSolutions />
      <CientCanGetResultCards />
      <WhatYouGonnaGEtIn />
      <GetJustInDollarBar />
      <O1Container />
      <O2Container />
      <O3Container />
      <O4Container />
      {/* <Footer /> */}
      <HurryUpBar />
      {/* <Footer2 /> */}
      <OqteqLinks />
    </>
  )
}

export default BusinessOwnerForAll