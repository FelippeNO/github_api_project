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
                    <h1>Felippe Negrão</h1>
                    <Style.ContainerUsername>
                        <h3>Username: </h3>
                        <a href="https://"
                            target="_blank"
                            rel="noreferrer">felippeno</a>
                    </Style.ContainerUsername>
                </div>
                <Style.ContainerStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>12</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>12</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>12</span>
                    </div>
                </Style.ContainerStatusCount>
            </Style.ContainerInfoUser>
        </Style.Container>
    )
}

export default Profile;