import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    height: 70%;
    border:1px solid gray;
    border-radius: 20px;
    padding: 10px 20px;
    overflow: auto;

    div{
        max-width: 100%;
    };
`

export const Input = styled.input`
    border: none;
    border-radius: 10px;
    outline: none;
    height: 50px;
    width: 300px;
    margin-top: 20px;
    padding-left: 10px;
    font-size: 18px;
`

export const Button = styled.button`
    font-size: 18px;
    height: 50px;
    margin-left: 10px;
`

export const Text = styled.p`
    min-width: 800px;
    font-size: 18px;
    word-wrap: break-word;
    text-align: ${(props) => (props.authorId == props.socketId ? 'right' : 'left')};
    
    span{
        font-weight: bold;
        color: gray;
    }
    
    p{
        max-width: 70%;
        border: 1px solid gray;
        background-color: lightslategray;
        border-radius: 20px;
        display: inline-block;
        padding: 10px;
    }
`