import React from 'react'
import * as Styled from './styled'
import useGithub from "../../hooks/github-hooks"
import { useState } from "react";

function Header() {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        <header>
            <Styled.HeaderContainer>
                <input type="text" placeholder="Type username to search..."
                    onChange={(event) => setUsernameForSearch(event.target.value)} />
                <button type="submit"
                    onClick={submitGetUser}
                >
                    Search</button>
            </Styled.HeaderContainer>
        </header>
    )
}

export default Header