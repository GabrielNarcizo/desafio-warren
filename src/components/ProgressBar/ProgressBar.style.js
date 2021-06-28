  
import styled from 'styled-components';
  
export const Div = styled.div`
   width: 100%;
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            margin: 0 10px ;
        }
    }
`

export const Progress = styled.div`
    background-color: #d8d8d8;
    position: relative;
    margin: 10px;
    height: 15px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const ProgressDone = styled.div`
    background: #F6678D;
    box-shadow: #F6678D;
    color: #000;
    font-weight: bold;
    display: flex;
    text-align: cente;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 100%;
    opacity: 0;
    transition: 1s ease 0.3s;
`