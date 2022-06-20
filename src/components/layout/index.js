import React from 'react'
import * as Styled from './styled'

function Layout({ children }) {
    return (
        <Styled.ContainerLayout>
            <header>
                header
            </header>
            {children}
        </Styled.ContainerLayout>
    )
}

export default Layout