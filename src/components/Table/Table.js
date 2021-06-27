import React from 'react'
import useFetch from '../../hooks/useFetch'
import Form from '../Form/Form'
import { Container, TableSection } from './Table.style'

const Table = () => {
    const { transactions, searchTitle, search } = useFetch()

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
                    { search === "" ? transactions.map((items, key) => (

                    <tr key={key}>
                        <td>{items.title}</td>
                        <td>{items.description}</td>
                        <td>{items.status}</td>
                        <td>R$ {(items.amount).toFixed(2).replace(".", ",")}</td>
                    </tr>
                    ))
                    
                    : search !== "" ? searchTitle.map((items, key) => (

                        <tr key={key}>
                            <td>{items.title}</td>
                            <td>{items.description}</td>
                            <td>{items.status}</td>
                            <td>R$ {(items.amount).toFixed(2).replace(".", ",")}</td>
                        </tr>
                    )):null }
                </tbody>
            </TableSection>
        </Container>
        </>
    )
}

export default Table
