import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api';


export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
})

function GithubProvider({ children }) {
    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            name: undefined,
            html_url: undefined,
            avatar_url: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
            location: undefined,
            company: undefined,
            bio: undefined,
            blog: undefined,
        },
        repositories: [],
        starred: [],
    });

    const getUser = (username) => {
        api.get(`/users/${username}`).then(({ data: { user } }) => {
            setGithubState((prevState) => ({
                ...prevState,
                user: {
                    login: user.login,
                    name: user.name,
                    html_url: user.html_url,
                    avatar_url: user.avatar_url,
                    followers: user.followers,
                    following: user.following,
                    public_gists: user.gists,
                    public_repos: user.repos,
                    location: user.location,
                    company: user.company,
                    bio: user.bio,
                    blog: user.blo,
                },
            }));
        });
    };


    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
    }

    return <GithubContext.Provider value={contextValue}>
        {children}
    </GithubContext.Provider>
}

export default GithubProvider