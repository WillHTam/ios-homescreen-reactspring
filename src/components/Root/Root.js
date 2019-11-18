import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Springboard from './Springboard'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');

    html, body {
        margin: 0;
        padding: 0;
    }

    html, body, #app {
        height: 100%;
        width: 100%;
    }

    body {
        background-color: black;
        font-family: Roboto;
        font-weight: 300;
    }
`

const Wrapper = styled.div `
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%
`

const FOLDERS =[
    { id: 1, name: 'Work'},
    { id: 2, name: 'Productivity'},
    { id: 3, name: 'Social'},
    { id: 4, name: 'Education'},
    { id: 4, name: 'Bear'},
]

const Root = () => {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Springboard folders={FOLDERS} />
            </Wrapper>
        </>
    )
}

export default Root