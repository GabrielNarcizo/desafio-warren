import React from 'react'
import useFetch from '../../hooks/useFetch'
import Form from '../Form/Form'
import { Container, TableSection } from './Table.style'

const Table = () => {
    const { searchTitle, search, selectOption } = useFetch()

    const formatLanguage = (txt) =>{
        if(txt === "created"){
            return "Solicitada"
            } else if(txt === "processing"){
                return "Processando"
            }else if(txt === "processed"){
                return "Concluída"
            }
    }

    return (
        <>
        <Form />
        <Container>
            <TableSection>
                <thead>
                    <th>
                    <tr>Titulo</tr>
                    </th>
                    <th>
                    <tr>Descrição</tr>
                    </th>
                    <th>
                    <tr>Status</tr>
                    </th>
                    <th>
                    <tr>Valor</tr>
                    </th>
                </thead>

                <tbody>
                     {search !== "" ? searchTitle.map((items, key) => (

                        <tr key={key}>
                            <td>{items.title}</td>
                            <td>{items.description}</td>
                            <td>{formatLanguage(items.status)}</td>
                            <td>R$ {(items.amount).toFixed(2).replace(".", ",")}</td>
                        </tr>
                    ))
                    : selectOption.map((items, key) => (

                        <tr key={key}>
                            <td>{items.title}</td>
                            <td>{items.description}</td>
                            <td>{formatLanguage(items.status)}</td>
                            <td>R$ {(items.amount).toFixed(2).replace(".", ",")}</td>
                        </tr> 
                    ))
                    }
                </tbody>
            </TableSection>
        </Container>
        </>
    )
}

export default Table
