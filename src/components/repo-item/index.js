import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, repoLink, fullName }) => {
    return (
        <S.Container>
            <S.ContainerTitle>{name}</S.ContainerTitle>

            <S.ContainerFullName>Full Name:</S.ContainerFullName>

            <S.ContainerLink href={repoLink} target="_blank" rel="noreferrer">
                {fullName}</S.ContainerLink>

        </S.Container>
    );
};

export default RepositoryItem;