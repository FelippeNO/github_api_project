import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api';


export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
})

function GithubProvider({ children }) {
    const [githubState, setGithubState] = useState({
        hasUser: false,
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
        api.get(`/users/${username}`).then(({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                hasUser: true,
                loading: !prevState.loading,
                user: {
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    avatar_url: data.avatar_url,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                    location: data.location,
                    company: data.company,
                    bio: data.bio,
                    blog: data.blog,
                },
            }));
        }).finally(() => {
            setGithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
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