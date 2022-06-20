import React from 'react'
import * as Styled from './styled'

function Repos() {
    return (
        <Styled.ContainerTabs
            selectedTabClassName='isSelected'
            selectedTabPanelClassName='isSelected'
        >
            <Styled.ContainerTabList>
                <Styled.ContainerTab>Repositories</Styled.ContainerTab>
                <Styled.ContainerTab>Starred</Styled.ContainerTab>
            </Styled.ContainerTabList>
            <Styled.ContainerTabPanel>panel Repositories</Styled.ContainerTabPanel>
            <Styled.ContainerTabPanel>panel Starred</Styled.ContainerTabPanel>
        </Styled.ContainerTabs>
    )
}

export default Repos