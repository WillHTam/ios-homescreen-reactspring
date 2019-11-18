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

    :hover {
        cursor: pointer;
    }
`
// need these because need to create the capability
// of when to capture pointer events
// instead of always 'pointer-events: none' in the CSS
const MAXIMUM_BLUR = 20
const MINIMUM_OPEN_AMOUNT_ON_SHOW = 0.1 // min to enable pointer events
const MINIMUM_OPEN_AMOUNT_ON_HIDE = 0.9 // when to disable

const OpenedFolderBackdrop = ({ isVisible, onClose: pushClose }) => {
    const spring = useSpring({ openAmount: isVisible ? 1 : 0 })
    const style = {
        backdropFilter: spring.openAmount.interpolate(openAmount => `blur(${openAmount * MAXIMUM_BLUR}px)`),
        opacity: spring.openAmount,
        pointerEvents: spring.openAmount.interpolate(openAmount => {
            return (isVisible && 
                openAmount >= MINIMUM_OPEN_AMOUNT_ON_SHOW) || 
                (!isVisible && openAmount >= MINIMUM_OPEN_AMOUNT_ON_HIDE) 
                ? 'auto' : 'none'
        })
    }

    return <Wrapper onClick={() => pushClose()} style={style}/>
}

export default OpenedFolderBackdrop;