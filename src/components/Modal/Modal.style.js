import styled from "styled-components";

export const ModalDiv = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgb(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerModal = styled.div`
    background-color: #fff;
    color: #000;
    width: 40%;
    height: 40%;

    button{
        background-color: transparent;
        border: none;
        outline: none;
        width: 22px;
        height: 22px;
        right: calc(-100% + 20px);
        top: 16px;
        cursor: pointer;
        display: flex;
        position: relative;
        align-items: center;
        &:before,
        &:after {
            content: ' ';
            position: absolute;
            width: 2.5px;
            height: 14px;
            background: #000;
        }

        &:before{
            transform: rotate(45deg);
        }
        &:after{
            transform: rotate(-45deg);
        }
    }
`

export const DivTitle = styled.div`
    text-align: center;
    p{
        font-size: 35px;
        font-weight: bold;
        color: #F6678D;
    }
`

export const DivTransfer = styled.div`
    margin: 20px;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-size: 12px;
        }
    }
`

export const P = styled.p`

    border-bottom: 1px solid #000;
    font-weight: bold;
    font-size: 25px;
    color: #F6678D;
`