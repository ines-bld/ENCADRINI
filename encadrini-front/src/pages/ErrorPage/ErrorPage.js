import React from 'react'
import notfound from '../../images/page_not_found.svg'
import {ErrorHeading, ImgContainer} from './ErrorPageEelements'

function ErrorPage() {
  return (
    <>
    <ErrorHeading>Error! Page not found</ErrorHeading>
    <ImgContainer>
      <img src={notfound} alt="page not found" width="600"/>
    </ImgContainer>
    </>
  )
}

export default ErrorPage