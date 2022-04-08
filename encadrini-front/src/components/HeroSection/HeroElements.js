import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeroContainer = styled.div`

`

export const HeroWrapper = styled.div`
    display: grid;
    height: 860 px;
    width 100%;
    margin-right: auto;
    margin-left: auto;
    padding 0 24px;
    justify-content: center;
`

export const HeroRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
`

export const Col1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
`

export const Col2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
`

export const Heading = styled.h1`
    color: #240046;
    margin: 50px 10px;
    width: 300px;
`

export const Para = styled.p`
    font-weight: 300;
    width: 450px;
    margin-bottom: 50px;
`

export const HeroBtnContainer = styled.div`
    displey: flex;
    align-items: center;
`

export const HeroBtn = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 35px;
    font-weight: 500;
    background: #7B2CBF;
    border-radius: 50px;

    &:hover{
        background: #3A0CA3;
        color: white;
    }
`

export const ImgWrap = styled.div`
    width: 500px;
    height: 100%;
    margin-top: 100px;
`
