import React, { useState } from 'react'
import styled from 'styled-components'

import wallpaper from './ioswallpaper.jpeg'
import Folder from './Folder'
import OpenedFolderBackdrop from './OpenedFolderBackdrop'

const Wrapper = styled.div`
    background-image: url(${wallpaper});
    background-position: center;
    background-size: auto 100%;
    box-sizing: border-box;
    display: grid;
    grid-auto-rows: min-content;
    grid-gap: 1.25rem 1rem;
    grid-template-columns: repeat(4, 1fr);
    padding: 2rem;
    position: relative;
    height: 60rem;
    width: 30rem;
`
// box-sizing includes padding in element's total w and h
// min-content sets height to minimum possible based on content
// without position: relative, even areas outside would get blurred
// by openedfolderbackdrop

const Springboard = ({ folders }) => {
    // with openedFolderId we know which folder is currently open
    const [openedFolderId, setOpenedFolderId] = useState(
        null
    )

    return(
        <Wrapper>
            <OpenedFolderBackdrop isVisible={openedFolderId !== null} />
            {folders.map(folder => (
                <Folder 
                    folder={folder} 
                    key={folder.id} 
                    onOpen={() => setOpenedFolderId(folder.id)}
                />
            ))}
        </Wrapper>
    )
}

export default Springboard