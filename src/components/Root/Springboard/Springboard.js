import React from 'react'
import styled from 'styled-components'

import wallpaper from './ioswallpaper.jpeg'

const Wrapper = styled.div`
    background-image: url(${wallpaper});
    background-position: center;
    background-size: auto 100%;
    height: 60rem;
    width: 30rem;
`

const Springboard = () => {
    return <Wrapper></Wrapper>
}

export default Springboard