import React from 'react'
import * as Style from './styled'
import useGithub from "../../hooks/github-hooks"

function Profile() {

    const { githubState } = useGithub();

    return (
        <Style.Container>

            <Style.ContainerAvatar src={githubState.user.avatar_url}
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


                    <Style.ContainerUsername>
                        <h3>Bio: </h3>
                        <span>{githubState.user.bio}</span>
                    </Style.ContainerUsername>

                    <Style.ContainerUsername>
                        <h3>Company: </h3>
                        <span>{githubState.user.company}</span>
                    </Style.ContainerUsername>

                    <Style.ContainerUsername>
                        <h3>Blog: </h3>
                        <a href='githubState.user.blog'>{githubState.user.blog}</a>
                    </Style.ContainerUsername>

                    <Style.ContainerUsername>
                        <h3>Location: </h3>
                        <span>{githubState.user.location}</span>
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