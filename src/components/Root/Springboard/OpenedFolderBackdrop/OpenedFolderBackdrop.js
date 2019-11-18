import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled(animated.div)`
    backdrop-filter: blur(20px);
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    pointer-events: none;

    :hover {
        cursor: pointer;
    }
`

const OpenedFolderBackdrop = ({ isVisible }) => {
    const spring = useSpring({ openAmount: isVisible ? 1 : 0 })
    const style = {
        opacity: spring.openAmount
    }

    return <Wrapper style={style}/>
}

export default OpenedFolderBackdrop;