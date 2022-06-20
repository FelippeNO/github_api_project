import React from 'react'

function RepoItem({ name, fullName, repoLink }) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Full Name:</h4>
            <a href={repoLink}
                target="_blank"
                rel="noreferrer">{fullName}
            </a>
        </div>
    )
}

export default RepoItem