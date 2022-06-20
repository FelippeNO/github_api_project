import React from 'react'
import * as Style from './styled'
import useGithub from "../../hooks/github-hooks"

function Profile() {

    const { githubState } = useGithub()

    return (
        <Style.Container>

            <Style.ContainerAvatar src="https://avatars.githubusercontent.com/u/70477681?v=4"
                alt="User Avatar"
            />
            <Style.ContainerInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <Style.ContainerUsername>
                        <h3>Username: </h3>
                        <a href={githubState.user.html_url}
                            target="_blank"
                            rel="noreferrer">{githubState.user.login}</a>
                    </Style.ContainerUsername>
                </div>
                <Style.ContainerStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </Style.ContainerStatusCount>
            </Style.ContainerInfoUser>
        </Style.Container>
    )
}

export default Profile;