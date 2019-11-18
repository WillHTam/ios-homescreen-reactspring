import React from 'react'
import styled from 'styled-components'
import IconLogo from './icon.png'

const AppIcon = styled.img`
    border-radius: 0.25rem;
    height: auto;
    width: 100%;
`
// Width is 100% because grid-template columns will automatically
// figure out what the width should be

const FolderIcons = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
    box-sizing: border-box;
    display: grid;
    grid-gap: 0.25rem;
    grid-template-columns: repeat(3, 1fr);
    height: 5rem;
    width: 5rem;
    padding: 0.5rem;
`

const FolderName = styled.span`
    color: white;
    margin-top: 0.5rem;
`

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    user-select: none;

    :hover {
        cursor: pointer;
    }
`

const Folder = ({ folder }) => {
    return <Wrapper>
        <FolderIcons>
            <AppIcon src={IconLogo} />
            <AppIcon src={IconLogo} />
            <AppIcon src={IconLogo} />
        </FolderIcons>
        <FolderName>{folder.name}</FolderName>
    </Wrapper>
}

export default Folder