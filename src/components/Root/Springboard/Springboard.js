import React from 'react'
import styled from 'styled-components'

import wallpaper from './ioswallpaper.jpeg'
import Folder from './Folder'

const Wrapper = styled.div`
    background-image: url(${wallpaper});
    background-position: center;
    background-size: auto 100%;
    box-sizing: border-box;
    display: grid;
    grid-gap: 1.25rem 1rem;
    grid-template-columns: repeat(4, 1fr);
    padding: 2rem;
    height: 60rem;
    width: 30rem;
`
//  box-sizing includes padding in element's total w and h

const Springboard = ({ folders }) => {
    const [openedFolderId, setOpenedFolder]

    return <Wrapper>
        {folders.map(folder => (
            <Folder folder={folder} key={folder.id} />
        ))}
    </Wrapper>
}

export default Springboard