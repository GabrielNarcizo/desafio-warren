import React from 'react'
import useFetch from '../../hooks/useFetch'
import { ContainerForm } from './Form.style'

const Form = () => {

    const {setSearch, setSelect} = useFetch()

    return (
        <ContainerForm>
            <input onChange={(e) => {
                setSearch(e.target.value)
                }}
                type="text" name="search" placeholder="Pesquise pelo título"/>
            
            <select
                onChange={(e) => {
                setSelect(e.target.value)
                }}
                id="status"
            >
                <option value="">Status</option>
                <option value="created">Solicitada</option>
                <option value="processing">Processando</option>
                <option value="processed">Concluída</option>
            </select>   
        </ContainerForm>
    )
}

export default Form
