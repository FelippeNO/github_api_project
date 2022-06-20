import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: flex-start;
`;

export const ContainerStatusCount = styled.div`
display: flex;
align-items: center;
div {
    margin: 8px;
    text-align: center;
}
`;

export const ContainerUsername = styled.div`
display: flex;
align-items: center;
margin-top: 8px;
h3 {
    margin-right: 8px;
}

a{
    color: blue;
    font-weight: bold;
    font-size: 18px;
}
`;

export const ContainerInfoUser = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;
height: 200px;
margin-left: 20px;
h1{
    font-size: 24px;
    font-weight: bold;
}

h3{
    font-size: 18px;
    font-weight: bold;
}

h4{
    font-size: 16px;
    font-weight: bold;
}
`;

export const ContainerAvatar = styled.img`
border-radius: 50%;
width: 200px;
margin: 8px;
`;

