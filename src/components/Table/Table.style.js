import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TableSection = styled.table`
    width: 800px;
    border-collapse: collapse;
    border: none;
    thead{
        background: #F6678D;
        color: #fff;
        th{
        padding: 20px 0;
        }
    }

    tbody{
        
        tr:nth-child(2n){
            
            background: #ccc;
               
        }

        td{
            padding: 20px 0;
        }
    }
`