import React from 'react'
import Header from '../header'
import * as Styled from './styled'

function Layout({ children }) {
    return (
        <Styled.ContainerLayout>
            <Header />
            {children}
        </Styled.ContainerLayout>
    )
}

export default Layout