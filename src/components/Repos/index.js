import React from 'react'
import RepoItem from '../repo-item'
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
            <Styled.ContainerTabPanel>
                <RepoItem
                    name="lol"
                    fullName="loooool"
                    repoLink="http://" />
            </Styled.ContainerTabPanel>
            <Styled.ContainerTabPanel>
                <RepoItem
                    name="lol2"
                    fullName="loooool2"
                    repoLink="http://2" />
            </Styled.ContainerTabPanel>
        </Styled.ContainerTabs>
    )
}

export default Repos