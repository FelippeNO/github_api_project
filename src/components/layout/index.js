import React from 'react'
import Header from '../header'
import * as Styled from './styled'
import useGithub from "../../hooks/github-hooks";

function Layout({ children }) {

    const { githubState } = useGithub();

    return (
        <Styled.ContainerLayout>
            <Header />
            {children}
        </Styled.ContainerLayout>
    )
}

export default Layout