import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Container, TableSection } from './Table.style'

const Table = () => {
    const { transactions } = useFetch()

    return (
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
                {transactions.map((items, key) => {
                    return (
                <tr key={key}>
                    <td>{items.title}</td>
                    <td>{items.description}</td>
                    <td>{items.status}</td>
                    <td>R$ {(items.amount).toFixed(2).replace(".", ",")}</td>
                    <td></td>
                </tr>
                )})}
            </tbody>
        </TableSection>
        </Container>
    )
}

export default Table
