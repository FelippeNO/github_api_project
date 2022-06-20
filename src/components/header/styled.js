import styled from 'styled-components';

export const HeaderContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 0.5rem;

input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 30px;
    margin: 0.5rem;
    padding: 0.5rem;
}

button {
    background-color: #ccc;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 13px;

    &:hover{
        background-color: #3b83bd;
        box-shadow: 0px 0px 5px #111;    
    }
}



`