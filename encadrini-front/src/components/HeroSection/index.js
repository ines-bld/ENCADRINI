import React from 'react'
import scrum from '../../images/scrum.svg'

import {
    HeroContainer,
    HeroWrapper,
    HeroRow,
    Col1,
    Heading,
    Para,
    HeroBtnContainer,
    HeroBtn,
    Col2,
    ImgWrap
} from './HeroElements'

const HeroSection = () => {
  return (
    <>
    <HeroContainer>
        <HeroWrapper>
            <HeroRow>
                <Col1>
                    <Heading>Commencer votre projet avec ENCADRINI</Heading>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust since the 1500s, when an unknown printer took a galley of to make a type specimen book.</Para>
                    <HeroBtnContainer>
                        <HeroBtn to="/">Commencer</HeroBtn>
                    </HeroBtnContainer>
                </Col1>
                <Col2>
                    <ImgWrap>
                        <img src={scrum} alt="scrum" width="500"/>
                    </ImgWrap>
                </Col2>
            </HeroRow>
        </HeroWrapper>
    </HeroContainer>
    </>
  )
}

export default HeroSection