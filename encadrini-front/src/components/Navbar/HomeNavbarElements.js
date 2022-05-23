import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    width: 100%;
`

export const NavLogo = styled(LinkR)`
    height: 60px;
    display: flex;
    justify-self: flex-start;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`

export const NavItems = styled.li`
    height: 40px;
`

export const NavLink = styled(LinkR)`
    cursor: pointer;
    padding: 0 3rem;
    text-transform: uppercase;
    font-weight: 300;
    color: #240046;
    text-decoration: none;

    &:hover{
        font-weight: 700;
        color: #240046;
    }

    &:active{
        font-weight: 500;
    }
`

export const NavBtnContainer = styled.div`
    displey: flex;
    align-items: center;
`

export const NavBtn = styled(LinkR)`
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 35px;
    font-weight: 500;
    background: #7B2CBF;
    border-radius: 50px;
    display: flex;

    &:hover{
        background: #3A0CA3;
        color: white;
    }
`
