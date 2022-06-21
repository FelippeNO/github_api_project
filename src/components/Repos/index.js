import React, { useEffect, useState } from 'react'
import RepoItem from '../repo-item'
import * as Styled from './styled'
import useGithub from '../../hooks/github-hooks'

function Repos() {

    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

    useEffect(() => {
        if (!!githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchRepos(!!githubState.repositories);
    }, [githubState.user.login])


    return (<>
        {hasUserForSearchRepos ? (
            <Styled.ContainerTabs
                selectedTabClassName='isSelected'
                selectedTabPanelClassName='isSelected'
            >
                <Styled.ContainerTabList>
                    <Styled.ContainerTab>Repositories</Styled.ContainerTab>
                    <Styled.ContainerTab>Starred</Styled.ContainerTab>
                </Styled.ContainerTabList>
                <Styled.ContainerTabPanel>
                    <Styled.ContainerList>
                        {githubState.repositories.map((item) => (
                            <RepoItem
                                key={item.id}
                                name={item.name}
                                fullName={item.full_name}
                                repoLink={item.html_url}
                            />
                        ))}
                    </Styled.ContainerList>
                </Styled.ContainerTabPanel>
                <Styled.ContainerTabPanel>
                    <Styled.ContainerList>
                        {githubState.starred.map((item) => (
                            <RepoItem
                                key={item.id}
                                name={item.name}
                                fullName={item.full_name}
                                repoLink={item.html_url}
                            />
                        ))}
                    </Styled.ContainerList>
                </Styled.ContainerTabPanel>
            </Styled.ContainerTabs>
        ) : (
            <></>
        )}
    </>
    );
}

export default Repos